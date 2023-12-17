// src/components/CounterComponent.js
import React from 'react';

const CounterComponent = ({ count, onIncrement }) => {
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={onIncrement}>Increment</button>
        </div>
    );
};

export default CounterComponent;