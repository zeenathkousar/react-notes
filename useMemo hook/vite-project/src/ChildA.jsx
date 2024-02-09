import React,{memo} from 'react'

 const ChildA = ({Learning,count}) => {
    console.log('child component')
  return (
    <div>
        <h2>this is child component</h2>

    </div>
  )
}
export default memo(ChildA)