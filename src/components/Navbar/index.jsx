import { useState, useEffect } from "react";
import Logo from "../../assets/logo-black.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      // Disable scroll on body
      document.body.classList.add("no-scroll");
    } else {
      // Enable scroll on body
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on unmount (optional safety)
    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate("/about", { replace: true });
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" />

      <nav className={mobileMenuOpen ? "nav-menu open" : "nav-menu"}>
        <NavLink to="/" onClick={handleNavClick}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/products" onClick={handleNavClick}>
          <li>Products</li>
        </NavLink>
        <NavLink to="/about" onClick={handleNavClick}>
          <li>About</li>
        </NavLink>
        <NavLink to="/contact" onClick={handleNavClick}>
          <li>Contact</li>
        </NavLink>

        <button className="get-started-btn mobile" onClick={handleGetStarted}>
          Get Started
        </button>
      </nav>

      <button
        className="get-started-btn desktop"
        onClick={() => navigate("/about", { replace: true })}
      >
        Get Started
      </button>

      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};

export default Navbar;
