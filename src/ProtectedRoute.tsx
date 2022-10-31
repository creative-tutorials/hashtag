import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const isAuthenticated = localStorage.getItem("session");
    return (
        isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
    );
}

export default ProtectedRoute;