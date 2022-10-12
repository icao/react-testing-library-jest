import { useState } from "react";

export const CounterApp = ({ value = 10 }) => {
  const [count, setCount] = useState(value);
  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstract() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(value);
  }

  return (
    <>
      <h2>Contador: {count}</h2>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
