import React from 'react'

const Return = () => {
  function sumNum() {
    let a = 10;
    let b = 10;
    console.log("hello");
    return a + b;
  }
  // console.log(sumNum());　// undefinedになる
  
  const number = {
    id: 999,
  };
  
  function ifFunc(number) {
    if (number?.id != null) { // idがあった際
      if (number.id < 50) {
        console.log("50より小さい");
      } else if (number.id < 100) {
        console.log("100より小さい");
      } else {
        console.log("101より大きい");
      }
    } else { // idがなかった際
      console.log("数字ではありません");
    }
  }
  // ifFunc(number);
  
  const number2 = {
    id: null,
  };
  function ifFuncReturn(number) {
    if (number?.id == null) return console.log("数字ではありません");
    if (number.id < 50) {
      console.log("50より小さい");
    } else if (number.id < 100) {
      console.log("100より小さい");
    } else {
      console.log("101より大きい");
    }
  }
  ifFuncReturn(number2);　// "数字ではありません"と出力される
  
  return (
    <div>Return</div>
  )
}

export default Return