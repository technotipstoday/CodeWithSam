import React, { useState } from 'react';

const ColorSelector = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Orange'];

  const handleChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh', minWidth: '100vw' }}>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select a color</option>
        {colors.map((color) => (
          <option key={color} value={color.toLowerCase()}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorSelector;