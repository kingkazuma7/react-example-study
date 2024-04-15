import React, { useEffect, useState } from 'react'
import useRandomTask from './useRandomTask';

const CustomHook = () => {
  const task = useRandomTask();

  return (
    <div>{task}</div>
  )
}

export default CustomHook