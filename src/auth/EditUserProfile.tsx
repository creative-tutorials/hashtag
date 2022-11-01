import "../styles/profile.css";
import { useRef, useState } from "react";
export function EditUserProfile({
  loadNameGeneratorComponent,
  setloadNameGeneratorComponent,
  usernameRef,
}: any) {
  const usernameInputField: any = useRef();
  const counter_text: any = useRef();
  const [count, setcount] = useState(0)
  const Session: any = localStorage.getItem("session");
  const parsedData = JSON.parse(Session);
  const SubmitDetailsToAPI = async () => {
    const usernameFromInputField = usernameInputField.current.value;
    await ChangeUserName(usernameFromInputField);
  };
  async function ChangeUserName(usernameFromInputField: any) {
    try {
      const response = await fetch("http://localhost:5301/edit_profile", {
        method: "PUT",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsedData.email,
          password: parsedData.password,
          username: usernameFromInputField,
          bio: `Hey I am ${usernameFromInputField} Just Browsing :)`,
          dob: "12/02/2005",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setloadNameGeneratorComponent(false);
        alert(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  }
  const DetectTypingState = (e:any) => {
    const character_length = e.target.value.length;
    setcount(character_length);
    // console.log(character_length)
    if(character_length >= 1) {
      console.info('reset')
      counter_text.current.style.color = "#000"
    } 
    if(character_length >= 80) {
      console.info('stop now')
      counter_text.current.style.color = "#5940ba"
    } 
    if(character_length >= 90) {
      console.info('limit reached')
      counter_text.current.style.color = "#eb1e1e"

    } 
    
  }
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
          type="file"
          name="banner-profile"
          id="edit-profile-picture"
          hidden
          accept=".jpg, .png, .jpeg"
        />
        <label htmlFor="edit-profile-picture">
          <dd>
            <i className="bx bx-edit"></i>
          </dd>
        </label>
        <img
          src="icon.png"
          alt="profile-image"
          loading="lazy"
          width={100}
          height={100}
        />
      </section>
      <section id="banner-image-section">
        <h3>Banner Picture</h3>
        <input
          type="file"
          name="profile-picture"
          id="edit-profile-picture"
          hidden
          accept=".jpg, .png, .jpeg"
        />
        <label htmlFor="edit-profile-picture">
          <dd>
            <i className="bx bx-edit"></i>
          </dd>
        </label>
        <img src="banner.jpg" alt="banner-image" width={500} />
      </section>
      <section id="intrest-section">
        <h3>Choose an intrest</h3>
        <menu>
          <select
            onChange={(e) => {
              const value = e.target.value;
              console.log(value);
            }}
            defaultValue={"default"}
          >
            <option value={"default"} disabled hidden>Choose here</option>
            <optgroup label="Technology">
              <option>Programming</option>
              <option>Web3 & Blockchains</option>
              <option>Game Development</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Web application</option>
            </optgroup>
            <optgroup label="Music">
              <option>Music Production</option>
            </optgroup>
            <optgroup label="LifeStyle">
              <option>Cooking</option>
              <option>Dancing</option>
              <option>Playing Instruments</option>
              <option>Playing Games</option>
            </optgroup>
          </select>
        </menu>
      </section>
      <section id="bio-section">
        <h3>Bio Section</h3>
        <p><span ref={counter_text}>{count}</span>/100 characters</p>
        <textarea
          name="bio-input"
          id="bio-input"
          cols={30}
          rows={10}
          maxLength={100}
          placeholder={"Tell us a litte bit about yourself"}
          onChange={DetectTypingState}
        ></textarea>
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
