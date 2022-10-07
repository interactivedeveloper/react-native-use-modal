"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseModal = void 0;

var _createModal = require("./create-modal");

var _useModal = require("./use-modal");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A function that creates a custom hook that returns an object with a modal display function.
 */
const createUseModal = (...param) => {
  const Modal = (0, _createModal.createModal)(...param);

  const modalElement = /*#__PURE__*/_react.default.createElement(Modal, null);

  return () => (0, _useModal.useModal)(modalElement);
};

exports.createUseModal = createUseModal;
//# sourceMappingURL=create-use-modal.js.map