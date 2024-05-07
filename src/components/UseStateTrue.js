import React, { useState } from 'react'

const useStateTrue = () => {
  // 入力するたびにレンダリングされる
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("============== handleSubmit click!! ==============");
    console.log(email, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" value={email} 
            onChange={(e) => setEmail(e.target.value)} /> 
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  )
}

export default useStateTrue