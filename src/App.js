import React from 'react';
import UseEffectComponent from './UseEffectComponent';
import UseLayoutEffectComponent from './UseLayoutEffectComponent';
import UseStateComponent from "./UseStateComponent";
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='div'>
          <UseEffectComponent />
        </div>
        <div className='div'>
           <UseLayoutEffectComponent />
        </div>
        <div className='div'>
           <UseStateComponent />
       </div>
        <div className='div'>
          <UseReducerComponent/>
        </div>
        <div className='div'>
          <UseRefComponent/> 
        </div>
      </header>
    </div>
  );
}

export default App;
