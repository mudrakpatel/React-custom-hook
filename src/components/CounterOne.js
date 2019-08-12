import React from 'react';
import useCounter from '../hooks/useCounter';

function CounterOne(){
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return(
    <div>
      <h2>Counter 1 Count: {count}</h2>
      <button onClick={increment}>Increment Count</button>
      <button onClick={decrement}>Decrement Count</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  )
}

export default CounterOne;
