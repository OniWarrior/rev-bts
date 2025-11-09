import React from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { getCancelLog } from "../../state/actions/trader-actions";
import "../../styles/nav-bar.css";

const TraderNav = (props) => {
    // local var for navigation
    const navigate = useNavigate();

    // handler func to logout
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('ur');
        navigate('/');
    }

    // handler func to navigate to dashboard
    const goToDash = (e) => {
        e.preventDefault()
        navigate("/trader-dashboard");
    }

    // handler func to navigate to client search
    const goToSearch = (e) => {
        e.preventDefault()
        navigate("/trader-dashboard/client-search");
    }

    // handler func to navigate to cancel log
    const goToLog = (e) => {
        e.preventDefault()
        // make api call to retrieve cancel log and navigate to cancel log page.
        props.getCancelLog(navigate);
    }


    return (
        <div className="nav-container">
            <nav className="nav-row">
                <div className="btn-t-dashboard" onClick={goToDash}></div>
                <div className="btn-t-client-search" onClick={goToSearch}></div>
                <div className="btn-t-cancel-log" onClick={goToLog}></div>
                <div className="btn-logout" onClick={logOut}></div>
            </nav>
        </div>
    )

}

const mapDispatchToProps = {
    getCancelLog

}


export default connect(null, mapDispatchToProps)(TraderNav);