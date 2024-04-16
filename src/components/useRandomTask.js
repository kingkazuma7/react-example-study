import React, { useEffect, useState } from 'react'

const useRandomTask = (id) => {
  console.log("useRandomTaskコンポ: " + id);
  const [task, setTask] = useState(""); // taskに保存する

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        // .then((data) => console.log(data.title));
        .then((data) => {
          console.log(data); // デバッグ用にタイトルをログに出力
          setTask(data.title)
        });
    };
    fetchData();
  }, [id]); // useEffect内の処理を再実行するために

  return task;
}

export default useRandomTask