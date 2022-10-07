import { createModal } from './create-modal';
import { useModal } from './use-modal';
import React from 'react';
/**
 * A function that creates a custom hook that returns an object with a modal display function.
 */

export const createUseModal = (...param) => {
  const Modal = createModal(...param);
  const modalElement = /*#__PURE__*/React.createElement(Modal, null);
  return () => useModal(modalElement);
};
//# sourceMappingURL=create-use-modal.js.map