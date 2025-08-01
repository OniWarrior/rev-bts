/*
 * Author: Stephen aranda
 * File  : navbar.jsx
 * Desc  : single-file-comp that is the navigation bar for logged out or non-existent
 *         account. 
 */
import React from "react";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    // hook for navigation 
    const navigate = useNavigate();

    // handler func for home
    const goHome = () => {
        navigate('/');
    }

    // handler func to go to signup page
    const goSignup = () => {
        navigate('/signup');
    }

    // handler func to go to login page
    const goLogin = () => {
        navigate('/login');
    }

    return (
        <div className="nav-container">
            <nav className="nav-row">
                <button className="btn-home" onClick={goHome}></button>
                <button className="btn-login" onClick={goLogin}></button>
                <button className="btn-signup" onClick={goSignup}></button>
            </nav>
        </div>
    )






}

export default NavBar;