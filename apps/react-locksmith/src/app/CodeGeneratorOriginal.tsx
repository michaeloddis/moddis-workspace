import React, { useState } from 'react';
import { useCodeGenerator } from '../hooks/useCodeGenerator';

export const CodeGenerator = () => {
  const [minDigit, setMinDigit] = useState(1);
  const [maxDigit, setMaxDigit] = useState(4);
  const [codeLength, setCodeLength] = useState(5);
  const { code, getNextCode } = useCodeGenerator(
    minDigit,
    maxDigit,
    codeLength,
  );

  const onClickHandler = () => {
    getNextCode();
  };

  return (
    <>
      <p>
        minDigit:{' '}
        <input
          type="number"
          value={minDigit}
          onChange={(e) => setMinDigit(Number(e.currentTarget.value))}
        />
      </p>
      <p>
        maxDigit:{' '}
        <input
          type="number"
          value={maxDigit}
          onChange={(e) => setMaxDigit(Number(e.currentTarget.value))}
        />
      </p>
      <p>
        codeLength:{' '}
        <input
          type="number"
          value={codeLength}
          onChange={(e) => setCodeLength(Number(e.currentTarget.value))}
        />
      </p>
      <button onClick={onClickHandler}>Generate Code</button>
      <p>{code}</p>
    </>
  );
};

export default CodeGenerator;
