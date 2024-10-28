import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import Wishlist from "./Components/Wishlist";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute"; // Import the HOC for protected routes
import AdminPage from "./Pages/AdminPage";
import AllProducts from "./Components/Admin/AllProducts";
import AddProducts from "./Components/Admin/AddProducts";
import AdminLogin from "./Pages/AdminLogin";
import ProductsList from "./Components/Products/ProductsList";
import Product from "./Components/Products/Product";
import CartDrawer from "./Components/Cart/CartDrawer";
import AllUsers from "./Components/Admin/AllUsers";

export default function App() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute user={currentUser}>
              <HomePage user={currentUser}></HomePage>
            </ProtectedRoute>
          }
        >
          {/* Nested Routes under HomePage */}
          <Route index element={<ProductsList />} />
          <Route path="products/:id" element={<Product />}></Route>
          <Route path="products/wishlist" element={<Wishlist />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adminLogin" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminPage />}>
          <Route index element={<AllProducts />} />
          <Route path="addProduct" element={<AddProducts />} />
          <Route path="editProduct/:ID" element={<AddProducts />} />
          <Route path="allusers" element={<AllUsers />}></Route>
        </Route>
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
