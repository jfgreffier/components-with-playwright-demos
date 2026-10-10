import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // TODO
  };

  return (
    <>
      <div className="counter">count is {count}</div>
      <br />
      <button aria-label="increase" onClick={handleClick}>➕</button>
    </>
  );
}