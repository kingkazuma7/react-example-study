import React from 'react'

const PromiseParts = () => {
  const num = 10;
  const promise = new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("成功です");
    } else {
      reject("失敗です");
    }
  });
  // console.dir(promise);
  
  // finallyメソッド ... 成功、失敗ともに実行したい処理を書く
  promise.then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("終了");
  });
  
  return (
    <div>無理なく理解するJavaScriptのPromise（非同期処理）</div>
  )
}

export default PromiseParts