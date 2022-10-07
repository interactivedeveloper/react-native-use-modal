/// <reference types="react" />
/**
 * Modal hook creation function with default set to BottomSheet style
 */
export declare const createUseNotificationModal: <Data extends unknown = void, Param extends unknown = void>(Content: import("react").VoidFunctionComponent<{
    confirm: import("./modal-confirm-function").ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param;
}>, option?: import("./create-modal").CreateModalOption | undefined) => () => import("./modal-instance").ModalInstance<Data, Param>;
