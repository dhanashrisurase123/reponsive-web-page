import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import loginBg from "../../assets/loginImage/login-bg-1.svg";
import logo from "../../assets/loginImage/Logo (1).svg";
import usersData from "../../users.json";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = usersData.users.find(
      (u) => u.email === email && u.Pass === password
    );
    if (user) {
      setMessage("Valid User");
      setIsError(false);

      navigate("/dashboard");
    } else {
      setMessage("Invalid User");
      setIsError(true);
    }
  };

  return (
    <div className="login-page">
      <img
        src={loginBg}
        alt="Background Image for Login Page"
        className="background-image"
      />
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <p>online project management</p>
      </div>
      <div className="login-container">
        <h2 className="text">Login to get started</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {message && <p className={isError ? "error-message" : ""}>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
