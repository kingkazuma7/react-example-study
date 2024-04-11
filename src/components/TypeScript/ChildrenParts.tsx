import React from 'react'

type ChildrenProps = {
  children: string;
}

const Children = (props: ChildrenProps) => {
  
  return (
    <div>{props.children}</div>
  )
}

export default Children