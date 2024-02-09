// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from 'react'
// import './App.css'

// export default class CompB  extends React.Component{
//   constructor(){
//     super()
//     console.log('component B: constructor () method')
//   }
//   static getDerivedStateFromProps() {
//     console.log('component B: getDerivedStateFromProps () method')

//   }
//   componentDidMount(){
//     console.log('Component B : ComponentDidmount method')
//   }
//   render(){
//     console.log('Component B : render() method')
//     return(
//       <div>
//         hello compBs
//       </div>
      
      
//     )
//   }
// }

import React from 'react'

export default class CompB  extends React.Component{
  constructor(){
    super()
    this.state={
        data:'dummy data'
    }
    console.log('component B: constructor () method')
  }
  static getDerivedStateFromProps() {
    console.log('component B: getDerivedStateFromProps () method')

  }
  componentDidUpdate(){
    console.log('Component B : ComponentDidUpdate method')
  }
  getSnapshotBeforeUpdate(){
    console.log('Component B: getSnapshotBeforeUpdate method')
  }
  shouldComponentUpdate(){
    console.log('Component B: shouldComponentUpdate() method')
    return true
  }
  render(){
    console.log('Component B : render() method')
    return(
      <div>
        hello compBs
        <h2>{this.state.data}</h2>
        <button onClick={()=>{this.setState({data:'dummy2'})}} >click2</button>

      </div>
      
      
    )
  }
}
