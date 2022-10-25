import React from "react";
export function RenderedPost({ post, postui }: any) {
  return (
    <div>
      {post.map(function (item: any, index: any) {
        return (
          <div className={postui.wrapper_item} key={index}>
            <div className={postui.nxd}>
              <div className={postui.nxdleft}>
                <img src={"/vite.svg"} alt="pfp" width={50} height={50} />
                <div className={postui.nxdright}>
                  <div className={postui.name}>
                    <span id={postui.name}>{item.username}</span>
                  </div>
                  <div className={postui.checkMark}>
                    <span></span>
                  </div>
                  <div className={postui.uniqueName}>
                    <span></span>
                  </div>
                </div>
              </div>

              <div className={postui.nxd_outer_space}>
                <div className={postui.dte}>
                  <span id={postui.date}>{item.created}</span>
                </div>
                <span id={postui.drpdwn_btn}>
                  <i className="bx bx-dots-vertical-rounded"></i>
                </span>
              </div>
            </div>
            <div className={postui.pst_body}>
              <div id={postui.pst_content}>
                <span>{item.post}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
