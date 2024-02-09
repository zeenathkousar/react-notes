import React from 'react'
import Employee from './Employee';




class Parent2 extends React.Component{
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
  return (
    <div>
      <h2>parent element </h2>
      <p>illustrating componentwillunmount() method.</p>
      {/* <Employee/> */}
      {
        this.state.show ? <Employee/> : null
      }
    <button onClick={()=>this.setState({show:!this.state.show})}>toggle hide/show child component</button>
    </div>
   
  )
    }
}




export default Parent2
