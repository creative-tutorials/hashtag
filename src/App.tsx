import Loader from "./components/loader";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

const HashtagHomePage = lazy(() => import("./pages/Home"));
const LoginPageComponent = lazy(() => import("./pages/Login"));
const SignupPageComponent = lazy(() => import("./pages/Signup"));
const TrendsPage = lazy(() => import("./pages/trendHomePage"));
const ProfilePage = lazy(() => import("./pages/profile"));
// const  = lazy(() => import("./components/loader"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HashtagHomePage />} />
            </Route>
            <Route path="login" element={<LoginPageComponent />} />
            <Route path="signup" element={<SignupPageComponent />} />
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="trends" element={<TrendsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
