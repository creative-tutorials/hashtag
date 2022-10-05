import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HashtagHomePage from "./components/Home/Home";
import Test from "./components/test/test";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HashtagHomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
