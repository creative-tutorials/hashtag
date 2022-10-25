import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HashtagHomePage from "./components/Home/Home";
import LoginPageComponent from "./auth/Login";
import SignupPageComponent from "./auth/Signup";
import UsernamePicker from "./auth/usernamePicker";
import TrendsPage from "./components/trends/trendsPage";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<HashtagHomePage />} />
        </Route>  
        <Route path="/login" element={<LoginPageComponent />} />
        <Route path="/signup" element={<SignupPageComponent />} />
        <Route path="/generateUsername" element={<UsernamePicker />} />
        <Route path="/trends" element={<TrendsPage />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
