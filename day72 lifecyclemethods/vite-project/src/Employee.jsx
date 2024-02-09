import React from 'react'


class Employee extends React.Component{
    componentWillUnmount(){
        alert('component will unmount called')
    }
    render(){
  return (
    <div>
      <h2>Employee element </h2>
    </div>
  )
    }
}


export default Employee