import postui from "../../styles/postUI.module.css";
import { useEffect, useRef } from "react";
export function HashPostComponent() {
  let renderFunctionOnce: any = useRef(0);
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
          apikey: "3Gq67bFtUSDbcI3bdaulMUiVpnZTJ93B",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const res = result;
        console.log(res);
        const posts = res;
        const createElement = document.createElement("div");
        document.querySelector(".post_box")?.appendChild(createElement);
        createElement.className = postui.post_box_wrapper;
        posts.forEach((element: any) => {
          createElement.innerHTML += `<div class=${postui.wrapper_item}>
          <div class=${postui.nxd}>
          <div class=${postui.nxdleft}>
            <img src=${"/vite.svg"} alt="pfp" width=${50} height=${50} />
            <div class=${postui.nxdright}>
              <div class=${postui.name}>
                <span id=${postui.name}>${element.username}</span>
              </div>
              <div class=${postui.checkMark}>
                <span></span>
              </div>
              <div class=${postui.uniqueName}>
                <span></span>
              </div>
            </div>
          </div>
  
          <div class=${postui.nxd_outer_space}>
            <div class=${postui.dte}>
              <span id=${postui.date}>${element.created}</span>
            </div>
            <span id=${postui.drpdwn_btn}>
              <i class="bx bx-dots-vertical-rounded"></i>
            </span>
          </div>
        </div>
        <div class=${postui.pst_body}>
          <div id=${postui.pst_content}>
            <span>${element.post}</span>
          </div>
        </div>
          </div>`;
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <div className="post_box"></div>;
}
