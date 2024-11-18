import React from 'react';
import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    const count = useSelector((state) => state.counter.value);

    return <h1 className='text-black '>Count: {count}</h1>;
};

export default CounterDisplay;
