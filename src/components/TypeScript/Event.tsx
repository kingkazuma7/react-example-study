// ReactでTypeScriptを使う④関数とeの型指定のやり方
import React from 'react'
// イベントにも型の種類がある
type EventProps = {
  click: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Event = (props: EventProps) => {
  console.dir(props);
  return (
    <div>
      <h2>Event</h2>
      <button onClick={(e) => props.click(e, "おはよう")}>click</button>
      <input type="text" onChange={props.change} />
    </div>
  )
}

export default Event