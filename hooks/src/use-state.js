import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div>
            <HookSwitcher />
        </div>
    );
}

const HookSwitcher = () => {

    //color - текущий цвет
    //setColor - функция кот работает аналогично setState
    const [ color, setColor ] = useState('white');
    const [ fontSize, setFontSize ] = useState(14);

    return (
        <div style={{padding: '10px', border: '1px solid #000', backgroundColor: color, fontSize: `${fontSize}px`}}>
            <p>Hello word</p>
            <div style={{marginBottom: '10px'}}>
                <button
                    onClick={() => setColor('grey')}>
                    Dark
                </button>
                <button
                    onClick={() => setColor('white')}>
                    Light
                </button>
            </div>

            <div style={{marginBottom: '10px'}}>
                <button
                    onClick={() => setFontSize((s) => s + 2)}>
                    +
                </button>
                <button
                    onClick={() => setFontSize((s) => s - 2)}>
                    -
                </button>
            </div>
        </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
