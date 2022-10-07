import type React from 'react';
import type { ComponentPropsWithRef } from 'react';
export declare type ForwardedRef<Component extends React.ForwardRefExoticComponent<any>> = NonNullable<Exclude<NonNullable<ComponentPropsWithRef<Component>['ref']>, Function>['current']>;
