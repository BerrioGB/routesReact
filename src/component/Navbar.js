import React from "react";
import logo from "../img/logo.jpg"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="50px" width="50px"></img>
          </a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                </a>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar