import React, { useEffect, useState } from 'react'
import useRandomTask from './useRandomTask';

const CustomHook = () => {
  const [inputText, setInputText] = useState("1");
  // console.log(inputText);
  const task = useRandomTask(inputText); // 引数に渡す

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} />
      </form>
      {task}
      </div>
  )
}

export default CustomHook