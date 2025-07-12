import React, { useMemo, useState } from 'react';

export function Assignment1() {
  const [input, setInput] = useState(0);

  const expensiveValue = useMemo(() =>{
    let value = 1;
    for (let i = 1; i <=input; i++) {
      value = value * i;
    }
    return value;
  },[input])
   
 

  return (
    <div>
      <input 
         type="number"
         value={input}
         onChange={(e) => setInput(Number(e.target.value))}
      />
         <p>Calculated value: {expensiveValue}</p>
    </div>
  );


}

//Factorial of a number using useMemo();
