import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Main.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Coordinator Or Student </h1>
        <p> Web-Based System For you</p>
        <Link to="/menu">
          <button> CHOOSE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
