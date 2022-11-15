import "../../styles/designlab.css";
import { useRef, useState } from "react";
export default function InputPopUp({
  LSKeyState,
  setcheckLSKeyState,
}: any) {
  const textAreaInputElement: any = useRef();
  const [detectFormError, setdetectFormError] = useState(false);
  const [errorMessage, seterrorMessage] = useState('');

  const HashButton = () => {
    const text_box = textAreaInputElement.current;
    if (!text_box.value) {
      seterrorMessage("Hey There before you can make a post you would need to type something first :)");
      setdetectFormError(true);
    } else {
      SendInputFieldDataToAPI(text_box.value);
    }
  };
  const Session: any = localStorage.getItem("session");
  const parsedData = JSON.parse(Session);
  async function SendInputFieldDataToAPI(field: string) {
    if (Session) {
      try {
        const response = await fetch("http://localhost:5301/post", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: field,
            email: parsedData.email,
            password: parsedData.password,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          setdetectFormError(false);
        }
        if (!response.ok) {
          const result = await response.json();
          seterrorMessage(result.error);
          setdetectFormError(true);
          setTimeout(() => {
            setcheckLSKeyState(false);
          }, 10000);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
  return (
    <div className={LSKeyState ? "textBox active" : "textBox"}>
      <div id="box-cols">
        <div id="bx-cl-left" onClick={() => setcheckLSKeyState(false)}>
          <i className="bx bx-arrow-back"></i>
        </div>
        <div id="bx-cl-right">
          <button onClick={HashButton}>Post</button>
        </div>
      </div>
      <div className="hashtag-text-component">
        <textarea
          name=""
          id=""
          ref={textAreaInputElement}
          cols={30}
          rows={10}
          className={detectFormError ? "active" : undefined}
        ></textarea>
        <div className={detectFormError ? "error-component" : undefined}>
          <span id="error">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
}
