"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseBottomSheetModal = void 0;

var _createCreateUseModal = require("./create-create-use-modal");

/**
 * Modal hook creation function with default set to BottomSheet style
 */
const createUseBottomSheetModal = (0, _createCreateUseModal.createCreateUseModal)({
  modalProps: {
    style: {
      margin: 0,
      padding: 0,
      justifyContent: 'flex-end'
    },
    animationIn: 'slideInUp',
    animationOut: 'slideOutDown'
  },
  cancelOnBackButtonPress: true,
  cancelOnBackdropPress: true
});
exports.createUseBottomSheetModal = createUseBottomSheetModal;
//# sourceMappingURL=create-use-bottom-sheet-modal.js.map