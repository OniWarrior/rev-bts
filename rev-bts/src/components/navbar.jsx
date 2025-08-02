/*
 * Author: Stephen aranda
 * File  : navbar.jsx
 * Desc  : single-file-comp that is the navigation bar for logged out or non-existent
 *         account. 
 */
import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/nav-bar.css'

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
                <div className="btn-home" onClick={goHome}></div>
                <div className="btn-login" onClick={goLogin}></div>
                <div className="btn-signup" onClick={goSignup}></div>
            </nav>
        </div>
    )






}

export default NavBar;