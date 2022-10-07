import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ModalContext } from './modal-context';
import { isNotNil } from './util/is-not-nil';
import { ModalIdGenerator } from './modal-id-generator';

/**
 * 모달을 등록하는 hook
 */
export const useModal = modal => {
  const context = useContext(ModalContext); // 모달 ID

  const modalId = useMemo(() => String(ModalIdGenerator.getInstance().generate()), []);
  const [instance$] = useState(() => new BehaviorSubject(null));
  useEffect(() => {
    const clone = /*#__PURE__*/React.cloneElement(modal, {
      ref: instance => {
        instance$.next(instance);
      }
    });
    context.set(modalId, clone);
    return () => {
      context.delete(modalId);
    };
  }, [context, instance$, modal, modalId]);
  const show = useCallback(async param => (await firstValueFrom(instance$.pipe(filter(isNotNil)))).show(param), [instance$]);
  return useMemo(() => {
    return {
      show
    };
  }, [show]);
};
//# sourceMappingURL=use-modal.js.map