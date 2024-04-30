import React, { useReducer } from 'react'

// ------------ 型
type CounterStateType = { // stateの型
  count: number;
}
type IncrementDecrementActionType = { // actionの型
  type: 'increment' | 'decrement',
  payload: number,
}
type ResetActionType = { // reset用の型
  type: 'reset',
}
type CounterActionType = IncrementDecrementActionType | ResetActionType; // +- or resetのどちらかが引数で入ってるくる(型)

// ------------ 型
const UseReducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: CounterStateType, action: CounterActionType) {
    console.log(state, action);
    
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload }
      case 'decrement':
        return { count: state.count - action.payload }
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }

  
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
      <p><button onClick={() => { dispatch({type: 'reset'}) }}>リセット</button></p>
    </div>
  )
}

export default UseReducer