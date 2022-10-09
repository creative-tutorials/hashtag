import "../../styles/designlab.css";

import { useRef, useMemo, useState, useEffect } from "react";
export default function textBox() {
  let errorMessage = useRef("");
  /**
   * A hook that checks if the localStorage key is set.
   * @returns A boolean that is true if the key is set.
   */
  const [LSKeyState, setcheckLSKeyState] = useState(false);
  const textAreaInputElement: any = useRef();
  const wrapBox: any = useRef();
  let limitRendering: any = useRef(0);
  const spanElement: any = useRef();
  const memoValue = useMemo(() => errorMessage, [errorMessage]);
  const [detectFormError, setdetectFormError] = useState(false);

  useEffect(() => {
    limitRendering.current++;
    if (limitRendering.current > 1) return;
    else CheckIfAllValueIsCorrect();
  });

  const HashButton = () => {
    const text_box = textAreaInputElement.current;
    if (!text_box.value) {
      errorMessage.current =
        "Hey There before you can make a post you would need to type something first :)";
      setdetectFormError(true);
      spanElement.current.textContent = memoValue.current;
    } else {
      SendInputFieldDataToAPI(text_box.value);
    }
  };
  const Session:any = localStorage.getItem('session');
  const parsedData = JSON.parse(Session);
  async function SendInputFieldDataToAPI(field: string,) {
    if(Session) {
      try {
        const response = await fetch("http://localhost:5301/make_post", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            post: field,
            username: 'Session.username',
            email: 'Session.email',
            password: 'Session.password',
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          errorMessage.current = result.message;
          setdetectFormError(false);
          spanElement.current.textContent = memoValue.current;
        }
        if (!response.ok) {
          const result = await response.json();
          console.log(result);
          errorMessage.current = result.error;
          setdetectFormError(true);
          spanElement.current.textContent = memoValue.current;
          /* Setting the value of the key showTextBox to false. - thereby removing the active class from the "textBox" class */
          localStorage.setItem("showTextBox", "false");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Unexpected Response: Looks like we couldn't find your session details, try creating an account to fix this issue")
    }
  }
  const getshowTextBox = localStorage.getItem("showTextBox");
  /**
   * Checks if the value of the showTextBox key in local storage is correct.
   * @returns None
   */
  const CheckIfAllValueIsCorrect = () => {
    if (getshowTextBox === "true") {
      console.log("Show text box");
      setcheckLSKeyState(true);
    } else if (getshowTextBox === "false") {
      setcheckLSKeyState(false);
      console.log("Hide text box");
    }
    console.log(LSKeyState);
  };
  return (
    <div className={LSKeyState ? "textBox active" : "textBox"} ref={wrapBox}>
      <div id="box-cols">
        <div
          id="bx-cl-left"
          onClick={() => localStorage.setItem("showTextBox", "false")}
        >
          <i className="bx bx-arrow-back"></i>
        </div>
        <div id="bx-cl-right">
          <button onClick={HashButton}>Hash</button>
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
          <span id="error" ref={spanElement}></span>
        </div>
      </div>
    </div>
  );
}

export let VariableComponent = false;
export function Click() {
  VariableComponent = true;
  localStorage.setItem("showTextBox", "true");
  console.log(VariableComponent);
}
