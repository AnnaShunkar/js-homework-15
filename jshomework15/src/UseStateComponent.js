import React from 'react';
import { useState } from 'react';

// Створіть компонент, який використовує хук useState.
// При натисканні на кнопку нехай виводиться рандомно
// фразу “Hello …”, де “…” буде рандомне імʼя, додайте мінімум 5 імен

const UseStateComponent = () => {
    const names = ["Anna", "Bob", "Vova", "Ivan", "Kate"];
    const [name, setName] = useState("");

    const generateName = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        setName(names[randomIndex]);
    };

    return (
        <div>
            <h2>{`Hello, ${name}`}</h2>
            <button onClick={generateName}>Name</button>
        </div>
    );
};
export default UseStateComponent;