import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChildA } from "./ChildA";

const data = createContext();
const data1 = createContext();

function App() {
  const name = "zeenath";
  const gender = "female";

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChildA />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
export {data,data1}
