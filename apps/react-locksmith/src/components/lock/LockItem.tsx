import React from 'react';

interface ILockItem {
    children?: React.ReactNode
};

export const LockItem = ({
    children
}: ILockItem) => {
    return (
        <div className='lock-item'>
            {children}
        </div>
    )
};