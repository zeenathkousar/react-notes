import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toggle } from './Toggle.jsx'
import { HandleForm } from './HandleForm.jsx'
import { Login } from './Login.jsx'
import { Api } from './Api.jsx'
import Navigation from './Navigation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>,
)
