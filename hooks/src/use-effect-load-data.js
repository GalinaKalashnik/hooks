import React, {Component, useContext, useEffect, useState} from 'react';

const AppUseEffectLoadData = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);

    if (visible) {
        return(
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}> + </button>
                <button
                    onClick={() => setVisible(false)}>Hide</button>
                <PlanetInfo id={value} />
            </div>
        )
    } else {
        return(
            <button
                onClick={() => setVisible(true)}>Show</button>
        )
    }
}

const usePlanetInfo = (id) => {
    const [name, setPlanetName] = useState(null);

    useEffect(() => {
        let cancelled = false;

        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res => res.json())
            .then(data => !cancelled && setPlanetName(data.name));

        return () => cancelled = true;

    }, [id])

    return name;
}

const PlanetInfo = ( {id} ) => {
    const name = usePlanetInfo(id);
    return <div>{id} - {name}</div>
}


export default AppUseEffectLoadData;
