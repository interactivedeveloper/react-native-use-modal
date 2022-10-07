import { useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { BehaviorSubject, EMPTY, firstValueFrom, Subject } from 'rxjs';
import { filter, first, switchMap, tap } from 'rxjs/operators';
import { ModalResultType } from './modal-result-type';
import { Event } from './event';
export const useForwardedModalViewModel = (ref, {
  handleHide
}) => {
  // desired 표시 상태 (이 값이 true 라고 해서 모달이 표시된 상태는 아닙니다. false 도 마찬가지)
  const [desiredVisibility, setDesiredVisibility] = useState(false); // AlertResult Subject

  const [result$] = useState(() => new Subject()); // 보여짐/숨겨짐 상태

  const [visibility$] = useState(() => new BehaviorSubject('HIDDEN'));
  const [param, setParam] = useState(null);
  const [hidingFinishedEvent$] = useState(() => new Subject());
  const [hideCommand$] = useState(() => new Subject());
  useEffect(() => {
    const subscription = hideCommand$.pipe(switchMap(() => {
      setDesiredVisibility(false);

      if (handleHide) {
        return hidingFinishedEvent$.pipe(first(), tap(() => {
          visibility$.next('HIDDEN');
        }));
      } else {
        visibility$.next('HIDDEN');
        return EMPTY;
      }
    })).subscribe();
    return () => {
      subscription.unsubscribe();
    };
  }, [handleHide, hideCommand$, hidingFinishedEvent$, visibility$]);
  const hide = useCallback(() => {
    hideCommand$.next(new Event());
  }, [hideCommand$]);
  const show = useCallback(() => {
    setDesiredVisibility(true);
    visibility$.next('SHOWN');
  }, [visibility$]);
  useImperativeHandle(ref, () => ({
    // @ts-ignore
    show: _param => {
      setParam(_param);
      show(); // 모달 결과 Subject 에서

      return firstValueFrom(result$);
    }
  }), [result$, show]); // 모달 종료 (승인)

  const confirm = useCallback( // @ts-ignore
  data => {
    hide(); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe(filter(value => value === 'HIDDEN'), first()).subscribe(() => {
      result$.next({
        type: ModalResultType.CONFIRM,
        // @ts-ignore
        data
      });
    });
  }, [hide, result$, visibility$]); // 모달 종료 (취소)

  const cancel = useCallback(() => {
    hide(); // 숨김 상태로 변경되면 result 발행

    visibility$.pipe(filter(value => value === 'HIDDEN'), first()).subscribe(() => {
      result$.next({
        type: ModalResultType.CANCEL
      });
    });
  }, [hide, result$, visibility$]);
  const setHidingFinished = useCallback(() => {
    hidingFinishedEvent$.next(new Event());
  }, [hidingFinishedEvent$]);
  return useMemo(() => ({
    confirm,
    cancel,
    param,
    setHidingFinished,
    desiredVisibility
  }), [confirm, cancel, param, setHidingFinished, desiredVisibility]);
};
//# sourceMappingURL=use-forwarded-modal-view-model.js.map