import React from 'react';
import type { ModalConfirmFunction } from './modal-confirm-function';
import type { ModalInstance } from './modal-instance';
declare type ContentComponent<Data extends unknown = void, // 모달 결과로 받을 값의 타입
Param extends unknown = void> = React.VoidFunctionComponent<{
    confirm: ModalConfirmFunction<Data>;
    cancel: () => void;
    param: Param | null;
    onHide: () => void;
    isVisible: boolean;
}>;
declare type Option = {
    handleHide?: boolean;
};
export declare type CreateForwardedModalFunctionParam<Data extends unknown = void, Param extends unknown = void> = [Content: ContentComponent<Data, Param>, option?: Option];
/**
 * 모달 컴포넌트 생성 함수
 */
export declare const createForwardedModal: <Data extends unknown = void, Param extends unknown = void>(Content: ContentComponent<Data, Param>, option?: Option | undefined) => React.ForwardRefExoticComponent<React.RefAttributes<ModalInstance<Data, Param>>>;
export {};
