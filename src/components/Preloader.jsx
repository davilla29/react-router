// src/components/Preloader.jsx
// import React from "react";
// import "./Preloader.css";

// const Preloader = () => {
//   return (
//     <nav className="navbar-skeleton">
//       <div className="skeleton skeleton-logo"></div>
//       <div className="nav-links">
//         <div className="skeleton skeleton-link"></div>
//         <div className="skeleton skeleton-link"></div>
//         <div className="skeleton skeleton-link"></div>
//       </div>
//       <div className="skeleton skeleton-avatar"></div>
//     </nav>
//   );
// };

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Preloader = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      {/* Logo */}
      <Skeleton width={120} height={32} borderRadius={6} />

      {/* Navigation Items */}
      <div style={{ display: "flex", gap: "24px" }}>
        <Skeleton width={80} height={20} />
        <Skeleton width={80} height={20} />
        <Skeleton width={80} height={20} />
      </div>

      {/* Contact Button or Avatar */}
      <Skeleton circle width={40} height={40} />
    </nav>
  );
};

export default Preloader;
