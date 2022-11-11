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
            <i className="bx bxs-news"></i>
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
        <div className="tab-em" data-target="Members">
          <Link
            to={"/members"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bxs-group"></i>
            <span id="span">Members</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Chat">
          <Link
            to={"/coffe-chat"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bx-coffee"></i>
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
      <div className="col-1-tab-extras">
        <Link to={"/"}>
          <span>
            <i className="bx bxs-universal-access"></i>
          </span>
        </Link>
        <Link to={"/"}>
          <span>
            <i className="bx bxs-bell"></i>
          </span>
        </Link>
        <Link to={"/"}>
          <span>
            <i className="bx bxs-log-out bx-rotate-180"></i>
          </span>
        </Link>
        <Link to={"/"}>
          <span>
            <i className="bx bxs-coffee"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
