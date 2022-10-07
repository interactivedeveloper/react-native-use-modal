function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback } from 'react';
import Modal from 'react-native-modal';
import { useModalViewModel } from './use-modal-view-model';
import { StyleSheet } from 'react-native';

/**
 * 모달 컴포넌트 생성 함수
 */
export const createModal = (...[Content, {
  cancelOnBackButtonPress = false,
  cancelOnBackdropPress = false,
  modalProps = {}
} = {}]) => /*#__PURE__*/React.forwardRef((_, ref) => {
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
  } = useModalViewModel(ref, {
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

  const _handleBackdropPress = useCallback(() => {
    handleBackdropPress();
    onBackdropPress === null || onBackdropPress === void 0 ? void 0 : onBackdropPress();
  }, [handleBackdropPress, onBackdropPress]);

  const _handleBackButtonPress = useCallback(() => {
    handleBackButtonPress();
    onBackButtonPress === null || onBackButtonPress === void 0 ? void 0 : onBackButtonPress();
  }, [handleBackButtonPress, onBackButtonPress]);

  const _handleModalHide = useCallback(() => {
    handleModalHidden();
    onModalHide === null || onModalHide === void 0 ? void 0 : onModalHide();
  }, [handleModalHidden, onModalHide]);

  const _handleModalWillShow = useCallback(() => {
    handleModalShown();
    onModalWillShow === null || onModalWillShow === void 0 ? void 0 : onModalWillShow();
  }, [handleModalShown, onModalWillShow]);

  return /*#__PURE__*/React.createElement(Modal, _extends({
    isVisible: desiredVisibility,
    backdropTransitionOutTiming: backdropTransitionOutTiming !== null && backdropTransitionOutTiming !== void 0 ? backdropTransitionOutTiming : 0,
    onBackdropPress: _handleBackdropPress,
    onBackButtonPress: _handleBackButtonPress,
    onModalHide: _handleModalHide,
    onModalWillShow: _handleModalWillShow,
    style: [styles.modal, style]
  }, restModalProps), visibility === 'SHOWN' && /*#__PURE__*/React.createElement(Content, {
    confirm: confirm,
    cancel: cancel,
    param: param
  }));
});
const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0
  }
});
//# sourceMappingURL=create-modal.js.map