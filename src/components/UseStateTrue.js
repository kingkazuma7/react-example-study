import React, { useRef, useState } from 'react'

const useStateTrue = () => {
  // 入力するたびにレンダリングされる
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // console.log(email);
  
  const emailRef = useRef();
  const passwordRef = useRef();

  // refだとレンダリングしない
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            ref={emailRef}
            id="email"
            type="email" /> 
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
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