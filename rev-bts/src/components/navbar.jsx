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




}

export default NavBar;