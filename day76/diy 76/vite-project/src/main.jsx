import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';

//components
import { Address } from "./components/Address.jsx";
import { Comp1 } from "./components/Comp1.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import { ProductDetails } from "./pages/ProductDetails.jsx";

// import { BrowserRouter } from "react-router-dom";
// import { Routes,Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />}  >  // /products
          {/* <Route path="address" element={<Address />} /> // /products/address
          <Route path="comp1" element={<Comp1 />}/>    //  /products/comp1 */}
          <Route path=":id" element={<ProductDetails/>} />

      </Route>
      <Route path='*' element={<h2>page not found</h2>}></Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router } />
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
  </React.StrictMode>
);




