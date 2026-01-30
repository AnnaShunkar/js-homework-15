import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react'; 

// Створіть компонент, який використовує хук useReducer.
// Додайте 3 кнопки “Імʼя”, “Пвізвище”, “Рік народження”.
// Додайте аналогічні 3 текстові поля “input”.
// initialState = {name: ‘’, lastName: ‘’, birthYear: ‘’}.
// Після вводу в текстове поле з іменем і натискання на кнопку “Імʼя”,
// має додати введений текст в обʼєкт поле “name”, і т.д.
//  Виведіть обʼєкт на екран.

const initialState = { name: "", lastName: "", birthYear: "" };

function reducer (state, action) {
    switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_BIRTHYEAR":
      return { ...state, birthYear: action.payload };
    default:
      return state;
  }

};


const UseReducerComponent = () => {
const [state, dispatch] = useReducer(reducer, initialState);

  const [nameInput, setNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [birthYearInput, setBirthYearInput] = useState("");

    return (
        <div className='usereduce'>
            <input type='text' value={nameInput} onChange={(e) => setNameInput(e.target.value)}></input>
            <button onClick={() => dispatch({ type: "SET_NAME", payload: nameInput })}>Name</button>
            <input type='text' value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)}></input>
            <button onClick={() =>
            dispatch({ type: "SET_LASTNAME", payload: lastNameInput })}>Last Name</button>
            <input type="text" value={birthYearInput} onChange={(e) => setBirthYearInput(e.target.value)}></input>
            <button onClick={() =>
            dispatch({ type: "SET_BIRTHYEAR", payload: birthYearInput })}>Birth Year</button>

            <p>{JSON.stringify(state, null, 2)}</p>
        </div>
    )
}

export default UseReducerComponent;

