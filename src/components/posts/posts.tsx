import { RenderedPost } from "./renderedPost";
import React from "react";
import ReactDOM from "react-dom/client";
import postui from "../../styles/postUI.module.css";
import { useEffect, useRef } from "react";
export function HashPostComponent() {
  let renderFunctionOnce: any = useRef(0);
  const post_box: any = useRef();
  useEffect(() => {
    // console.log(LimitFetchingData);
    renderFunctionOnce.current++;
    // console.log(LimitFetchingData);
    if (renderFunctionOnce.current > 1) LoadAllPostFromAPI();
  }, []);

  const LoadAllPostFromAPI = async () => {
    console.log("load");
    try {
      const response = await fetch("http://localhost:5301/post", {
        method: "GET",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const res = result;
        console.log(res);
        const posts = res;
        const container: any = document.querySelector('.' + postui.post_box);
        const root = ReactDOM.createRoot(container);
        root.render(<RenderedPost post={posts} postui={postui} />);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <div className={postui.post_box} ref={post_box}></div>;
}
