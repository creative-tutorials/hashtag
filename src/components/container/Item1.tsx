import React from "react";
export function Item1({ portrait }: any) {
  return (
    <div id="box">
      <img src={portrait} alt="coming soon" width={80} height={80} />
      <div id="front_details">
        <div id="f_name">{"Sadjad"}</div>
        <div id="f_country">India</div>
        <div id="f_bio">Developer</div>
        <button>Following</button>
      </div>
    </div>
  );
}
