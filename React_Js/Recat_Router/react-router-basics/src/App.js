import React from "react";
import Router from "./Router";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import "../src/App.css";

import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import ViewProduct from "./Components/ViewProduct";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/product/:id" element={<ViewProduct />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
