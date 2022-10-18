import postui from "../../styles/postUI.module.css";
import { useEffect, useRef } from "react";
export const ImageComponent = () => {
  let loadMountCount: any = useRef(0);
  const dataRef: any = useRef();
  useEffect(() => {
    loadMountCount.current++;
    if (loadMountCount.current > 1) {
      ImagePostDataFromAPI();
      console.log("Image Post Component Rendered");
    } else {
      return;
    }
    return () => {
      //   loadMountCount = 0;
    };
  });
  console.log(loadMountCount);

  const ImagePostDataFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/upload", {
        method: "GET",
        headers: {
          apikey: "3Gq67bFtUSDbcI3bdaulMUiVpnZTJ93B",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const imagepostData = result;
        const createElement = document.createElement("div");
        document.querySelector(".post_box")?.appendChild(createElement);
        createElement.className = postui.uploadWrapper;
        imagepostData.forEach((data: any) => {
          createElement.innerHTML += ` <div class=${postui.mediaContent}>
          <div class=${postui.top}>
            <div class=${postui.left}>
                <img src=${"/vite.svg"} alt="pfp" width=${50} height=${50} />
                <span>username</span>
            </div>
            <div class=${postui.right_col}>
              <div id=${postui.date}>
                <p>June 14 2016</p>
              </div>
            </div>
          </div>
          <div id=${postui.imageMediaContent}>
            <img src=${data.dataURL} alt="Image" />
          </div>
        </div>`;
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <></>
};
