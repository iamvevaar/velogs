import React from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPinterestSquare,
  FaSearch,
  FaTwitterSquare,
} from "react-icons/fa";
import DP from "../../assets/Passport.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = true;
  return (
    <div className="navbar">
      <div className="topLeft">
        <FaFacebookSquare className="topIcons" />
        <FaTwitterSquare className="topIcons" />
        <FaPinterestSquare className="topIcons" />
        <FaInstagramSquare className="topIcons" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="listItems">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="listItems">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="listItems">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="listItems">CONTACTS</li>
          <li className="listItems">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <>
            <img className="topImg" src={DP} alt="" />
            <FaSearch className="searchIcon" />
          </>
        ) : (
          <>
            <ul className="toplist">
              <li >
                <Link className="listItems link" to="/login">LOGIN</Link>
              </li>
              <li >
                <Link className="listItems link " to="/register">REGISTER</Link>
              </li>
            </ul>
          </>
        )
        }
      </div>
    </div>
  );
};

export default Navbar;

