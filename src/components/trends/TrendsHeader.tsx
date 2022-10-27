import React from "react";
import trends_style from "../../styles/trendsUI.module.css";
import { Link } from "react-router-dom";
export function TrendsHeader({}: any) {
  return (
    <div id={trends_style.header}>
      <div id={trends_style.header_cols}>
        <div id={trends_style.header_cols_left}>
          <div id={trends_style.logo_banner}>
            <img src="hashtag_logo.png" alt="" width={80} height={80} />
          </div>
        </div>
        <div id={trends_style.header_cols_right}>
          <div id={trends_style.links}>
            <Link to="/">
              <i className="bx bx-home-alt-2"></i>
            </Link>
            <span id={trends_style.spotlight}>Home</span>
          </div>
          <div id={trends_style.links}>
            <Link to="/">
              <i className="bx bx-group"></i>
            </Link>
            <span id={trends_style.spotlight}>Friends</span>
          </div>
          <div id={trends_style.links}>
            <Link to="/">
              <i className="bx bxs-compass"></i>
            </Link>
            <span id={trends_style.spotlight}>Explore</span>
          </div>
          <div id={trends_style.links}>
            <Link to="/">
              <i className="bx bxs-microphone"></i>
            </Link>
            <span id={trends_style.spotlight}>Rooms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
