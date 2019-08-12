import {useState} from 'react';

function useCounter(initialCount = 0, value = 1){
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(previousCount => previousCount + value);
  }

  const decrement = () => {
    setCount(previousCount => previousCount - value);
  }

  const reset = () => {
    setCount(initialCount);
  }

  return [count, increment, decrement, reset];
}

export default useCounter;
