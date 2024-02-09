import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Navabar } from './components/Navabar'

function App() {

  return (
    <>
    <Navabar />
    <h2>react router dom tutorial</h2>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>

    </Routes>
    

    </>
  )
}

export default App
