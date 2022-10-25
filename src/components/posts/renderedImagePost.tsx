import React from "react";
export function RenderedImagePost({ imagepostData, postui }: any) {
  return (
    <div>
      {imagepostData.map(function (item: any, index: any) {
        return (
          <div className={postui.mediaContent}>
            <div className={postui.top}>
              <div className={postui.left}>
                <img src={"/vite.svg"} alt="pfp" width={50} height={50} />
                <span>username</span>
              </div>
              <div className={postui.right_col}>
                <div id={postui.date}>
                  <p>June 14 2016</p>
                </div>
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
