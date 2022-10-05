import React from "react";
export function Item4({ portrait }:any) {
  return (
    <div id="box">
      <img src={portrait} alt="coming soon" width={80} height={80} />
      <div id="front_details">
        <div id="f_name">John Doe</div>
        <div id="f_country">United States</div>
        <div id="f_bio">Entrepreneur</div>
        <button>Follow</button>
      </div>
    </div>
  );
}
