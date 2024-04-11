import React from 'react'

type StatuProps = {
  status?: 'loading' | 'success' | 'error';
}

const Status = (props: StatuProps) => {
  console.log(props);
  
  return (
    <div>
      <h1>ReactでTypeScriptを使う③オプショナル型やchildrenの渡し方など</h1>
      <p>{props.status}</p>
    </div>
  )
}

export default Status