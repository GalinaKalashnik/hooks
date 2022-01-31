import React, {Component, useContext, useEffect, useState} from 'react';

const AppUseEffect = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return(
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}> + </button>
                <button
                    onClick={() => setVisible(false)}>Hide</button>
                <ClassCounter value={value} />
                <HookCounter value={value} />
            </div>
        )
    } else {
        return(
            <button
                onClick={() => setVisible(true)}>Show</button>
        )
    }
}

const HookCounter= ({value}) => {

    // эта функция работает когда создался компонетн и на каждое его изменение как componentDidMount и componentDidUpdate
    //вторым аргументом передается значение за которым мы будем следить и если value измениться только тогда стработает ф-цая как при componentDidUpdate
    //если вторым аргументом передать пустой массив то ф-ция запуститься только один раз как при componentDidMount
    useEffect(() => {
        console.log('useEffect');

        //oчистка предидущего эффекта , прежде чем запустить следующий
        return () => console.log('clear')
        
    }, [value])
    ////


    return <p>{value}</p>
}

class ClassCounter extends Component {
    componentDidMount() {
        console.log('class: mount');
    }

    componentDidUpdate(props) {
        console.log('class: update');
    }
    componentWillUnmount() {
        console.log('class: unmount');
    }

    render() {
        return <p>{this.props.value}</p>
    }
}



export default AppUseEffect;
