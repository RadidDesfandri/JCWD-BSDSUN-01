import { useState } from "react";

export const useCounter = (val: number = 0, step: number = 1) => {
  const [count, setCount] = useState<number>(val);

  const decrement = () => setCount(count - step);

  const increment = () => setCount(count + step);

  return { count, decrement, increment };
  //   return [count, decrement, increment];
};
