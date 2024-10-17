import { BrowserRouter, replace, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
