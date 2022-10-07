"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForwardedModalViewModel = void 0;

var _react = require("react");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _modalResultType = require("./modal-result-type");

var _event = require("./event");

const useForwardedModalViewModel = (ref, {
  handleHide
}) => {
  // desired 표시 상태 (이 값이 true 라고 해서 모달이 표시된 상태는 아닙니다. false 도 마찬가지)
  const [desiredVisibility, setDesiredVisibility] = (0, _react.useState)(false); // AlertResult Subject

  const [result$] = (0, _react.useState)(() => new _rxjs.Subject()); // 보여짐/숨겨짐 상태

  const [visibility$] = (0, _react.useState)(() => new _rxjs.BehaviorSubject('HIDDEN'));
  const [param, setParam] = (0, _react.useState)(null);
  const [hidingFinishedEvent$] = (0, _react.useState)(() => new _rxjs.Subject());
  const [hideCommand$] = (0, _react.useState)(() => new _rxjs.Subject());
  (0, _react.useEffect)(() => {
    const subscription = hideCommand$.pipe((0, _operators.switchMap)(() => {
      setDesiredVisibility(false);

      if (handleHide) {
        return hidingFinishedEvent$.pipe((0, _operators.first)(), (0, _operators.tap)(() => {
          visibility$.next('HIDDEN');
        }));
      } else {
        visibility$.next('HIDDEN');
        return _rxjs.EMPTY;
      }
    })).subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, [handleHide, hideCommand$, hidingFinishedEvent$, visibility$]);
  const hide = (0, _react.useCallback)(() => {
    hideCommand$.next(new _event.Event());
  }, [hideCommand$]);
  const show = (0, _react.useCallback)(() => {
    setDesiredVisibility(true);
    visibility$.next('SHOWN');
  }, [visibility$]);
  (0, _react.useImperativeHandle)(ref, () => ({
    // @ts-ignore
    show: _param => {
      setParam(_param);
      show(); // 모달 결과 Subject 에서

      return (0, _rxjs.firstValueFrom)(result$);
    }
  }), [result$, show]); // 모달 종료 (승인)

  const confirm = (0, _react.useCallback)( // @ts-ignore
  data => {
    hide(); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe((0, _operators.filter)(value => value === 'HIDDEN'), (0, _operators.first)()).subscribe(() => {
      result$.next({
        type: _modalResultType.ModalResultType.CONFIRM,
        // @ts-ignore
        data
      });
    });
  }, [hide, result$, visibility$]); // 모달 종료 (취소)

  const cancel = (0, _react.useCallback)(() => {
    hide(); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe((0, _operators.filter)(value => value === 'HIDDEN'), (0, _operators.first)()).subscribe(() => {
      result$.next({
        type: _modalResultType.ModalResultType.CANCEL
      });
    });
  }, [hide, result$, visibility$]);
  const setHidingFinished = (0, _react.useCallback)(() => {
    hidingFinishedEvent$.next(new _event.Event());
  }, [hidingFinishedEvent$]);
  return (0, _react.useMemo)(() => ({
    confirm,
    cancel,
    param,
    setHidingFinished,
    desiredVisibility
  }), [confirm, cancel, param, setHidingFinished, desiredVisibility]);
};

exports.useForwardedModalViewModel = useForwardedModalViewModel;
//# sourceMappingURL=use-forwarded-modal-view-model.js.map