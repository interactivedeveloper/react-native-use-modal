import React, { useCallback } from 'react';
import { useForwardedModalViewModel } from './use-forwarded-modal-view-model'; // 모달 내용 컴포넌트

/**
 * 모달 컴포넌트 생성 함수
 */
export const createForwardedModal = (...[Content, {
  handleHide = false
} = {}]) => (() => {
  return /*#__PURE__*/React.forwardRef((_, ref) => {
    const {
      confirm,
      cancel,
      desiredVisibility,
      param,
      setHidingFinished
    } = useForwardedModalViewModel(ref, {
      handleHide
    });
    const handleOnHide = useCallback(() => {
      setHidingFinished();
    }, [setHidingFinished]);
    return /*#__PURE__*/React.createElement(Content, {
      confirm: confirm,
      cancel: cancel,
      param: param,
      isVisible: desiredVisibility,
      onHide: handleOnHide
    });
  });
})();
//# sourceMappingURL=create-forwarded-modal.js.map