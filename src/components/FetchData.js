import React, { useState } from 'react'

// https://youtu.be/cWu_QAckWFE?si=VPrJnzX5RXNECYxM 参考
const FetchData = () => {
  const [loading, setLoading] = useState(false); // ローディング
  const [post, setPost] = useState({}); // データ
  const [error, setError] = useState(false); // エラー の3つセット
  
  const handleClick = () => {
    setLoading(true);
    setError(false);
    fetch('https://jsonplaceholder.typicode.com/todos/21')
      .then(response => response.json())
      .then(json => {
        setPost(json);
        setLoading(false);
      })
      .catch (( error ) => {
        setError(true);
      });
  };
  
  return (
    <div>
      <button onClick={handleClick}>{loading ? 'Loading..' : 'Click!' }</button>
      <p>id: {post?.id}</p>
      <p>title:{post?.title}</p>
      <p>error: {error && 'Error'}</p>
    </div>
  )
}

export default FetchData