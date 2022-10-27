import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HashtagHomePage from "./components/Home/Home";
import LoginPageComponent from "./auth/Login";
import SignupPageComponent from "./auth/Signup";
import TrendsPage from "./components/trends/trendsPage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from './auth/profile';
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
        <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<ProfilePage />} />
        </Route>  
        <Route element={<ProtectedRoute/>}>
        <Route path="/trends" element={<TrendsPage />} />
        </Route>  
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
