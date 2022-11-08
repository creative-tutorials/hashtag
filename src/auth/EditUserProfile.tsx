import { UpdateProfile } from "../function/UpdateProfile";
import "../styles/profile.css";
import { useRef, useState } from "react";
export function EditUserProfile({
  loadNameGeneratorComponent,
  setloadNameGeneratorComponent,
}: any) {
  const usernameInputField: any = useRef();
  const counter_text: any = useRef();
  const bioInput: any = useRef();
  const profile_address: any = useRef();
  const banner_address: any = useRef();
  const [count, setcount] = useState(0);
  const SubmitDetailsToAPI = async () => {
    const regex = /https:\/\//i;
    const Session: any = localStorage.getItem("session");
    const parsedData = JSON.parse(Session);
    const usernameFromInputField = usernameInputField.current.value;
    const setbioInput = bioInput.current.value;
    const getProfileImage = profile_address.current.value;
    const getBannerImage = banner_address.current.value;
    if (getProfileImage === "" && getBannerImage === "") {
      alert("Please paste in an image address URL to continue");
    } else {
      ValidateInputRegex();
    }
    async function ValidateInputRegex() {
      if (regex.test(getProfileImage) && regex.test(getBannerImage)) {
        UpdateProfile(
          usernameFromInputField,
          setbioInput,
          getProfileImage,
          getBannerImage,
          parsedData,
          setloadNameGeneratorComponent
        );
      } else {
        alert("URL must include *https* for better security");
      }
    }
  };
  const DetectTypingState = (e: any) => {
    const character_length = e.target.value.length;
    setcount(character_length);
    counter_text.current.style.color = "black";
    if (character_length >= 80) {
      counter_text.current.style.color = "#005ebc";
    }
    if (character_length >= 90) {
      counter_text.current.style.color = "#ff0000";
    }
  };
  return loadNameGeneratorComponent ? (
    <div className={"wrapperStyle"}>
      <header>
        <h2>Edit Profile</h2>
        <i
          className="bx bxs-x-circle"
          onClick={() => {
            setloadNameGeneratorComponent(false);
          }}
        ></i>
      </header>
      <section id="profile-image-section">
        <h3>Profile Picture</h3>
        <input
          type="url"
          name="image_address"
          id="image_address"
          placeholder="https://image_address"
          size={30}
          ref={profile_address}
        />
      </section>
      <section id="banner-image-section">
        <h3>Banner Picture</h3>
        <input
          type="url"
          name="image_address"
          id="image_address"
          placeholder="https://image_address"
          size={30}
          ref={banner_address}
        />
      </section>
      <section id="bio-section">
        <h3>Bio Section</h3>
        <textarea
          name="bio-input"
          id="bio-input"
          cols={30}
          rows={10}
          maxLength={100}
          placeholder={"Tell us a litte bit about yourself"}
          ref={bioInput}
          onChange={DetectTypingState}
        ></textarea>
        <p>
          <span ref={counter_text}>{count}</span>/100 characters
        </p>
      </section>
      <section id="username-input">
        <h3>Customize Your Username</h3>
        <div id={"input_box"}>
          <div className={"pickerInput"}>
            <input
              type="text"
              id="usernameInputField"
              placeholder="What's your username"
              autoComplete="off"
              ref={usernameInputField}
            />
            <button id={"btn"} onClick={SubmitDetailsToAPI}>
              <span>Submit</span>
              <i className="bx bx-upload"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  ) : null;
}
