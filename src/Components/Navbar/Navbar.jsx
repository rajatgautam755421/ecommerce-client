import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
const Navbar = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#D8DFE6",
          position: "sticky",
          top: "0",
          zIndex: "2",
        }}
        className="navbar navbar-expand-lg navbar-light bg-gray"
      >
        <NavLink className="navbar-brand" to="/">
          <SchoolIcon style={{ fontSize: "40px" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          style={{
            marginLeft: "50px",
            fontWeight: "600",
          }}
          className="collapse navbar-collapse "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink aria-current="page" to="/" className="nav-link">
                Home
              </NavLink>
              {/* <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink
                aria-current="page"
                to="/data-entry"
                className="nav-link"
              >
                Data Entry
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink aria-current="page" to="/class" className="nav-link">
                View Class
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink aria-current="page" to="/data-view" className="nav-link">
                View Detail
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
