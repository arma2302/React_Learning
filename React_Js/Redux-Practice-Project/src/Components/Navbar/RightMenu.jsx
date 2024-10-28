import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";

const RightMenu = ({ mode, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <>
      <Menu mode={mode}>
        <Menu.SubMenu
          key={"username"}
          title={
            <div className="flex gap-3 items-center justify-center">
              <Avatar icon={<UserOutlined />} />
              <span className="username text-xl font-serif">
                @{user ? user.username : ""}
              </span>
            </div>
          }
        >
          <Menu.Item
            key="about-us"
            onClick={() => navigate("/admin/dashboard", { replace: true })}
          >
            <UserOutlined /> Profile
          </Menu.Item>
          <Menu.Item key="log-out" onClick={handleLogout}>
            <LogoutOutlined /> Logout
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
};

export default RightMenu;
