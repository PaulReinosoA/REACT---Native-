import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  const { count, increseBy } = useCounter({ intialValue: 10 });
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
