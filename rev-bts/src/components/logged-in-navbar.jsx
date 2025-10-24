/*
 * author: Stephen Aranda
 * File  : logged-in-navbar.jsx 
 * Desc  : this is the component of a logged in user. The nav bar that is rendered
 *       : will depend on whether the user is a Client, Trader, or Manager
 ** */
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';


const LoggedInNav = (props) => {

    // local var used to navigate
    const navigate = useNavigate();

    // collect ur value
    const ur = props.ur

    // handler func that logs user out.
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }

    <div className="nav-container">
        <nav className="nav-row">
            <div className="btn-home" onClick={goHome}></div>
            <div className="btn-login" onClick={goLogin}></div>
            <div className="btn-signup" onClick={goSignup}></div>
        </nav>
    </div>





}

// maps global state to props of component
const mapStateToProps = (state) => {
    return {
        ur: state.loginReducer.login.ur
    }
}


export default connect(mapStateToProps)(LoggedInNav)

