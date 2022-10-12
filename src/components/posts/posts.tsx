import { useEffect, useRef } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
export function HashPostComponent() {
  const fetchData = useRef();
  let renderFunctionOnce: any = useRef(0);
  const fetchDataContent: any = useRef();
  useEffect(() => {
    // console.log(LimitFetchingData);
    renderFunctionOnce.current++;
    // console.log(LimitFetchingData);
    if (renderFunctionOnce.current > 1) LoadAllPostFromAPI();
  }, []);

  const LoadAllPostFromAPI = async () => {
    console.log("load");
    // try {
    //   const response = await fetch("http://localhost:5301/userdb", {
    //     method: "GET",
    //     headers: {
    //       apikey: "3Gq67bFtUSDbcI3bdaulMUiVpnZTJ93B",
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     const res = result;
    //     console.log(res);
    //     const posts = res[0].post;
    //     console.log(posts);
    //     // const mapItem = res.map((post) => post.post);
    //     // console.log(mapItem);
    //     const last = posts[posts.length - 1];
    //     console.log('last', last);
    //     // ReactDOM.createRoot(
    //     //   document.querySelector(".post_box") as HTMLElement
    //     // ).render(
    //     //   <React.StrictMode>
    //     //     <>
    //     //       <div className="nxd">
    //     //         <div className="nxd-left">
    //     //           <img src={"/vite.svg"} alt="pfp" width={50} height={50} />
    //     //           <div className="nxd-right">
    //     //             <div className="name">
    //     //               <span id="name">{"John Doe"}</span>
    //     //             </div>
    //     //             <div className="blue-check-mark">
    //     //               {/* only for verified user's - coming soon */}
    //     //               <span>check</span>
    //     //             </div>
    //     //             <div className="unique-name">
    //     //               <span>
    //     //               </span>
    //     //             </div>
    //     //           </div>
    //     //         </div>

    //     //         <div className="nxd-outer-space">
    //     //           <div className="dte">
    //     //             <span id="date">20 Feb</span>
    //     //           </div>
    //     //           <span id="drpdwn-btn">
    //     //             <i className="bx bx-dots-vertical-rounded"></i>
    //     //           </span>
    //     //         </div>
    //     //       </div>
    //     //       <div className="pst_body">
    //     //         <div id="pst_content">
    //     //           <span>
    //     //           {last}
    //     //           </span>
    //     //         </div>
    //     //         <div id="media-content">
    //     //           <div id="includeImg">
    //     //             <img src={res[1].dataURL} alt="imag" />
    //     //           </div>
    //     //           <div id="includeVid">
    //     //             <video
    //     //               src=""
    //     //               autoPlay={true}
    //     //               controls
    //     //               muted={true}
    //     //             ></video>
    //     //           </div>
    //     //         </div>
    //     //       </div>
    //     //     </>
    //     //   </React.StrictMode>
    //     // );
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
  <div className="post_box">
    <img src="C:/Users/USER/Pictures/assets/photo-1508835277982-1c1b0e205603.jpg" alt="" />
  </div>
  );
}
