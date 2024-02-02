import React from 'react';

interface ICode {
    children?: React.ReactNode
};

export const Code = ({
    children
}: ICode) => {
    return (
        <div className='code'>
            {children}
        </div>
    )
};