import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link
            to="/dashboard"
            className="brand-logo center"
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            E.Management
          </Link>
          <ul
            className="right hide-on-med-and-down"
          >
            <li className="align-center" style={{fontSize:'1.2rem', marginRight:'1.5rem'}}>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
