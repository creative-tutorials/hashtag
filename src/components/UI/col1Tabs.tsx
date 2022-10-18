import React from "react";
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
          <i className="bx bxs-home-smile"></i>
          <span id="span">Feed</span>
        </div>
        <div className="tab-em" data-target="Profile">
          <i className="bx bxs-user-circle"></i>
          <span id="span">Profile</span>
        </div>
        <div className="tab-em" data-target="Explore">
          <i className="bx bxs-compass"></i>
          <span id="span">Explore</span>
        </div>
        <div className="tab-em" data-target="Logout">
          <i className="bx bx-log-out bx-rotate-180"></i>
          <span id="span">Logout</span>
        </div>
        <div className="tab-em" data-target="Rooms">
          <i className="bx bxs-microphone"></i>
          <span id="span">Rooms</span>
        </div>
        <div className="tab-em" data-target="Trending">
          <i className="bx bxs-hot"></i>
          <span id="span">Trending</span>
        </div>
      </div>
      <div className="col-1-tab-send-button">
        <button onClick={OpenTextBox}>Hash</button>
      </div>
    </div>
  );
}
