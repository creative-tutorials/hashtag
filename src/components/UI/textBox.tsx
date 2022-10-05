import "../../styles/designlab.css";
import { useRef } from "react";
export default function textBox() {
  const textarea = useRef();
  const Hash = () => {
    const text_box = textarea.current;
    if (!text_box.value) {
      console.log("text box is empty");
    } else {
      console.log("text box is not empty");
    }
  };
  return (
    <div id="textBox">
      <div id="box-cols">
        <div id="bx-cl-left">
          <i className="bx bx-arrow-back"></i>
        </div>
        <div id="bx-cl-right">
          <button onClick={Hash}>Hash</button>
        </div>
      </div>
      <div className="hashtag-text-component">
        <textarea name="" id="" ref={textarea} cols={30} rows={10}></textarea>
        <div className="error-component">
          <span id="error">Hello from Error</span>
        </div>
      </div>
    </div>
  );
}
