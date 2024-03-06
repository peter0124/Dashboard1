import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <ul className={openLinks ? "hiddenLinks open" : "hiddenLinks"}>
          <li><Link to="/" onClick={toggleNavbar}>Home</Link></li>
          <li><Link to="/menu" onClick={toggleNavbar}>Main</Link></li>
          <li><Link to="/about" onClick={toggleNavbar}>About</Link></li>
          <li className="content"><Link to="/contact" onClick={toggleNavbar}>Contact</Link></li>
        </ul>
      </div>
      {/* <div className="rightSide">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Main</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div> */}
    </div>
  );
}

export default Navbar;
