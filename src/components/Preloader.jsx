// src/components/Preloader.jsx
import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <nav className="navbar-skeleton">
      <div className="skeleton skeleton-logo"></div>
      <div className="nav-links">
        <div className="skeleton skeleton-link"></div>
        <div className="skeleton skeleton-link"></div>
        <div className="skeleton skeleton-link"></div>
      </div>
      <div className="skeleton skeleton-avatar"></div>
    </nav>
  );
};

export default Preloader;
