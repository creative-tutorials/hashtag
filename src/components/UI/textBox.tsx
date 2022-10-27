import "../../styles/designlab.css";

import { useRef, useMemo, useState } from "react";
export function InputPopUp({componentfunction, LSKeyState, setcheckLSKeyState}:any) {
  let errorMessage = useRef("");
  /**
   * A hook that checks if the localStorage key is set.
   * @returns A boolean that is true if the key is set.
   */
  const textAreaInputElement: any = useRef();
  const wrapBox: any = useRef();
  let limitRendering: any = useRef(0);
  const spanElement: any = useRef();
  const memoValue = useMemo(() => errorMessage, [errorMessage]);
  const [detectFormError, setdetectFormError] = useState(false);

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
            email: parsedData.email,
            status: 'posting...',
            created: 'waiting...',
            password: parsedData.password,
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
          setTimeout(() => {
            setcheckLSKeyState(false)
          }, 10000);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      const error = "Unexpected Error: Looks like we couldn't find your session details, try creating an account to fix this issue"
      errorMessage.current = error;
      setdetectFormError(true);
      spanElement.current.textContent = memoValue.current;
      setTimeout(() => {
        setcheckLSKeyState(false)
      }, 10000);
    }
  }
  return (
    <div className={LSKeyState ? "textBox active" : "textBox"} ref={wrapBox}>
      <div id="box-cols">
        <div
          id="bx-cl-left"
          onClick={() => setcheckLSKeyState(false)}
        >
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
          <span id="error" ref={spanElement}></span>
        </div>
      </div>
    </div>
  );
}