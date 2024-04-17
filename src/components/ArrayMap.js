import React from 'react'

const ArrayMap = () => {
  // const arr = [];
  const arr = ["aaa", "bbb", "ccc"];
  // console.log(arr);
  const obj = {
    name: "taro",
    age: 20,
    gender: "male",
  };
  // console.log(obj);
  return (
    <div>
      <p>◾️データあれば表示 > 0で1以上なら要素表示</p>
      {/* データあれば表示 > 0で1以上なら要素表示 */}
      {arr.length > 0 && arr.map((item, i) => (
        <h2 key={i}>{item}</h2>
      ))}
      <hr />
      <p>◾️objはlengthなし</p>
      <h2>{obj && obj.name}</h2>
    </div>
  )
}

export default ArrayMap