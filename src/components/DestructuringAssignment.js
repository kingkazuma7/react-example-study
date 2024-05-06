import React from 'react'

const DestructuringAssignment = () => {
  const student = {
    id: "0001",
    name: "山田",
    age: 18
  };
  // console.log(student.id); // "0001"と出力される
  // console.log(student.name); // "山田"と出力される
  // console.log(student.age); // "18"と出力される
  
  // const { id: num, name, age } = student;
  // console.log(num, name, age, typeof age);
  
  Object.freeze(student);
  // student.id = "0002"; // obj 配列を固定する
  console.log(student.id);

  return (
    <div>DestructuringAssignment</div>
  )
}

export default DestructuringAssignment