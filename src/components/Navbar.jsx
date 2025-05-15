import Logo from "../assets/logo-black.png";
// import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
