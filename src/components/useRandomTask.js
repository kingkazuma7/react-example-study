import React, { useEffect, useState } from 'react'

const useRandomTask = () => {
  const [task, setTask] = useState(""); // taskに保存する

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        // .then((data) => console.log(data.title));
        .then((data) => {
          console.log(data); // デバッグ用にタイトルをログに出力
          setTask(data.title)
        });
    };
    fetchData();
  }, []);

  return task;
}

export default useRandomTask