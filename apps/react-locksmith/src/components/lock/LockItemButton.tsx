/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ILockItemButton {
    children?: React.ReactNode;
    onClick?: any;
};

export const LockItemButton = ({
    children,
    onClick
}: ILockItemButton) => {
    return (
        <button
            className='lock-item-button'
            onClick={onClick}>
            {children}
        </button>
    )
};