export const BasicTypes = () => {
  const name: string = 'Paul Reinoso';
  const age: number = 3.1321;
  const isActive: boolean = true;
  const power: string[] = ['1', '2', '2', '33'];
  power.push('next');

  return (
    <>
      <div>BasicTypes, {name}</div>
      <div>{age}</div>
      <div>{isActive ? 'true' : 'false'}</div>
      <div>{power.join(', ')}</div>
    </>
  );
};
