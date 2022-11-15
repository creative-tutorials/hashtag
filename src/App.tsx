import Loader from "./components/loader";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./ProtectedRoute";

const HashtagHomePage = lazy(() => import("./pages/Home"));
const LoginPageComponent = lazy(() => import("./pages/Login"));
const SignupPageComponent = lazy(() => import("./pages/Signup"));
const NewsPage = lazy(() => import("./pages/news"));
const ProfilePage = lazy(() => import("./pages/profile"));
const AdminControl = lazy(() => import("./auth/admin"));
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
              <Route path="news" element={<NewsPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="admin" element={<AdminControl />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
