import React from 'react'

type UserProps = {
  username: string;
  notification: number
}

const DashBoard = (props: UserProps) => {
  console.log(props);
  
  return (
    <div>
      DashBoard
      <h1>{props.username}</h1>
      <p>新着の通知が{props.notification}件あります</p>
    </div>
  )
}

export default DashBoard