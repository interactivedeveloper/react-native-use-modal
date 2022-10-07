import React from 'react';
export declare const ModalContext: React.Context<{
    set: (id: string, node: React.ReactNode) => void;
    delete: (id: string) => void;
}>;
