import React from "react";

import { useNavigate } from "react-router";
import "../../styles/nav-bar.css";


const ManagerNav = () => {
    // local state var for navigation
    const navigate = useNavigate();

    // handler func to logout
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }


    return (
        <div className="nav-container">
            <nav className="nav-row">
                <div className="btn-logout" onClick={logOut}></div>
            </nav>
        </div>
    )



}

export default ManagerNav;