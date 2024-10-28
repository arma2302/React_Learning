import { Input, Layout, Menu } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuItem from "antd/es/menu/MenuItem";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchProducts } from "../features/productSlice";

export default function AdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const ProductsFromLocal = JSON.parse(localStorage.getItem("products"));
    if (!ProductsFromLocal) {
      dispatch(fetchProducts());
    }
  });
  return (
    <>
      <Layout className="bg-white">
        <Sider
          width="10%"
          className="bg-gray-200 flex flex-col border-r-2 border-gray-100 "
        >
          <Menu className="bg-inherit">
            <MenuItem onClick={() => navigate("/admin/dashboard")}>
              All Products
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/dashboard/addProduct")}>
              Add Product
            </MenuItem>
            <MenuItem onClick={() => navigate("/admin/dashboard/allusers")}>
              All Users
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header className="bg-gray-200 w-full shadow-slate-950 flex justify-between items-center border-b-2 border-gray-100 px-0">
            {" "}
            <Menu className="bg-inherit w-1/2">
              <MenuItem className="w-fit">
                <Input
                  prefix={<GlobalOutlined />}
                  placeholder="Search"
                  className="p-2 w-full"
                />
              </MenuItem>
            </Menu>
          </Header>
          <Content className="w-full min-h-svh p-3">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
