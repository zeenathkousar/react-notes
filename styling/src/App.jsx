// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import './style.css'

// function App() {

//   return (
//     <>
//     <div>
//       <h2 className='primary'>style type 1 - external</h2>
//       <h2 style={{backgroundColor:'red',color:'white'}}>style type 2 - inline</h2>
//     </div>
//     </>
//   )
// }

// export default App

import './App.css'
// import Style from './Custom.module.css'


function App() {

  return (
    <>
      <h1 style={{color:"White", backgroundColor:"skyblue", padding:"100px", textAlign:"center", width:"20%", marginLeft:"30%", borderRadius:"10px", boxShadow:"10px 10px 5px gray"}}>Ineline Css</h1>
      <h1 className="Two">Stylesheet</h1>
      {/* <h1 className={Style.Three}>Style three in react</h1> */}
    </>
  )
}

export default App



