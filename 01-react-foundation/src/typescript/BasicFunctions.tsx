export const BasicFunctions = () => {
  const addTwoNumbers = (a: number, b: number): string => {
    return `${a + b}`;
  };

  return (
    <>
      <div>BasicFunctions</div>
      <span>el resultado desumar : {addTwoNumbers(1, 3)}</span>
    </>
  );
};
