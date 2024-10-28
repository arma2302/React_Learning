import { Layout } from "antd";
import React, { useEffect } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";

export default function Navbar() {
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <Layout>
      <nav className="navbar px-4 py-2 w-full mx-auto rounded-xl">
        <div className="wlcm">
          <h3 className="text-xl font-bold">
            welcome! <br />
            {user ? user.name : ""}
          </h3>
        </div>
        <div className="leftMenu">
          <LeftMenu mode={"horizontal"} />
        </div>
        <div className="rightMenu">
          <RightMenu mode={"horizontal"} user={user} />
        </div>
      </nav>
    </Layout>
  );
}
