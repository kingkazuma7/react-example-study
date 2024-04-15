import React, { useEffect, useState } from 'react'

const CustomHook = () => {
  const [task, setTask] = useState(""); // taskに保存する

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        // .then((data) => console.log(data.title));
        .then((data) => setTask(data.title));
    };
    fetchData();
  }, []);
  
  
  return (
    <div>{task}</div>
  )
}

export default CustomHook