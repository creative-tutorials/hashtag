import trends_style from "../../styles/trendsUI.module.css";
import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { TrendsList } from "./trends";
import { useEffect, useRef } from "react";
function TrendsPage() {
  const checkRenderedLimit = useRef(0);
  let dataRef = useRef();
  useEffect(() => {
    checkRenderedLimit.current++;

    if (checkRenderedLimit.current > 1) {
      console.log("Multiple rendering");
    } else {
      FetchAllTrendsFromAPI();
    }

    return () => {
      // checkRenderedLimit.current = 0;
    };
  });

  console.log(checkRenderedLimit);

  const FetchAllTrendsFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/trends", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const trendsfromResult = result;
        const container:any = document.getElementById(trends_style.body_);
        const root = ReactDOM.createRoot(container);
        root.render(
          <TrendsList
            data={dataRef}
            dataRef={trendsfromResult}
            props={true}
            checkRenderedLimit={checkRenderedLimit}
            style={trends_style}
          />
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={trends_style.trendBody}>
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
      <main id={trends_style.body_}></main>
    </div>
  );
}
export default TrendsPage;
