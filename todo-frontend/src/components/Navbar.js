import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../images/logo.png"

function Navbar() {

  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (

    <nav className="navbar">

      <div className="nav-left">
        <img className="icon" src={Logo}  alt="Logo" />
        <h2
          className="logo"
          onClick={() => navigate("/projects")}
        >
          <span style={{ color: "#3b82f6" }}>T</span>ask<span style={{ color: "#ef4444" }}>M</span>anager
        </h2>
      </div>

      <div className="nav-right">

        <span className="username">
          Hello, {username}
        </span>

        <button
          className="nav-btn"
          onClick={() => navigate("/projects")}
        >
          Projects
        </button>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </nav>

  );
}

export default Navbar;