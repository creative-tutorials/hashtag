import "../../styles/friends_UI.css";
import { HashPostComponent } from "../posts/posts";
import { ImageComponent } from "../posts/imagepost";
import { InputPopUp } from "../UI/textBox";
import { Item4 } from "../container/Item4";
import { Item3 } from "../container/Item3";
import { Item1 } from "../container/Item1";
import { Item2 } from "../container/Item2";
import { useState } from "react";
export function Col2Tabs({ portrait, input, FetchFileFromFileAPI, _box_item }: any) {
  const [LSKeyState, setcheckLSKeyState] = useState(false);
  const FireComponent = () => {
    setcheckLSKeyState(true);
  };
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
            id="input"
            readOnly
            style={{cursor: 'pointer'}}
            onClick={FireComponent}
          />
        </div>
        <div className="ipt-right-off-corner">
          <input
            type="file"
            id="file_upload"
            accept=".png,.jpg,.jpeg,.gif,,.jfif,.mp4"
            onChange={FetchFileFromFileAPI}
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
          <h3>Working on it</h3>
          {/* <Item2 portrait={portrait} />
          <Item3 portrait={portrait} />
          <Item1 portrait={portrait} />
          <Item4 portrait={portrait} /> */}
        </div>
      </div>
      <HashPostComponent />
      <ImageComponent />
      <InputPopUp
        componentfunction={FireComponent}
        LSKeyState={LSKeyState}
        setcheckLSKeyState={setcheckLSKeyState}
      />
    </div>
  );
}
