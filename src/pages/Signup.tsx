import { ShowHidePassword } from "../components/functions/ShowHidePswrd";
import { Link } from "react-router-dom";
import { useRef, useState, useMemo } from "react";
import design from "../styles/signup.module.css";
function SignupPageComponent() {
  const message = {
    value: "Hello World",
  };
  const username_field: any = useRef();
  const email_field: any = useRef();
  const password_field: any = useRef();
  const getAgeField: any = useRef();
  const formError: any = useRef();
  const [detectPassword, setdetectPassword] = useState(true);
  const use_memo = useMemo(() => message, [message]);
  const changePasswordFieldState = ShowHidePassword(
    password_field,
    setdetectPassword
  );
  const SubmitFormDetails = () => {
    const g_username = username_field.current.value;
    const g_email = email_field.current.value;
    const g_password = password_field.current.value;
    const g_age = getAgeField.current.value;

    async function SendDataToAPI(
      username: string,
      email: string,
      password: string,
      age: number
    ) {
      try {
        const response = await fetch("http://localhost:5301/signup", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 200,
            email: email,
            username: username,
            password: password,
            age: age,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          message.value = "Login Success";
          formError.current.textContent = use_memo.value;
          console.log(result);
          localStorage.setItem("session", JSON.stringify(result));
          setTimeout(() => {
            window.location.pathname = "/";
          }, 2000);
        } else {
          const result = await response.json();
          message.value = result.error;
          formError.current.textContent = use_memo.value;
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
        SendDataToAPI(g_username, g_email, g_password, g_age);
      } else {
        message.value = "email field is not valid";
      }
    };
    if (
      g_username === "" ||
      g_email === "" ||
      g_password === "" ||
      g_age === ""
    ) {
      message.value = "Please fill all the input fields below";
    } else {
      CheckRegex();
    }
    formError.current.textContent = use_memo.value;
  };
  return (
    <div id={design.wrap}>
      <div id={design.form_container}>
        <p id={design.header}>Sign Up</p>
        <div id={design.cms}>
          <div id={design.inputbox}>
            <span>Username</span>
            <input
              type="text"
              placeholder="Your username"
              ref={username_field}
            />
            <p id={design.form_error} ref={formError}></p>
          </div>
          <div id={design.inputbox}>
            <span>Email</span>
            <input
              type="text"
              placeholder="mymail@gmail.com"
              ref={email_field}
            />
          </div>
          <div id={design.inputbox}>
            <span>Password</span>
            <input
              type="password"
              placeholder="*********"
              ref={password_field}
            />
            <i
              className={detectPassword ? "bx bx-show" : "bx bx-hide"}
              onClick={changePasswordFieldState}
            ></i>
          </div>
          <div id={design.inputbox}>
            <span>Age</span>
            <input type="number" placeholder="" ref={getAgeField} />
          </div>
          <p id={design.fgtpassword}>
            <Link to={`/forgot-password`}>Forgot password?</Link>
          </p>
          <div id={design.signoption}>
            <span>Sign up with</span>
            <div id={design.options}>
              <img
                src="facebook.png"
                alt="facebook logo"
                onClick={() => confirm("coming soon")}
              />
              <img
                src="google.png"
                alt="google logo"
                onClick={() => confirm("coming soon")}
              />
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
