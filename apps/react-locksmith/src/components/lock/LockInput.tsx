/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { LockItem, LockItemActions, LockItemButton, LockInputContainer } from "./";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

interface ILockInput {
    value: number;
    label: string;
    minValue?: number;
    maxValue?: number;
    onValueChanged?: any;
};

export const LockInput = ({
    value = 0,
    label,
    minValue = 0,
    maxValue = 9,
    onValueChanged
}: ILockInput) => {
    const [inputValue, setInputValue] = useState(value);
    const inputElement = useRef<HTMLInputElement>(null);
    const elementId = uuidv4();

    const isNumeric = (str: string) => {
        return /^\d+$/.test(str);
    }

    // Determines of the number is between 0 and 9.
    const isSingleDigit = (value: number) => {
        return value >= 0 && value <= 9;
    }

    // When the Lock Input is changed we check to make sure it is a numeric and it is a single digit.
    // If so, we set the inputValue state to the value from the input. Otherwise, we reset inputValue.
    const onChangeHandler = (event: any) => {
        const value = event.target.value;

        if (isNumeric(value) && isSingleDigit(Number(value))) {
            setInputValue(Number(value));
        } else {
            setInputValue(0);
        }

        if (onValueChanged) {
            onValueChanged(Number(value));
        }
    };

    // Increments the input value and dispatches that the value changes.
    const onIncrement = (value: number) => {
        if (value > (maxValue - 1)) {
            return;
        }

        setInputValue((inputValue) => inputValue + 1);

        if (onValueChanged) {
            onValueChanged((inputValue: number) => inputValue + 1);
        }
    }

     // Decrements the input value and dispatches that the value changes.
    const onDecrement = (value: number) => {
        if (value == minValue) {
            return;
        }

        setInputValue((inputValue) => inputValue - 1);
        
        if (onValueChanged) {
            onValueChanged((inputValue: number) => inputValue - 1);
        }
    }

    // Handle focus.
    const onFocusHandler = () => {
        inputElement.current?.select();
    }

    return (
        <LockInputContainer>
            <label
                id={`lock-input__label-${elementId}`}
                className='lock-input__label'>
                {label}
            </label>
            <LockItem>
                <input
                    aria-labelledby={`lock-input__label-${elementId}`}
                    type='text'
                    ref={inputElement}
                    onFocus={onFocusHandler}
                    onChange={onChangeHandler}
                    className='lock-input'
                    value={inputValue}>
                </input>
                <LockItemActions>
                    <LockItemButton onClick={() => onIncrement(inputValue)}>
                        <FaChevronUp />
                    </LockItemButton>
                    <LockItemButton onClick={() => onDecrement(inputValue)}>
                        <FaChevronDown />
                    </LockItemButton>
                </LockItemActions>
            </LockItem>
        </LockInputContainer>
    )
};