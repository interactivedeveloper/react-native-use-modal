import { MutableRefObject } from 'react';
import type { ModalInstance } from './modal-instance';
import type { ModalConfirmFunction } from './modal-confirm-function';
declare type ModalVisibility = 'HIDDEN' | 'SHOWN';
export declare const useModalViewModel: <Data extends unknown = void, Param extends unknown = void>(ref: MutableRefObject<ModalInstance<Data, Param> | null> | ((instance: ModalInstance<Data, Param> | null) => void) | null, { cancelOnBackButtonPress, cancelOnBackdropPress, }?: {
    cancelOnBackdropPress?: boolean | undefined;
    cancelOnBackButtonPress?: boolean | undefined;
}) => {
    confirm: ModalConfirmFunction<Data>;
    cancel: () => void;
    desiredVisibility: boolean;
    handleBackButtonPress: () => void;
    handleBackdropPress: () => void;
    handleModalShown: () => void;
    handleModalHidden: () => void;
    param: Param | undefined;
    visibility: ModalVisibility;
};
export {};
