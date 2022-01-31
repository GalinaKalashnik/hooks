import React, {Component, useContext, useEffect, useState} from 'react';

const AppUseEffectExercises = () => {
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

                <Notification />
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

    useEffect(() => {
        console.log('mount');

        return () => console.log('unmount');
    }, [])

    useEffect(() => {
        console.log('update');
    })

    useEffect(() => () => console.log('unmount'), [])


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

const Notification = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false)
        }, 1500)

        return () => clearTimeout(timeout);
    }, [])
    return (
        <div>
            {visible && <p>Notification message</p>}
        </div>
    )

}



export default AppUseEffectExercises;
