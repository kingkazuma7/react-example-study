import React, { useState } from 'react'

type User = {
  name: string;
  email: string;
  tel: string;
}

const UseStateTSX = () => {
  // const [loginStatus, setLoginStatus] = useState(false)
  const [user, setUser] = useState<User>({} as User);
  console.log(user);
  

  const isLogIn = () => {
    setUser({
      name: 'yamada',
      email: 'test@test.com',
      tel: "",
    })
  }
  // console.log(loginStatus);
  
  return (
    <div>
      <button onClick={isLogIn}>ログイン</button>
      {/* <button onClick={isLogOut}>ログアウト</button> */}
      {/* <p>ステータスは、{loginStatus ? "ログイン" : "ログアウト" }です。</p> */}
      <p>ユーザー名：{user.name}</p>
      <p>メールアドレス：{user.email}</p>
      <p>電話：{user.tel}</p>
    </div>
  )
}

export default UseStateTSX