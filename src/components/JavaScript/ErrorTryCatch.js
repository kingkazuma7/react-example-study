import React from 'react'

const ErrorTryCatch = () => {
  function func(val) {
    if (val > 20) {
      // エラーにする
      const error = new Error("エラー発生");
      throw error;
    } else {
      // 正常
      console.log(val);
    }
  }
  // func(100);
  
  const num = 100;
  function tryFunc() {
    try {
      num = num + 1;
    } catch (error) {
      console.error(error);
      return;
    } finally {
      console.log("エラー後も実行");
    }
    console.log("関数のコンソールです");
  }
  tryFunc();
  
  return (
    <div>ErrorTryCatch</div>
  )
}

export default ErrorTryCatch