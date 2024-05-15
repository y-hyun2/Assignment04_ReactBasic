

import React, { useState, useEffect } from 'react';

export function Effect() {
    const [count, setCount] = useState(0)
  
    const countUp = () => {
      setCount(count+1)
    }
  
    useEffect(() => {
      
        if(count % 2) {
          alert("홀수입니다")
        } else {
          alert("짝수입니다")
        }
      
    }, [count])
  
    return(
      <div style={{border:"solid 1px", width:"500px "}}>
      <h3>여긴 useEffect 부분! </h3>
      <h3>{count}</h3>
      <button onClick={countUp}>up!</button>
      </div>
    )
  }

