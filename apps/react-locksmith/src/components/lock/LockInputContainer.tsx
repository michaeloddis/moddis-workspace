import React from 'react';

interface ILockInputContainer {
    children?: React.ReactNode
};

export const LockInputContainer = ({
    children
}: ILockInputContainer) => {
    return (
        <div className='lock-input-container'>
            {children}
        </div>
    )
};