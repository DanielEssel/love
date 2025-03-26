import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // This will log whenever count changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log('Incrementing from', prevCount, 'to', newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      console.log('Decrementing from', prevCount, 'to', newCount);
      return newCount;
    });
  };

  const reset = () => {
    console.log('Resetting count from', count, 'to 0');
    setCount(0);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      margin: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '300px'
    }}>
      <h2>Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;