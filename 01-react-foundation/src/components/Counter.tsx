import { useState } from 'react';

export const Counter = () => {
  const [count, setcount] = useState<number>(55);

  const increseBy = (value: number) => {
    setcount(count + value);
  };

  return (
    <>
      <div>Counter: {count}</div>
      <div>
        <button onClick={() => increseBy(1)}>+1</button>
        &nbsp;
        <button onClick={() => increseBy(-1)}>-1</button>
      </div>
    </>
  );
};
