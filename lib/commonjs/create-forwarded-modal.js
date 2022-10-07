"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForwardedModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useForwardedModalViewModel = require("./use-forwarded-modal-view-model");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 모달 컴포넌트 생성 함수
 */
const createForwardedModal = (...[Content, {
  handleHide = false
} = {}]) => (() => {
  return /*#__PURE__*/_react.default.forwardRef((_, ref) => {
    const {
      confirm,
      cancel,
      desiredVisibility,
      param,
      setHidingFinished
    } = (0, _useForwardedModalViewModel.useForwardedModalViewModel)(ref, {
      handleHide
    });
    const handleOnHide = (0, _react.useCallback)(() => {
      setHidingFinished();
    }, [setHidingFinished]);
    return /*#__PURE__*/_react.default.createElement(Content, {
      confirm: confirm,
      cancel: cancel,
      param: param,
      isVisible: desiredVisibility,
      onHide: handleOnHide
    });
  });
})();

exports.createForwardedModal = createForwardedModal;
//# sourceMappingURL=create-forwarded-modal.js.map