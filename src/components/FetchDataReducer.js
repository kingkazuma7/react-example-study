import React, { useReducer } from 'react'
import { initialState, reducer } from './reducer';

// https://youtu.be/cWu_QAckWFE?si=VPrJnzX5RXNECYxM 参考
const FetchDataReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, post, error } = state;
  
  const handleClick = () => {
    dispatch({ type: 'START' });
    
    fetch('https://jsonplaceholder.typicode.com/todos/21')
      .then(response => response.json())
      .then(json => {
        dispatch({ type: 'SUCCESS', payload: json });
      })
      .catch (( error ) => {
        dispatch({ type: 'ERROR' });
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

export default FetchDataReducer