import React from "react";
export function Item3({ portrait }:any) {
  return (
    <div id="box">
      <img src={portrait} alt="coming soon" width={80} height={80} />
      <div id="front_details">
        <div id="f_name">Mayowa</div>
        <div id="f_country">Nigeria</div>
        <div id="f_bio">Hacker</div>
        <button>Following</button>
      </div>
    </div>
  );
}
