import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/RegisterPage.css";
import illustration from "../images/todo.jpg";

function RegisterPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:9092/auth/register",
        {
          username: username,
          password: password
        }
      );

      alert("Registration successful!");

      // after register → go to login page
      navigate("/login");

    } catch (error) {

      alert(error.response?.data || "Registration failed");

    }
  };

  return (

    <div className="register-container">
      <div className="register-left">
        <img src={illustration} alt="Illustration" className="auth-illustration" />
      </div>

        <div className="register-right">
        <div className="auth-card">
          <h1>Hello!</h1>
          <p className="subtitle">Register with your user name</p>
          
          <form onSubmit={handleRegister} className="auth-form">
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

            <button type="submit" className="register-submit-btn">
              Register
            </button>
          </form>

          <div className="auth-footer">
             
             <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
        </div>
        </div>
  );
}

export default RegisterPage;