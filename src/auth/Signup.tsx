import { Link } from "react-router-dom";
import { useRef, useState, useMemo } from "react";
import design from "../styles/signup.module.css";
function SignupPageComponent() {
  const message = {
    value: "Hello World",
  };
  const email_field: any = useRef();
  const password_field: any = useRef();
  const getAgeField: any = useRef();
  const email_error: any = useRef();
  const pswrd_error: any = useRef();
  const age_error: any = useRef();
  const [detectPassword, setdetectPassword] = useState(true);
  const use_memo = useMemo(() => message, [message]);
  const getPasswordField = () => {
    const d_password = password_field.current;
    // console.log("getPasswordField");
    if (d_password.type === "password") {
      d_password.type = "text";
      setdetectPassword(false);
    } else {
      d_password.type = "password";
      setdetectPassword(true);
    }
  };
  const SubmitFormDetails = () => {
    const g_email = email_field.current.value;
    const g_password = password_field.current.value;
    const g_age = getAgeField.current.value;

    async function SendDataToAPI(email: string, password: string, age: number) {
      try {
        const response = await fetch("http://localhost:5301/signup", {
          method: "POST",
          headers: {
            apikey: "3Gq67bFtUSDbcI3bdaulMUiVpnZTJ93B",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 200,
            email: email,
            password: password,
            age: age,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          message.value = "";
          console.log(result);
        } else {
          const result = await response.json();
          message.value = result.error;
          email_error.current.textContent = use_memo.value;
          pswrd_error.current.textContent = use_memo.value;
          age_error.current.textContent = use_memo.value;
        }
      } catch (err) {
        console.error(err);
      }
    }
    const CheckRegex = () => {
      const regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const prefix = ".";

      if (g_email.match(regex) && g_email.includes(prefix)) {
        SendDataToAPI(g_email, g_password, g_age);
      } else {
        message.value = "email field is not valid";
      }
    };
    if (g_email === "" || g_password === "" || g_age === "") {
      message.value = "Please enter your email address, password and age";
    } else {
      CheckRegex();
    }
    email_error.current.textContent = use_memo.value;
    pswrd_error.current.textContent = use_memo.value;
    age_error.current.textContent = use_memo.value;
  };
  return (
    <div id={design.wrap}>
      <div id={design.form_container}>
        <p id={design.header}>Sign Up</p>
        <div id={design.cms}>
          <div id={design.inputbox}>
            <span>Email</span>
            <input
              type="text"
              placeholder="mymail@gmail.com"
              ref={email_field}
            />
            <p id={design.form_error} ref={email_error}></p>
          </div>
          <div id={design.inputbox}>
            <span>Password</span>
            <input type="password" placeholder="" ref={password_field} />
            <i
              className={detectPassword ? "bx bx-show" : "bx bx-hide"}
              onClick={getPasswordField}
            ></i>
            <p id={design.form_error} ref={pswrd_error}></p>
          </div>
          <div id={design.inputbox}>
            <span>Age</span>
            <input type="number" placeholder="" ref={getAgeField} />
            <p id={design.form_error} ref={age_error}></p>
          </div>
          <p id={design.fgtpassword}>
            <Link to={`/forgot-password`}>Forgot password?</Link>
          </p>
          <div id={design.tickbox}>
            <span id={design.checkbox}>
              <input type="checkbox" name="" id="check" hidden />
              <label htmlFor="check">
                <div id={design.label}></div>
              </label>
              <span id={design.check_text}>
                I agree with{" "}
                <a href="https://google.com" id={design.termscondition}>
                  Terms&Conditions
                </a>
              </span>{" "}
            </span>
          </div>
          <div id={design.signoption}>
            <span>Sign up with</span>
            <div id={design.options}>
              <i
                className="bx bxl-facebook-circle"
                onClick={() => confirm("coming soon")}
              ></i>
              <i
                className="bx bxl-google"
                onClick={() => confirm("coming soon")}
              ></i>
            </div>
          </div>
          <div id={design.reqbtn}>
            <button onClick={SubmitFormDetails}>Sign Up</button>
          </div>
          <div id={design.reqbtn}>
            <p>Already have an account?</p>
            <Link to={`/login`}>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupPageComponent;
