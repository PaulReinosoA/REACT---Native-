import { useState } from 'react';

interface options {
  intialValue?: number;
}

export const useCounter = ({ intialValue = 55 }: options) => {
  const [count, setcount] = useState<number>(intialValue);

  const increseBy = (value: number) => {
    const newVal = count + value;
    if (newVal < 0) return;
    setcount(count + value);
  };
  return {
    // propoerties
    count,
    // Methods
    increseBy,
  };
};
