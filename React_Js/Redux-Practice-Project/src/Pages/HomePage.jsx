import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../features/productSlice";

export default function HomePage({ user }) {
  const [isLoggedIn, setLoggedIn] = useState(user ? true : false);
  const dispatch = useDispatch();
  useEffect(() => {
    const ProductsFromLocal = JSON.parse(localStorage.getItem("products"));
    if (!ProductsFromLocal) {
      dispatch(fetchProducts());
    }
  });
  return (
    <Layout>
      <Navbar />
      <Content className="main">
        <Outlet />
      </Content>
    </Layout>
  );
}
