import pickerStyles from "../styles/pickerStyles.module.css";
import { useRef, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
let userRef = "Loading...";
let userFetch = false;
export function UsernamePicker({ loadNameGeneratorComponent }: any) {
  console.log("loaded");
  const [showError, setshowError] = useState(false);
  const usernameInputField: any = useRef();
  const pickerMenu: any = useRef();
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
        console.log(result);
        const retrievedData = result.YOUR_USERNAME;
        ChangeUserName(retrievedData);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
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
        console.log("result", result);
        alert(result.message);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return loadNameGeneratorComponent ? (
    <div className={pickerStyles.wrapperStyle}>
      <div id={pickerStyles.input_box}>
        <div className={pickerStyles.pickerInput}>
          <input
            type="text"
            id="usernameInputField"
            placeholder="Auto generated username"
            ref={usernameInputField}
          />
          <button id={pickerStyles.btn} onClick={SubmitDetailsToAPI}>
            <i className="bx bx-edit"></i>
          </button>
        </div>
      </div>
      <div id={pickerStyles.alertMenu} ref={pickerMenu}>
        <span>
          {showError ? "Error copying text" : "Text Copied"}
          <i className="bx bx-check-circle"></i>
        </span>
      </div>
    </div>
  ) : null;
}
