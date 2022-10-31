import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HashtagHomePage from "./routes/Home";
import LoginPageComponent from "./routes/Login";
import SignupPageComponent from "./routes/Signup";
import TrendsPage from "./routes/trendHomePage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from './routes/profile';
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
