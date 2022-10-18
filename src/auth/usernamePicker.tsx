import pickerStyles from "../styles/pickerStyles.module.css";
import { useRef, useState } from "react";
function UsernamePicker() {
  const [showError, setshowError] = useState(false);
  const ePicker: any = useRef();
  const pickerMenu: any = useRef();
  const Session: any = localStorage.getItem("session");
  const parsedData = JSON.parse(Session);
  const fetchGeneratedContentFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5301/generateUsername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsedData.email,
          password: parsedData.password,
          length: 10,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const generatedContent = result.YOUR_GENERATED_USERNAME;
        ePicker.current.value = generatedContent;
        /* Copying the generated username to the clipboard. */
        const cb = navigator.clipboard;
        cb.writeText(generatedContent)
          .then(() => {
            alert("Text Copied Successfully");
          })
          .catch(() => setshowError(true));
        ChangeUserName(generatedContent);
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
  async function ChangeUserName(generatedContent: any) {
    try {
      const response = await fetch("http://localhost:5301/edit_profile", {
        method: "PUT",
        headers: {
          apikey: import.meta.env.VITE_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: parsedData.email,
          password: parsedData.password,
          username: generatedContent,
          bio: `Hey I am ${generatedContent} Just Browsing :)`,
          dob: "12/02/2005",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={pickerStyles.wrapperStyle}>
      <div id={pickerStyles.input_box}>
        <div className={pickerStyles.pickerInput}>
          <input
            type="text"
            id="ePicker"
            placeholder="Auto generated username"
            ref={ePicker}
            readOnly
          />
          <button id={pickerStyles.btn} onClick={fetchGeneratedContentFromAPI}>
            <i className="bx bx-rotate-left"></i>
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
  );
}
export default UsernamePicker;
