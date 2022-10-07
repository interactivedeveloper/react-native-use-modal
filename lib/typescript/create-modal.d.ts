import React from 'react';
import type { ModalProps } from 'react-native-modal';
import type { ModalConfirmFunction } from './modal-confirm-function';
import type { ModalInstance } from './modal-instance';
export declare type CreateModalOption = {
    cancelOnBackdropPress?: boolean;
    cancelOnBackButtonPress?: boolean;
    modalProps?: Omit<Partial<ModalProps>, 'isVisible'>;
};
export declare type CreateModalFunctionParam<Data extends unknown = void, // 모달 결과로 받을 값의 타입
Param extends unknown = void> = [
    Content: React.VoidFunctionComponent<{
        confirm: ModalConfirmFunction<Data>;
        cancel: () => void;
        param: Param;
    }>,
    option?: CreateModalOption
];
/**
 * 모달 컴포넌트 생성 함수
 */
export declare const createModal: <Data extends unknown = void, Param extends unknown = void>(Content: React.VoidFunctionComponent<{
    confirm: ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param;
}>, option?: CreateModalOption | undefined) => React.ForwardRefExoticComponent<React.RefAttributes<ModalInstance<Data, Param>>>;
