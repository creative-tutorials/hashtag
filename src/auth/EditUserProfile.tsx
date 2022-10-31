import "../styles/profile.css";
import { useRef, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
let userRef = "Loading...";
let userFetch = false;
export function EditUserProfile({
  loadNameGeneratorComponent,
  setloadNameGeneratorComponent,
  sethideIDComponent,
}: any) {
  const [showError, setshowError] = useState(false);
  const usernameInputField: any = useRef();
  const Session: any = localStorage.getItem("session");
  const parsedData = JSON.parse(Session);
  const SubmitDetailsToAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/generateUsername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsedData.email,
          password: parsedData.password,
          username: usernameInputField.current.value,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        const retrievedData = result.YOUR_USERNAME;
        ChangeUserName(retrievedData);
      }
      if (!response.ok) {
        const result = await response.json();
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  async function ChangeUserName(retrievedData: any) {
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
          username: retrievedData,
          bio: `Hey I am ${retrievedData} Just Browsing :)`,
          dob: "12/02/2005",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setloadNameGeneratorComponent(false);
        sethideIDComponent(true);
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

  return loadNameGeneratorComponent ? (
    <div className={"wrapperStyle"}>
      <header>
        <h2>Edit Profile</h2>
        <i className='bx bxs-x-circle' onClick={() => {
          setloadNameGeneratorComponent(false)
        }}></i>
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
          <select onChange={(e) => {
             const value = e.target.value;
             console.log(value);
          }}>
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
