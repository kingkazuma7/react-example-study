import React, { useState } from 'react'

const UseStateTSX = () => {
  const [loginStatus, setLoginStatus] = useState(false)

  const isLogIn = () => {
    setLoginStatus(true);
  }
  const isLogOut = () => {
    setLoginStatus(false);
  }
  // console.log(loginStatus);
  
  return (
    <div>
      <button onClick={isLogIn}>ログイン</button>
      <button onClick={isLogOut}>ログアウト</button>
      <p>ステータスは、{loginStatus ? "ログイン" : "ログアウト" }です。</p>
    </div>
  )
}

export default UseStateTSX