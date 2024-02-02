import React from 'react';

interface ILockItemActions {
    children?: React.ReactNode
};

export const LockItemActions = ({
    children
}: ILockItemActions) => {
    return (
        <div className='lock-item-actions'>
            {children}
        </div>
    )
};