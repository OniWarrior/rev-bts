/*
 * author: Stephen Aranda
 * File  : logged-in-navbar.jsx 
 * Desc  : this is the component of a logged in user. The nav bar that is rendered
 *       : will depend on whether the user is a Client, Trader, or Manager
 ** */
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import ClientNav from "./client/client-nav";
import TraderNav from "./trader/trader-nav";
import ManagerNav from "./manager/manager-nav";



const LoggedInNav = (props) => {

    const navigate = useNavigate();

    // collect ur value
    const ur = props.login.ur;

    // decide what nav bar to render- default send them home.
    switch (ur) {
        case "Client": return <ClientNav />;
        case "Trader": return <TraderNav />;
        case "Manager": return <ManagerNav />;
        default: navigate("/");

    }

}

// maps global state to props of component
const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login,
        loading: state.loginReducer.loading,
        error: state.loginReducer.error
    }
}


export default connect(mapStateToProps)(LoggedInNav)

