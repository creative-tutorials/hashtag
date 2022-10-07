import { Link } from "react-router-dom";
import { useRef, useState, useMemo } from "react";
import login_design from "../styles/login.module.css";
function LoginPageComponent() {
  const message = {
    value: "Hello World",
  };
  const email_field: any = useRef();
  const password_field: any = useRef();
  const email_error: any = useRef();
  const pswrd_error: any = useRef();
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

    async function SendDataToAPI(email: string, password: string) {
      try {
        const response = await fetch("http://localhost:5301/login", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result);
        } else {
          const result = await response.json();
          message.value = result.error;
          email_error.current.textContent = use_memo.value;
          pswrd_error.current.textContent = use_memo.value;
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
        SendDataToAPI(g_email, g_password);
      } else {
        message.value = "email field is not valid";
      }
    };
    if (g_email === "" || g_password === "") {
      message.value = "Please enter your email address and password";
    } else {
      CheckRegex();
    }
    email_error.current.textContent = use_memo.value;
    pswrd_error.current.textContent = use_memo.value;
  };
  return (
    <div id={login_design.wrap}>
      <div id={login_design.form_container}>
        <p id={login_design.header}>Log In</p>
        <div id={login_design.cms}>
          <div id={login_design.inputbox}>
            <span>Email</span>
            <input
              type="text"
              placeholder="mymail@gmail.com"
              ref={email_field}
            />
            <p id={login_design.form_error} ref={email_error}></p>
          </div>
          <div id={login_design.inputbox}>
            <span>Password</span>
            <input type="password" placeholder="" ref={password_field} />
            <i
              className={detectPassword ? "bx bx-show" : "bx bx-hide"}
              onClick={getPasswordField}
            ></i>
            <p id={login_design.form_error} ref={pswrd_error}></p>
          </div>
          <p id={login_design.fgtpassword}>
            <Link to={`/forgot-password`}>Forgot password?</Link>
          </p>
          <div id={login_design.tickbox}>
            <span id={login_design.checkbox}>
              <input type="checkbox" name="" id="check" hidden />
              <label htmlFor="check">
                <div id={login_design.label}></div>
              </label>
              <span id={login_design.check_text}>Remember me</span>{" "}
            </span>
          </div>
          <div id={login_design.signoption}>
            <span>Sign in with</span>
            <div id={login_design.options}>
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
          <div id={login_design.reqbtn}>
            <button onClick={SubmitFormDetails}>Log In</button>
          </div>
          <div id={login_design.reqbtn}>
            <p>Don't have an account</p>
            <Link to={`/signup`}>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPageComponent;
