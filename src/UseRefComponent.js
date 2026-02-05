import React from 'react';
import { useRef } from "react";

// Створіть компонент, який використовує хук useRef.
// Створіть текстове поле та кнопку “Фокус" та “Блюр”.
// При натисканні на кнопку “Фокус”,
// фокус повинен переміститися в текстове поле за допомогою хука useRef.
// При натисканні на кнопку “Блюр”, фокус має відмінитись
// із текстового поля

const UseRefComponent = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };
    const blurInput = () => {
        inputRef.current.blur();
    }
    return (
        <div className='useref'>
            <h2>UseRef Component</h2>
            <input ref={inputRef} type="text" placeholder='Input'></input>
            <button onClick={focusInput}>Focus</button>
            <button onClick={blurInput}>Blur</button>
        </div>
    )
};
export default UseRefComponent;