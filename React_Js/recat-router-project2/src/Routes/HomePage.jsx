import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center text-2xl text-blue-900">Home Page </h1>
      <nav>
        <ul className="flex justify-center">
          <li className="mx-4">
            <Link to="/">Home</Link>
          </li>

          <li className="mx-4">
            <Link to="/logOut">LogOut</Link>
          </li>
          <li className="mx-4">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
