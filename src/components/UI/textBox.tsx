import "../../styles/designlab.css";
import { useRef, useMemo, useState, useEffect } from "react";
export default function textBox() {
  const [active, setactive] = useState(false);
  const textBox: any = useRef();
  let loadcounter = 0;
  useEffect(() => {
    loadcounter++;
    if (loadcounter > 1) return CheckActiveState();
    else;
    return () => {};
  });

  const message = {
    value: "Hello World!",
  };
  const textarea: any = useRef();
  const spanElement: any = useRef();
  const memoValue = useMemo(() => message, [message]);
  const [detectFormError, setdetectFormError] = useState(false);

  const HashButton = () => {
    const text_box = textarea.current;
    if (!text_box.value) {
      message.value =
        "Hey Cutie💖 before you can make a post you would need to type something first :)";
      setdetectFormError(true);
      spanElement.current.textContent = memoValue.value;
    } else {
      console.log("text box is not empty");
      message.value = "";
      setdetectFormError(false);
      spanElement.current.textContent = memoValue.value;
    }
  };
  function CheckActiveState() {
    const getActiveState = localStorage.getItem("active");

    if (getActiveState === "true") {
      setactive(true);
      textBox.current.classList.add("active");
    } else {
      setactive(false);
      textBox.current.classList.remove("active");
    }
  }
  return (
    <div className="textBox" ref={textBox}>
      <div id="box-cols">
        <div
          id="bx-cl-left"
          onClick={() => localStorage.setItem("active", "false")}
        >
          <i className="bx bx-arrow-back"></i>
        </div>
        <div id="bx-cl-right">
          <button onClick={HashButton}>Hash</button>
        </div>
      </div>
      <div className="hashtag-text-component">
        <textarea name="" id="" ref={textarea} cols={30} rows={10}></textarea>
        <div className={detectFormError ? "error-component" : null}>
          <span id="error" ref={spanElement}></span>
        </div>
      </div>
    </div>
  );
}
