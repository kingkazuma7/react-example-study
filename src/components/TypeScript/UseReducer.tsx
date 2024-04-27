import React, { useReducer } from 'react'

type CounterStateType = { // stateの型
  count: number;
}
type CounterActionType = { // actionの型
  type: string,
  payload: number,
}

const UseReducer = () => {
  const initialState = { count: 0 };

  function reducer(state: CounterStateType, action: CounterActionType) {
    console.log(state, action);
    
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload }
      case 'decrement':
        return { count: state.count - action.payload }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
      {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
    </div> 
  )
}

export default UseReducer