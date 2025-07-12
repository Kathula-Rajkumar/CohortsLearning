// checking how many times ReRender occured with and without useRef hook

1. without useRef (declaring the variable globally) or initializing before using

import React from 'react'
import {useState} from 'react'


let numberOFtimesReRendered = 0; // declaring globally without using useRef hook
export default function Assignment2() {
    const [count, setCount] = useState(0);

    numberOFtimesReRendered = numberOFtimesReRendered + 1;

    const handleReRender = (() =>{
        setCount(count + 1);
    })


  return (
    <div>
       <p>Number of times re-rendered{numberOFtimesReRendered}times </p>
       <button onClick={handleReRender}>Force to re-render</button>
       </div>
  )
}

2. with useRef 

import React from 'react'
import {useState, useRef} from 'react'


export default function Assignment2() {
    const [count, setCount] = useState(0);

    let numberOFtimesReRendered = useRef(0);

    numberOFtimesReRendered.count = numberOFtimesReRendered.count + 1;

    const handleReRender = (() =>{
        setCount(count + 1);
    })


  return (
    <div>
       <p>Number of times re-rendered{numberOFtimesReRendered.count}times </p>
       <button onClick={handleReRender}>Force to re-render</button>
       </div>
  )
}


//outputs 

Number of times re-rendered (it keeps on increases when clicking the Force to re-render button)times.

