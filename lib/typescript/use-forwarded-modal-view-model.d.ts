import { MutableRefObject } from 'react';
import type { ModalInstance } from './modal-instance';
import type { ModalConfirmFunction } from './modal-confirm-function';
export declare const useForwardedModalViewModel: <Data extends unknown = void, Param extends unknown = void>(ref: MutableRefObject<ModalInstance<Data, Param> | null> | ((instance: ModalInstance<Data, Param> | null) => void) | null, { handleHide, }: {
    handleHide: boolean;
}) => {
    confirm: ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param | null;
    setHidingFinished: () => void;
    desiredVisibility: boolean;
};
