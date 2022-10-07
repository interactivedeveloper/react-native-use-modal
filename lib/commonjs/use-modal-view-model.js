"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalViewModel = void 0;

var _react = require("react");

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var _modalResultType = require("./modal-result-type");

const useModalViewModel = (ref, {
  cancelOnBackButtonPress = false,
  cancelOnBackdropPress = false
} = {}) => {
  // desired 표시 상태 (이 값이 true 라고 해서 모달이 표시된 상태는 아닙니다. false 도 마찬가지)
  const [desiredVisibility, setDesiredVisibility] = (0, _react.useState)(false); // AlertResult Subject

  const [result$] = (0, _react.useState)(() => new _rxjs.Subject()); // 보여짐/숨겨짐 상태

  const [visibility$] = (0, _react.useState)(() => new _rxjs.BehaviorSubject('HIDDEN'));
  const [param, setParam] = (0, _react.useState)();
  const [visibility, setVisibility] = (0, _react.useState)(visibility$.value);
  (0, _react.useEffect)(() => {
    const subscription = visibility$.subscribe(value => {
      setVisibility(value);
    });
    return () => subscription.unsubscribe();
  }, [visibility$]);
  (0, _react.useImperativeHandle)(ref, () => ({
    // @ts-ignore
    show: _param => {
      setParam(_param); // 모달 표시 상태로 변경 시작

      setDesiredVisibility(true);
      visibility$.next('SHOWN'); // 모달 결과 Subject 에서

      return (0, _rxjs.firstValueFrom)(result$);
    }
  }), [result$, visibility$]); // 모달 종료 (승인)

  const confirm = (0, _react.useCallback)( // @ts-ignore
  data => {
    // 숨김 상태로 변경 시작
    setDesiredVisibility(false); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe((0, _operators.filter)(value => value === 'HIDDEN'), (0, _operators.first)()).subscribe(() => {
      result$.next({
        type: _modalResultType.ModalResultType.CONFIRM,
        // @ts-ignore
        data
      });
    });
  }, [result$, visibility$]); // 모달 종료 (취소)

  const cancel = (0, _react.useCallback)(() => {
    // 숨김 상태로 변경 시작
    setDesiredVisibility(false); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe((0, _operators.filter)(value => value === 'HIDDEN'), (0, _operators.first)()).subscribe(() => {
      result$.next({
        type: _modalResultType.ModalResultType.CANCEL
      });
    });
  }, [result$, visibility$]); // 배경 클릭 핸들

  const handleBackdropPress = (0, _react.useCallback)(() => {
    cancelOnBackdropPress && cancel();
  }, [cancel, cancelOnBackdropPress]); // 뒤로가기 버튼 클릭 핸들

  const handleBackButtonPress = (0, _react.useCallback)(() => {
    cancelOnBackButtonPress && cancel();
  }, [cancel, cancelOnBackButtonPress]); // 모달 보여짐 이벤트 핸들

  const handleModalShown = (0, _react.useCallback)(() => {
    visibility$.next('SHOWN');
  }, [visibility$]); // 모달 숨겨짐 이벤트 핸들

  const handleModalHidden = (0, _react.useCallback)(() => {
    visibility$.next('HIDDEN');
  }, [visibility$]);
  return (0, _react.useMemo)(() => ({
    confirm,
    cancel,
    desiredVisibility,
    handleBackButtonPress,
    handleBackdropPress,
    handleModalShown,
    handleModalHidden,
    param,
    visibility
  }), [confirm, cancel, desiredVisibility, handleBackButtonPress, handleBackdropPress, handleModalShown, handleModalHidden, param, visibility]);
};

exports.useModalViewModel = useModalViewModel;
//# sourceMappingURL=use-modal-view-model.js.map