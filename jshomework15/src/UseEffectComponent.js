import React from "react";
import { useEffect, useState } from "react";

// Створіть компонент, який використовує хук useEffect.
// При кожному оновленні компонента хук useEffect
// має викликатися і виводити повідомлення в консоль.
// Перевірте, що повідомлення виводяться під час
// рендерингу компонента та після його оновлення.
// (Оновлювати компонент маєте будь як)
const UseEffectComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component is update");
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>UseEffect Component</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
};
export default UseEffectComponent;