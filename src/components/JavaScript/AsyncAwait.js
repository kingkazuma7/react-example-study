import React from 'react'

const AsyncAwait = () => {
  const res = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(res()); // Promise
  res().then((data) => console.log(data));
  
  return (
    <div>AsyncAwait</div>
  )
}

export default AsyncAwait