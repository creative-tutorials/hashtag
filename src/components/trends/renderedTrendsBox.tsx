import React from "react";
export function RenderedTrendsBox({ index, style, item }: any) {
  return (
    <div id={style.trend_box} key={index}>
      <div id={style.trend_image_container}>
        <img src="" alt="image of trend" />
      </div>
      <div id={style.trend_text_container}>
        <h3>{item.trends}</h3>
        <p>
          <strong>created Jun2017</strong>
        </p>
      </div>
      <div id={style.count}>
        <span>1.1K People Intrested</span> <span>60K People Like it</span>
      </div>
      <div id={style.call_to_action}>
        <button id={style.cta_btn} onClick={() => console.log('Intrested in', item.trends)}>
          <i className="bx bx-heart"></i>Intrested
        </button>
        <button id={style.cta_btn}>
          <i className="bx bx-like"></i>Like
        </button>
        <button id={style.cta_btn}>
          <i className="bx bx-share"></i>Share
        </button>
      </div>
    </div>
  );
}
