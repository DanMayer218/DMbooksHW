import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <i class="fas fa-book"></i>
      <Link className="navbar-brand" to="/">
        Look for your Book
      </Link>
      <div>
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link> */}
          {/* </li> */}
          <li className="nav-item">
            <Link
              to="/Search"
              className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
            >
              Discover
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
