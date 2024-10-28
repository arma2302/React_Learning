import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import CartDrawer from "../Cart/CartDrawer";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="Home">
        <NavLink to={"/"} className="menuitem">
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="Cart">
        <NavLink className="menuitem">
          {" "}
          <CartDrawer />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="Wishlist">
        <NavLink to={"/products/wishlist"} className="menuitem">
          Wishlist
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
