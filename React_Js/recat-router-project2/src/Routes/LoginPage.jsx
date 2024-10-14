import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { isLogin } from "../services";
import HomePage from "./HomePage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);
    setError(null);

    const { error } = await isLogin(email, password);

    if (!error) {
      navigate("/"); // Redirect to home on successful login
    } else {
      setError(error);
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto  p-4">
      <h1 className="text-4xl text-center m-4">Login</h1>
      <form
        onSubmit={handleLogin}
        className=" rounded  shadow-slate-950 bg-gray-100 flex flex-col gap-4 justify-center items-center p-4 w-1/2 mx-auto"
      >
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          required
          className=" p-2 w-4/5 focus:outline-violet-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="p-2 w-4/5 focus:outline-violet-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-violet-400 w-56 rounded py-2 hover:bg-violet-800"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default LoginPage;
