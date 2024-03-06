
// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> ETQAN-NARQA Web-Based System</h1>
        <div>
          <p>
            ETQAN is an online platform designed to assist in managing
            and assessing engineering and computing programs in higher education
            institutions. The platform aims to help Egyptian universities
            achieve the ABET accreditation certificate by preparing each program
            to meet the ABET criteria.
          </p>
          <p>
            NARQA is a quality assurance system that focuses on ensuring the
            quality of higher education programs. The system aims to provide a
            comprehensive framework for quality assessment and improvement in
            the field of computer systems engineering in the electrical
            engineering department.
          </p>
        </div>
        
      </div>
      <Link to="/menu" className="buttonContainer">
          <button> CHOOSE Website </button>
        </Link>
    </div>
  );
}


export default Home;
