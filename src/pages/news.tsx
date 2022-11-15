import Header from '../components/trends/Header';
import trends_style from "../styles/trendsUI.module.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { NewsComponent } from "../components/trends/newsComponent";
import { useEffect, useRef } from "react";
function NewsPage() {
  const checkRenderedLimit = useRef(0);
  let dataRef = useRef();
  useEffect(() => {
    checkRenderedLimit.current++;

    if (checkRenderedLimit.current > 1) {
    } else {
      FetchAllTrendsFromAPI();
    }

    return () => {};
  });

  const FetchAllTrendsFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const trendsfromResult = result;
        const container: any = document.getElementById(trends_style.body_);
        const root = ReactDOM.createRoot(container);
        root.render(
          <NewsComponent
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
      <Header />
      <main id={trends_style.body_}></main>
    </div>
  );
}
export default NewsPage;
