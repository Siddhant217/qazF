import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo-img">
      <img src={process.env.PUBLIC_URL + "/myphotosign_213743_w.png"} alt="logo_img"  className="logo-img"/>
    </Link>
      <Link to="/" className="nav__logo">Photo Gallery App</Link>
    </nav>
  );
};

export default Navbar;
