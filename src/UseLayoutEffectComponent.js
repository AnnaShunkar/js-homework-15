import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";   

// Створіть компонент, який використовує хук useLayoutEffect.
// У цьому хуці ви можете змінювати DOM
// безпосередньо. Створіть кнопку, яка при натисканні
// додає абзац до сторінки, використовуючи useLayoutEffect.
// Перевірте, що зміни відображаються миттєво після натискання кнопки

function UseLayoutEffectComponent() {
    const [paragraphs, setParagraphs] = useState([]);

    useLayoutEffect(() => {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "New paragraph added";
        document.body.appendChild(newParagraph);
    }, [paragraphs]);

    const handleAddParagraph = () => {
        setParagraphs([...paragraphs, "New paragraph added"]);
    };

    return (
        <div>
            <h2>UseLayoutEffect Component</h2>
            <button onClick={handleAddParagraph}>Add Paragraph</button>
            <p>(look at the bottom of the page)</p>
        </div>
    );

 }

export default UseLayoutEffectComponent;