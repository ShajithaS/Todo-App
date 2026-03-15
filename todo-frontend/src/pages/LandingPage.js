import React from "react";
import bannerImage from "../images/todo.jpg";
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-left">
        <img src={bannerImage} alt="Landing" className="landing-image" />
      </div>
      <div className="landing-right">
        <div className="landing-title">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>
          <span style={{ color: "#3b82f6" }}>T</span>ask
          <span style={{ color: "#ef4444" }}>M</span>anager
        </h1>
        </div>
        <h1>Welcome to Todo App</h1>
        
        <p>Organize your tasks and projects efficiently.</p>
        <div className="landing-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
