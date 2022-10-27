import React from "react";
import { Link } from "react-router-dom";
export function Col1Tabs({}) {
  const OpenTextBox = () => {
    const textbox: any =
      document.querySelector("#input"); /* using JavaScript-Default syntax */
    /* Calling the click event on the textbox. */
    textbox.click();
  };
  return (
    <div className="col-1-tabs">
      <div className="col-1-tab-em">
        <div className="tab-em" data-target="Feeds">
          <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            <i className="bx bxs-home-smile"></i>
            <span id="span">Feed</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Profile">
          <Link
            to={"/profile"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bxs-user-circle"></i>
            <span id="span">Profile</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Explore">
          <Link
            to={"/explore"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bxs-compass"></i>
            <span id="span">Explore</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Logout">
          <i className="bx bx-log-out bx-rotate-180"></i>
          <span id="span">Logout</span>
        </div>
        <div className="tab-em" data-target="Rooms">
          <Link
            to={"/rooms"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className='bx bx-coffee'></i>
            <span id="span">Coffe Chat</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Trending">
          <Link
            to={"/trends"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bxs-hot"></i>
            <span id="span">Trending</span>
          </Link>
        </div>
      </div>
      <div className="col-1-tab-send-button">
        <button onClick={OpenTextBox}>Post To Feed</button>
      </div>
    </div>
  );
}
