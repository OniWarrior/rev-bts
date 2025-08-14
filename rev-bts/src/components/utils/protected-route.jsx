/*
 * Author: Stephen Aranda
 * File  : protected-route.jsx
 * Desc  : Checks if there is a token for the user. If yes then an element that requires auth
 * is rendered. If not then user is returned to login page
 * */

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

}

export default ProtectedRoute;

