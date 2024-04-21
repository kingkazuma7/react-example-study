import React, { useEffect, useRef, useState } from 'react'

const ReactuseEffect = () => {
  // const [textState, setTextState] = useState("");
  const textRef = useRef();
  const [flag, setFlag] = useState(false);
  console.log(flag);

  // 副作用 []あると副作用しなくなる renderのあとにuseEffect実行される
  useEffect(() => {
    return () => {
      console.count("副作用");
    }
  }, [flag]);
  console.count("render");

  return (
    <div>
      {/* <input
        type="text"
        value={textState}
        onChange={(e) => setTextState(e.target.value)} /> */}
      <input type="text" ref={textRef} />
        {/* 送信したときは副作用発生 */}
      <button onClick={() => setFlag((prev) => !prev)}>送信</button>
    </div>
  )
}

export default ReactuseEffect