import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slice/slice';

const CounterControls = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button className='bg-black m-4' onClick={() => dispatch(increment())}>Increment</button>
            <button className='bg-black m-4  ' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='bg-green-500 m-4 ' onClick={() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
};

export default CounterControls;
