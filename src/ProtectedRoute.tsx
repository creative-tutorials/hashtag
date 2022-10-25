import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const isAuthenticated = localStorage.getItem("session");
    console.log(isAuthenticated)
    return (
        isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
    );
}

export default ProtectedRoute;