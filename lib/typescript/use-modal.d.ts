import React, { RefAttributes } from 'react';
import type { ModalInstance } from './modal-instance';
declare type ModalRef = RefAttributes<ModalInstance<any, any>>;
/**
 * 모달을 등록하는 hook
 */
export declare const useModal: <Component extends React.ForwardRefExoticComponent<ModalRef>>(modal: React.ReactElement) => NonNullable<Exclude<NonNullable<React.ComponentPropsWithRef<Component>["ref"]>, Function>["current"]>;
export {};
