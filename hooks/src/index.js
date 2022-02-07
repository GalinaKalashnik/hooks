import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

import AppUseEffect from './use-effect';
import AppUseEffectExercises from './use-effect-exercises';
import AppUseEffectLoadData from "./use-effect-load-data";

const MyContext = React.createContext();

const App = () => {
    return(
        <MyContext.Provider value='Hello World'>
            <Child />
        </MyContext.Provider>
    );
}

const Child = () => {
    //было
    // return(
    //     <MyContext.Consumer>
    //         { (value) => {
    //             return (
    //                 <p> {value} </p>
    //             )
    //         }
    //         }
    //     </MyContext.Consumer>
    // );

    //стало

    const value = useContext(MyContext);
    return (
        <div>
            <p>{value}</p>
            <AppUseEffectExercises />

            <AppUseEffectLoadData />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
