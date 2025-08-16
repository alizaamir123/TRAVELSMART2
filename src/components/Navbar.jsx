import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Login from "../pages/Login"; // CORRECT PATH

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="custom-navbar">
        {/* Left: Logo */}
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img src="/img/logo.png" alt="Travels Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="nav-center">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link to="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>Services</Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
        </div>

        {/* Right: Buttons */}
        <div className="nav-right">
          <Link to="/trip-plan" className="btn btn-outline-primary rounded-pill py-2 px-3 shadow-sm">
            Plan Your Trip
          </Link>
          <button className="user-icon" onClick={() => setIsLoginOpen(true)}>
            <FaUser size={18} />
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && <Login closeModal={() => setIsLoginOpen(false)} />}
    </>
  );
}

export default Navbar;
