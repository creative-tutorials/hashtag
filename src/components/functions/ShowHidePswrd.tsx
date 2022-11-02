export function ShowHidePassword(password_field:any, setdetectPassword:any) {
  return () => {
    const d_password = password_field.current;

    if (d_password.type === "password") {
      d_password.type = "text";
      setdetectPassword(false);
    } else {
      d_password.type = "password";
      setdetectPassword(true);
    }
  };
}
