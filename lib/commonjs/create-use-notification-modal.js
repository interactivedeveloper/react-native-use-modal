"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseNotificationModal = void 0;

var _createCreateUseModal = require("./create-create-use-modal");

/**
 * Modal hook creation function with default set to BottomSheet style
 */
const createUseNotificationModal = (0, _createCreateUseModal.createCreateUseModal)({
  modalProps: {
    style: {
      margin: 0,
      padding: 0,
      justifyContent: 'flex-start'
    },
    animationIn: 'slideOutDown',
    animationOut: 'slideInUp'
  }
});
exports.createUseNotificationModal = createUseNotificationModal;
//# sourceMappingURL=create-use-notification-modal.js.map