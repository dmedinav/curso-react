import React, {useState} from 'react';
import PropTypes from 'prop-types';

const  CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value);

    // console.log(nombre, setNombre);

    const handleadAdd = () => {
        setCounter(counter + 1);
        //setCounter((c) => c+1);
    }

    const handleSubtract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (<>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleadAdd }>+1</button>
            <hr></hr>
            <button onClick={ handleSubtract }>-1</button>
            <hr></hr>
            <button onClick={ handleReset }>reset</button>
            </>);
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;