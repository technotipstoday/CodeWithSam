import React, { useState } from 'react';
import CounterComponent from './CounterComponent';
import MessageComponent from './MessageComponent';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return(<div>
        <h1>Parent Component</h1>
        {/* passing props `count` and `incrementCount` to child component */}
        <CounterComponent count={count} onIncrement={incrementCount} />
        <MessageComponent count={count} />
    </div>) 
}



export default ParentComponent;