import React from 'react'

type UserProps = {
  username: string;
  notification: number
  name: {
    firstName: string,
    lastName: string,
  }
  students: {
    name: string,
    age: number,
  }[];
}

const DashBoard = (props: UserProps) => {
  console.log(props);
  // console.log(props.students);
  
  return (
    <div>
      DashBoard
      <h1>{props.username}</h1>
      <h2>名前:{props.name.firstName} 本名:{props.name.lastName}</h2>
      <h2>students</h2>
      <div>
        {/* {props.students.map((student, i) => (
          <p key={i}>student.name</p>
        ))}; */}
        <ul>
        {props.students.map((student, i) => (
          <li key={i}>生徒: {student.name}</li>
        ))}
        </ul>
      </div>
      <p>新着の通知が{props.notification}件あります</p>
    </div>
  )
}

export default DashBoard