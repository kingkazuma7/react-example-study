import React from 'react';

const Object_01 = () => {
  // codyオブジェクトを生成
  // var cody = new Object();
  // codyオブジェクトにプロパティを格納する（ここではドット表記法を使用）
  // cody.living = true;
  // cody.age = 33;
  // cody.gender = 'male';
  // console.log(cody); // 出力：Object {living: true, age: 33, gender: "male"}

  const obj = () => {
    var cody = new Object();
    cody.living = true;
    cody.age = 33;
    cody.gender = 'male';
    cody.getGender = function(){
      return cody.gender;
    };
    cody.getAge = () => {
      return cody.age;
    }
    console.log(cody.getGender()); // 出力：male
    console.log(cody.getAge()); // 33
  }
  // obj();
  
  const foo = () => {
    var myObject = new Object(); // Object()オブジェクトを生成

    // ブラケット記法（2.3参照）でmyObjectの0、1、2の各プロパティに文字を代入
    myObject['0'] = 'f';
    myObject['1'] = 'o';
    myObject['2'] = 'o';
    myObject['3'] = '!';
    console.log(myObject); // 出力：Object { 0="f", 1="o", 2="o"}

    var myString = new String('new foo'); // String()オブジェクトを生成（通常この方法では文字列を生成することはない）
    console.log(myString); // 出力：foo { 0="f", 1="o", 2="o"}
  }
  // foo();
  
  /* 次の例では、上の例と同じオブジェクトを生成しますが、次はObject()コンストラクタで一度きりのcodyを生成するのではなく、最初にcodyオブジェクト（もしくは他のPersonオブジェクト）を生成するPerson()コンストラクタを定義しnewを使ってインスタンス化します。 */
  const Person = () => {
    const PersonArg = function(living, age, gender) {
      this.living = living;
      this.age = age;
      this.gender = gender;
      this.getGender = function() {return this.gender;};
    };
    console.log(typeof PersonArg);
    const codyB = new PersonArg(true, 30, 'male');
    console.log(codyB);
  }
  Person();

  return (
      <div>Object_01</div>
  );
}

export default Object_01;
