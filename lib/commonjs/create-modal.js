"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _useModalViewModel = require("./use-modal-view-model");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * 모달 컴포넌트 생성 함수
 */
const createModal = (...[Content, {
  cancelOnBackButtonPress = false,
  cancelOnBackdropPress = false,
  modalProps = {}
} = {}]) => /*#__PURE__*/_react.default.forwardRef((_, ref) => {
  const {
    handleBackButtonPress,
    handleBackdropPress,
    cancel,
    confirm,
    desiredVisibility,
    handleModalHidden,
    handleModalShown,
    param,
    visibility
  } = (0, _useModalViewModel.useModalViewModel)(ref, {
    cancelOnBackButtonPress,
    cancelOnBackdropPress
  });
  const {
    backdropTransitionOutTiming,
    onBackdropPress,
    onBackButtonPress,
    onModalHide,
    onModalWillShow,
    style,
    ...restModalProps
  } = modalProps;

  const _handleBackdropPress = (0, _react.useCallback)(() => {
    handleBackdropPress();
    onBackdropPress === null || onBackdropPress === void 0 ? void 0 : onBackdropPress();
  }, [handleBackdropPress, onBackdropPress]);

  const _handleBackButtonPress = (0, _react.useCallback)(() => {
    handleBackButtonPress();
    onBackButtonPress === null || onBackButtonPress === void 0 ? void 0 : onBackButtonPress();
  }, [handleBackButtonPress, onBackButtonPress]);

  const _handleModalHide = (0, _react.useCallback)(() => {
    handleModalHidden();
    onModalHide === null || onModalHide === void 0 ? void 0 : onModalHide();
  }, [handleModalHidden, onModalHide]);

  const _handleModalWillShow = (0, _react.useCallback)(() => {
    handleModalShown();
    onModalWillShow === null || onModalWillShow === void 0 ? void 0 : onModalWillShow();
  }, [handleModalShown, onModalWillShow]);

  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, _extends({
    isVisible: desiredVisibility,
    backdropTransitionOutTiming: backdropTransitionOutTiming !== null && backdropTransitionOutTiming !== void 0 ? backdropTransitionOutTiming : 0,
    onBackdropPress: _handleBackdropPress,
    onBackButtonPress: _handleBackButtonPress,
    onModalHide: _handleModalHide,
    onModalWillShow: _handleModalWillShow,
    style: [styles.modal, style]
  }, restModalProps), visibility === 'SHOWN' && /*#__PURE__*/_react.default.createElement(Content, {
    confirm: confirm,
    cancel: cancel,
    param: param
  }));
});

exports.createModal = createModal;

const styles = _reactNative.StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0
  }
});
//# sourceMappingURL=create-modal.js.map