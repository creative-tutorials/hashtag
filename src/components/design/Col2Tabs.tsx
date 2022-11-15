import { ReadFileFromSystem } from "../../function/upload/fileReader";
import { HashPostComponent } from "../posts/getpost";
import { ImageComponent } from "../posts/getImagePost";
import InputPopUp  from "./textBox";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/3.png";
export function Col2Tabs({ portrait, input, _box_item }: any) {
  const [LSKeyState, setcheckLSKeyState] = useState(false);
  const FireComponent = () => {
    setcheckLSKeyState(true);
  };
  const FetchFileFromFileAPI = (event: any) => {
    ReadFileFromSystem(event);
  };
  return (
    <div className="col-2">
      <div id="header-wrapper">
        <div className="header-left-item">
          <div className="img">
            <img
              src={logo}
              alt="app_logo"
              width={50}
              height={50}
              loading={"lazy"}
            />
          </div>
          {/*  */}
          <div className="header-links">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/community">
              <span>Community</span>
            </Link>
            <Link to="">
              <span>Chat</span>
            </Link>
            <Link to="/shop">
              <span>Shop</span>
            </Link>
          </div>
        </div>
        <div className="header-right-item">
          <div className="header-links-2">
            <Link to={"/admin"}>
              <span>
                <i className="bx bx-universal-access"></i>
              </span>
            </Link>
            <Link to={"/"}>
              <span>
                <i className="bx bx-bell"></i>
              </span>
            </Link>
            <Link to={"/"}>
              <span>
                <i className="bx bx-log-out bx-rotate-180"></i>
              </span>
            </Link>
          </div>
        </div>
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
        LSKeyState={LSKeyState}
        setcheckLSKeyState={setcheckLSKeyState}
      />
    </div>
  );
}
