import "../../styles/friends_UI.css";
import { HashPostComponent } from "../posts/getpost";
import { ImageComponent } from "../posts/getImagePost";
import { InputPopUp } from "../UI/textBox";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Col2Tabs({
  portrait,
  input,
  FetchFileFromFileAPI,
  _box_item,
}: any) {
  const [LSKeyState, setcheckLSKeyState] = useState(false);
  const FireComponent = () => {
    setcheckLSKeyState(true);
  };
  return (
    <div className="col-2">
      <div className="col-2-header">
        <div id="c19" className="active">
          <Link to={"/"}>Feed</Link>
        </div>
        <div id="c19"><Link to={"/people"}>People</Link></div>
        <div id="c19"><Link to={"/trending"}>Trending</Link></div>
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
            style={{ cursor: "pointer" }}
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
