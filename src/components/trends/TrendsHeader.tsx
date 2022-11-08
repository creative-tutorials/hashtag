import React from "react";
import logo from "/3.png";
import "../../App.css";
import { Link } from "react-router-dom";
export default function TrendsHeader({}: any) {
  return (
    <div id="header-wrapper">
      <div className="header-left-item">
        <div className="img">
          <img src={logo} alt="app_logo" width={50} height={50} />
        </div>
        {/*  */}
        <div className="header-links">
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/community">
            <span>Community</span>
          </Link>
          <Link to="">
            <span>Chat</span>
          </Link>
          <Link to="/shops">
            <span>Shop</span>
          </Link>
        </div>
      </div>
      <div className="header-right-item">
        <div className="header-links-2">
          <Link to={"/"}>
            <span>
              <i className="bx bx-universal-access"></i>
            </span>
          </Link>
          <Link to={"/"}>
            <span>
              <i className="bx bx-bell"></i>
            </span>
          </Link>
          <Link to={"/"}>
            <span>
              <i className="bx bx-log-out bx-rotate-180"></i>
            </span>
          </Link>
          <Link to={"/"}>
            <span>
              <i className="bx bx-coffee"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
