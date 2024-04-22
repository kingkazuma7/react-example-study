import React from 'react';

const Object_01 = () => {
 // Personクラスを定義
  class Person {
    constructor(living, age, gender) {
      this.living = living;
      this.age = age;
      this.gender = gender;
    }
    getGender() {
      return this.gender;
    }
  }
  // Personオブジェクトをインスタンス化
  const cody = new Person(true, 30, "male");
  console.log(cody);
  return (
      <div>Object_01</div>
  );
}

export default Object_01;
