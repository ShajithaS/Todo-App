import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import illustration from "../images/todo.jpg";
import "../styles/LoginPage.css";

function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await loginUser({
      username,
      password
    });
    console.log(response.data);
    localStorage.setItem("userId", response.data.id);
    localStorage.setItem("username", response.data.username);


    navigate("/projects");

    } catch (error) {

      alert("Invalid username or password");

    }
  };

  return (

    <div className="login-container">
      <div className="login-left">
        <img src={illustration} alt="Illustration" className="auth-illustration" />
      </div>

        <div className="login-right">
        <div className="auth-card">
          <h1>Hello!</h1>
          <p className="subtitle">Login with your user name</p>
          
          <form onSubmit={handleLogin} className="auth-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Login
            </button>
          </form>

          <div className="auth-footer">
             
             <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </div>
        </div>

    </div>
  );
}

export default LoginPage;