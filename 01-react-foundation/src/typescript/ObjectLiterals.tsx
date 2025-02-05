interface Person {
  Name: string;
  age: number;
  lastame: string;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNumber: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    Name: 'Paul ',
    age: 37,
    lastame: 'Reinoso',
    address: {
      country: 'Canada',
      houseNumber: 615,
    },
  };

  const { age } = person;

  return (
    <>
      <h3>ObjectLiterals</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      {age}
    </>
  );
};
