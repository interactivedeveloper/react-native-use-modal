"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseForwardedModal = void 0;

var _useModal = require("./use-modal");

var _react = _interopRequireDefault(require("react"));

var _createForwardedModal = require("./create-forwarded-modal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createUseForwardedModal = (...param) => {
  const Modal = (0, _createForwardedModal.createForwardedModal)(...param);

  const modalElement = /*#__PURE__*/_react.default.createElement(Modal, null);

  return () => (0, _useModal.useModal)(modalElement);
};

exports.createUseForwardedModal = createUseForwardedModal;
//# sourceMappingURL=create-use-forwarded-modal.js.map