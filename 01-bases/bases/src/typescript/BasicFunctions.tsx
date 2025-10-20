export const BasicFunctions = () => {

  const a: number = 7;
  const b: number = 2;

  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar {a}= {addTwoNumbers(a, b)}</span>
    </>
  );
};
