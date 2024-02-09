import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h2>child component</h2>
        <button onClick={()=>props.prop1('zeenathdata')}>click</button>
    </div>
  )
}
