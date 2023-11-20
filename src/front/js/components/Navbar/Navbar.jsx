import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "./components/Dropdown.jsx";
import Login from "./components/Login.jsx";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark mb-3 sticky-top border-bottom border-dark-subtle">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mx-5 my-3 h1">
            <img
              src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
              alt="logo"
              width="25%"
              height="25%"
            />
          </span>
        </Link>
        <Login />
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;