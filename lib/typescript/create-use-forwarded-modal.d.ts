import React from 'react';
export declare const createUseForwardedModal: <Data extends unknown = void, Param extends unknown = void>(Content: React.VoidFunctionComponent<{
    confirm: import("./modal-confirm-function").ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param | null;
    onHide: () => void;
    isVisible: boolean;
}>, option?: {
    handleHide?: boolean | undefined;
} | undefined) => () => import("./modal-instance").ModalInstance<Data, Param>;
