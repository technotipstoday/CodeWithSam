// src/components/MessageComponent.js
import React from 'react';

const MessageComponent = ({ count }) => {
    return (
        <div>
            <h2>Message: {count % 2 === 0 ? 'Even' : 'Odd'}</h2>
        </div>
    );
};

export default MessageComponent;