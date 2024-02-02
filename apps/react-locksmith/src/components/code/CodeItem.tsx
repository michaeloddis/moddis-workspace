import { useEffect, useState } from 'react';
import { animate } from "framer-motion";

interface ICodeItem {
    value: number;
    divider?: boolean;
};

export const CodeItem = ({
    value = 0,
    divider = false
}: ICodeItem) => {
    const [lockValue, setLockValue] = useState(value);

    useEffect(() => {
        const controls = animate(0, value, {
          duration: 1,
          onUpdate(value: number) {
            setLockValue(Number(value.toFixed()));
          }
        });
    
        return () => controls.stop();
    }, [value]);

    return (
        <div className='code-item'>
            {lockValue}
            {divider ? <hr className='code-item__divider'></hr> : null}
        </div>
    )
};