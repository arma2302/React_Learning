import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../Auth";
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
    <div>
      <h1 className="text-4xl text-center">Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
export default LoginPage;
