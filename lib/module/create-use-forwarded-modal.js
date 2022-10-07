import { useModal } from './use-modal';
import React from 'react';
import { createForwardedModal } from './create-forwarded-modal';
export const createUseForwardedModal = (...param) => {
  const Modal = createForwardedModal(...param);
  const modalElement = /*#__PURE__*/React.createElement(Modal, null);
  return () => useModal(modalElement);
};
//# sourceMappingURL=create-use-forwarded-modal.js.map