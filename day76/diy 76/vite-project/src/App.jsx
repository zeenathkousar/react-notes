import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products'
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <h2>react router dom tutorial</h2>
      <Outlet />

    </>
  );
}
export default App;
