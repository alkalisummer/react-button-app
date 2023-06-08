import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className='App'>
      <span className='counter_title'>React Counter App</span>
      <div className='counter_btn_div'>
        <button
          id='minus-button'
          className='counter_btn'
          data-testid='minus-button'
          disabled={disabled}
          onClick={() => setCount((prev) => prev - 1)}
          style={disabled ? { color: 'gray' } : { color: 'white' }}>
          -
        </button>
        <span
          className='counter_num'
          data-testid='counter'>
          {count}
        </span>
        <button
          id='plus-button'
          className='counter_btn'
          data-testid='plus-button'
          disabled={disabled}
          onClick={() => setCount((prev) => prev + 1)}
          style={disabled ? { color: 'gray' } : { color: 'white' }}>
          {' '}
          +
        </button>
      </div>
      <div>
        <button
          className='counter_on_off'
          data-testid='on/off-button'
          onClick={() => setDisabled((prev) => !prev)}>
          ON / OFF
        </button>
      </div>
    </div>
  );
}

export default App;
