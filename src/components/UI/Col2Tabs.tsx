import React from "react";
import { Click } from "./textBox";
import { VariableComponent } from "./textBox";
import { Item4 } from "../container/Item4";
import { Item3 } from "../container/Item3";
import { Item1 } from "../container/Item1";
import { Item2 } from "../container/Item2";
export function Col2Tabs({ portrait, input, ReqFile, _box_item }: any) {
  VariableComponent;
  return (
    <div className="col-2">
      <div className="col-2-header">
        <div id="c19" className="active">
          Feed
        </div>
        <div id="c19">People</div>
        <div id="c19">Trending</div>
      </div>
      <div className="col-2-input_box">
        <div className="ipt-left">
          <div className="pfp">
            <img src={portrait} alt="user_pfp" width={50} height={50} />
          </div>
        </div>
        <div className="ipt-right">
          <input
            type="text"
            placeholder="Write It, We Make it Happen"
            ref={input}
            onClick={Click}
          />
        </div>
        <div className="ipt-right-off-corner">
          <input
            type="file"
            name=""
            id="file_upload"
            accept=".png,.jpg,.jpeg,.gif,,.jfif,.mp4"
            onChange={ReqFile}
            hidden
          />
          <label htmlFor="file_upload">
            <span id="ipt_icon">
              <i className="bx bx-cloud-upload"></i>
            </span>
          </label>
        </div>
      </div>
      <div className="friends_box">
        <h4>Follow people</h4>
        {/* coming soon- with AI recommedation system */}
        <div id="_bx_item" ref={_box_item}>
          <Item2 portrait={portrait} />
          <Item3 portrait={portrait} />
          <Item1 portrait={portrait} />
          <Item4 portrait={portrait} />
        </div>
      </div>
      <div className="post_box">
        <div className="nxd">
          <div className="nxd-left">
            <img src={portrait} alt="pfp" width={50} height={50} />
            <div className="nxd-right">
              <div className="name">
                <span id="name">{"John Doe"}</span>
              </div>
              <div className="blue-check-mark">
                {/* only for verified user's - coming soon */}
                <span>check</span>
              </div>
              <div className="unique-name">
                <span>{"@johndoe18"}</span>
              </div>
            </div>
          </div>

          <div className="nxd-outer-space">
            <div className="dte">
              <span id="date">20 Feb</span>
            </div>
            <span id="drpdwn-btn">
              <i className="bx bx-dots-vertical-rounded"></i>
            </span>
          </div>
        </div>
        <div className="pst_body">
          <div id="pst_content">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              officiis dolorem soluta autem, laboriosam deserunt animi, tempore
              explicabo, odio est eaque nesciunt nisi eveniet veniam officia.
              Obcaecati, necessitatibus amet? Cum!
            </span>
          </div>
          <div id="media-content">
            <div id="includeImg">
              <img src="" alt="imag" />
            </div>
            <div id="includeVid">
              <video
                src="/cj1.mp4"
                autoPlay={true}
                controls
                muted={true}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
