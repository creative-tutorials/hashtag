import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export function Col1Tabs({}) {
  const loadCount = useRef(0);
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [profileImage, setprofileImage] = useState();
  const [errorMessage, setcatchErrorMessage] = useState();
  const [isLoaded, setisLoaded] = useState(false);
  const OpenTextBox = () => {
    const textbox: any =
      document.querySelector("#input"); /* using JavaScript-Default syntax */
    /* Calling the click event on the textbox. */
    textbox.click();
  };
  useEffect(() => {
    loadCount.current++;
    loadCount.current > 1 ? null : FetchProfileFromAPI();

    return () => {};
  });
  async function FetchProfileFromAPI() {
    const Session: any = localStorage.getItem("session");
    const parsedData = JSON.parse(Session);
    const userPublicID = parsedData.publicID;
    try {
      const response = await fetch(
        `http://localhost:5301/profile/${userPublicID}`,
        {
          method: "GET",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setusername(result.username);
        setemail(result.email);
        setprofileImage(result.profile_image);
        setisLoaded(true);
      }
      if (!response.ok) {
        const result = await response.json();
        setcatchErrorMessage(result.error);
        localStorage.clear();
        setisLoaded(false);
      }
    } catch (err) {
      console.error(err);
      setisLoaded(false);
    }
  }
  return (
    <div className="col-1-tabs">
      <div className="col-1-tab-em">
        <div className="tab-em" data-target="Feeds">
          <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            <i className="bx bxs-leaf"></i>
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
            to={"/messenger"}
            style={{ color: "black", textDecoration: "none" }}
          >
            <i className="bx bxs-message-square-dots"></i>
            <span id="span">Messenger</span>
          </Link>
        </div>
        <div className="tab-em" data-target="Trending">
          <Link to={"/news"} style={{ color: "black", textDecoration: "none" }}>
            <i className="bx bxs-news"></i>
            <span id="span">News</span>
          </Link>
        </div>
      </div>
      <div className="col-1-tab-send-button">
        <button onClick={OpenTextBox}>Post To Feed</button>
      </div>
      <div className="col-1-tab-extras">
        <Link to={"/admin"}>
          <span>
            <i className="bx bxs-universal-access"></i>
          </span>
        </Link>
        <Link to={"/"}>
          <span>
            <i className="bx bxs-bell"></i>
          </span>
        </Link>
        <Link to={"/"} onClick={(e) => {
          e.preventDefault();
          console.log('Hello')
        }}>
          <span>
            <i className="bx bx-log-out bx-rotate-180"></i>
          </span>
        </Link>
      </div>
      {isLoaded ? (
        <div className="col-1-tab-account">
          <div className="acnt-tab-left">
            <img
              src={profileImage}
              alt=""
              loading="lazy"
              width={50}
              height={50}
            />
          </div>
          <div className="acnt-tab-right">
            <h4>{username}</h4>
            <p>{email}</p>
          </div>
        </div>
      ) : (
        <div id="col-error">
          <p>
            <i className="bx bx-error-circle"></i> {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}
