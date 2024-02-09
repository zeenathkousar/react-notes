// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from 'react'
// import './App.css'
// import CompB from './CompB'

// export default class App  extends React.Component{
//   constructor(){
//     super()
//     console.log('component A: constructor () method')
//   }
//   static getDerivedStateFromProps() {
//     console.log('component A: getDerivedStateFromProps () method')

//   }
//   componentDidMount(){
//     console.log('Component A : ComponentDidmount method')
//   }
//   render(){
//     console.log('Component A : render() method')
//     return(
//       <div>
//         hello
//         <CompB/>
//       </div>
      
      
//     )
//   }
// }


import React from 'react'
import CompB from './CompB'

export default class App  extends React.Component{
  constructor(){
    super()
    console.log('component A: constructor () method')
  }
  static getDerivedStateFromProps() {
    console.log('component A: getDerivedStateFromProps () method')

  }
  getSnapshotBeforeUpdate(){
    console.log('Component A: getSnapshotBeforeUpdate method')
  }
  shouldComponentUpdate(){
    console.log('Component A: shouldComponentUpdate() method')
    return true
  }
  componentDidUpdate(){
    console.log('Component A : ComponentDidUpdate method')
  }
  render(){
    console.log('Component A : render() method')
    return(
      <div>
        hello
        <CompB />
      </div>
      
      
    )
  }
}

