import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HashtagHomePage from "./components/Home/Home";
import LoginPageComponent from "./auth/Login";
import SignupPageComponent from "./auth/Signup";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HashtagHomePage />} />
        <Route path="/login" element={<LoginPageComponent />} />
        <Route path="/signup" element={<SignupPageComponent />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
