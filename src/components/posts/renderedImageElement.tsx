import React from "react";
export function RenderedImagePost({ imagepostData, postui }: any) {
  return (
    <div>
      {imagepostData.map(function (item: any, index: any) {
        return (
          <div className={postui.mediaContent}>
            <div className={postui.top}>
              <div className={postui.left}>
                <img
                  src={item.profile_image}
                  alt="pfp"
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%", marginLeft: "10px" }}
                />
                <span style={{ marginLeft: "10px" }}>{item.username}</span>
              </div>
              <div className={postui.right_col}>
                <div id={postui.date}>
                  <p>{item.created}</p>
                </div>
                <span id={postui.dropdwnbtn}>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </span>
              </div>
            </div>
            <div id={postui.imageMediaContent}>
              <img src={item.dataURL} alt="Image" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
