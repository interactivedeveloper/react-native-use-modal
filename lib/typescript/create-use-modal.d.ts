import React from 'react';
/**
 * A function that creates a custom hook that returns an object with a modal display function.
 */
export declare const createUseModal: <Data extends unknown = void, Param extends unknown = void>(Content: React.VoidFunctionComponent<{
    confirm: import("./modal-confirm-function").ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param;
}>, option?: import("./create-modal").CreateModalOption | undefined) => () => import("./modal-instance").ModalInstance<Data, Param>;
