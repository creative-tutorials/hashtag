import React from "react";
export function CheckUserID({ id_checker_input, hideIDComponent }: any) {
  function ChangeUserNameOnProfilePage(
    key: any,
    event = id_checker_input.current.value
  ) {
    const detectKeyCode = key.code;
    const targetValue = event;
    console.log(targetValue);
    detectKeyCode === "Enter" ? SubmitInputDetails() : null;
  }
  const SubmitInputDetails = () => {
    console.log("Enter Key Detected");
  };
  return hideIDComponent ? (
    <div className="id-checker" style={{ display: "block" }}>
      <input
        type="text"
        placeholder="Place your Public ID Here"
        ref={id_checker_input}
        onKeyUp={ChangeUserNameOnProfilePage}
      />
      <div id="bottom-label">
        <span>
          Don't know your public ID? <a href="">Request for it</a>
        </span>
        <i id="italic">
          <i className="bx bx-bulb"></i> Hint: You can hit enter to submit
          details
        </i>
      </div>
    </div>
  ) : null;
}
