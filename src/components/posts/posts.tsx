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
        createElement.className = "post_box_wrapper";
        posts.forEach((element:any) => {
          createElement.innerHTML += `<div class="wrapper_item">
          <div class="nxd">
          <div class="nxd-left">
            <img src=${"/vite.svg"} alt="pfp" width=${50} height=${50} />
            <div class="nxd-right">
              <div class="name">
                <span id="name">${element.username}</span>
              </div>
              <div class="blue-check-mark">
                <span></span>
              </div>
              <div class="unique-name">
                <span></span>
              </div>
            </div>
          </div>
  
          <div class="nxd-outer-space">
            <div class="dte">
              <span id="date">${element.created}</span>
            </div>
            <span id="drpdwn-btn">
              <i class="bx bx-dots-vertical-rounded"></i>
            </span>
          </div>
        </div>
        <div class="pst_body">
          <div id="pst_content">
            <span>${element.post}</span>
          </div>
          <div id="media-content">
            <div id="includeImg">
              <img src=${"res[1].dataURL"} alt="imag" />
            </div>
            <div id="includeVid">
              <video src="" autoPlay=${true} controls muted=${true}></video>
            </div>
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
