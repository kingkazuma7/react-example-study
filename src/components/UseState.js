import React, { useDebugValue, useState } from 'react'

const UseState = () => {
  // UseState
  const [count, setCount] = useState(5);
  
  const handleCurrentCount = (num) => {
    setCount((current) => {
      console.log(current);
      return current + num;
    });
  }
  
  // 1.変数用意 2.中身をかえる関数　JSver
  // let count = 0;
  // const handleCurrentCount = (num) => {
  //   if (num === -1) {
  //     count = count - 1;
  //     console.log(count);
  //   }
  //   if (num === +1) {
  //     count = count + 1;
  //     console.log(count);
  //   }
  // }
  
  return (
    <div>
      <button onClick={()=>handleCurrentCount(-1)}>-</button>
      <button onClick={()=>handleCurrentCount(+1)}>+</button>
      <p>{count}</p>
    </div>
  )
}

export default UseState