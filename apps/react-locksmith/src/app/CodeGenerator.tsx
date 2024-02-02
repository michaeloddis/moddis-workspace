import { useState } from 'react';
import { Lock, LockInput } from "../components/lock";
import { Code, CodeItem } from "../components/code";
import { useCodeGenerator } from '../hooks/useCodeGenerator';
import { CodeGeneratorButton } from '../components/CodeGeneratorButton';
import { LOCK_TITLE, LABEL } from '../components/Constants';

type CodeShape = {
    value: string;
};

export const CodeGenerator = () => {
    const [minDigit, setMinDigit] = useState(1);
    const [maxDigit, setMaxDigit] = useState(4);
    const [codeLength, setCodeLength] = useState(5);
    const { code, getNextCode } = useCodeGenerator(
        minDigit,
        maxDigit,
        codeLength,
    );
    
    /**
     * Generate the the code for the Lock.
     */
    const onGenerateCodeHandler = () => {
        getNextCode();
    };

    /**
     * Builds and returns a collections of CodeItems based on the codeLength selected.
     * 
     * @returns Array of CodeItems components
     */
    const renderCodeItems = () => {
        const items: CodeShape[] = [];

        // Loop through the codeLength and build an array of code objects
        for (let i=0; i < codeLength; ++i) {
            items.push({ value: code.charAt(i) });
        }

        return items.map((item, index) => {
            return <CodeItem key={index} value={Number(item.value)} divider={true} />
        });
    }

    return (
        <div className='code-generator-container'>
            <Lock>
                <LockInput
                    label={LOCK_TITLE.MIN_DIGIT}
                    value={minDigit}
                    onValueChanged={setMinDigit} />
                <LockInput
                    label={LOCK_TITLE.MAX_DIGIT}
                    value={maxDigit}
                    onValueChanged={setMaxDigit} />
                <LockInput
                    label={LOCK_TITLE.CODE_LENGTH}
                    minValue={4} value={codeLength}
                    onValueChanged={setCodeLength} />
            </Lock>
            <CodeGeneratorButton onGenerateCode={onGenerateCodeHandler}>
                {LABEL.CODE_GENERATOR}
            </CodeGeneratorButton>
            <Code>
                {renderCodeItems()}
            </Code>
        </div>
  );
};

export default CodeGenerator;
