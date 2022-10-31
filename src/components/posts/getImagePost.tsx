import { RenderedImagePost } from "./renderedImageElement";
import postui from "../../styles/postUI.module.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useRef } from "react";
export const ImageComponent = () => {
  let loadMountCount: any = useRef(0);
  const dataRef: any = useRef();
  useEffect(() => {
    loadMountCount.current++;
    if (loadMountCount.current > 1) {
      ImagePostDataFromAPI();
    } else {
      return;
    }
    return () => {
      
    };
  });

  const ImagePostDataFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/upload", {
        method: "GET",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const imagepostData = result;
        const container: any = document.getElementById(postui.wrapper);
        const root = ReactDOM.createRoot(container);
        root.render(
          <RenderedImagePost imagepostData={imagepostData} postui={postui} />
        );
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <div id={postui.wrapper}></div>;
};
