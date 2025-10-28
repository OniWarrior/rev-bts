/*
 * Author: Stephen Aranda
 * File  : manager-dashboard.jsx
 * Desc  : This component is the dashboard for the manager of the application
 * */

import React from "react";
import { connect } from "react-redux";
import {
    getTotalDailyTransactions,
    getTotalMonthlyTransactions,
    getTotalWeeklyTransactions
} from "../../state/actions/manager-actions";
import LoggedInNav from '../logged-in-navbar.jsx';
import "../../styles/manager-dashboard.css";

const ManagerDashboard = (props) => {

    return (
        <div className="manager-dashboard">
            <LoggedInNav />
            <div className="manager-dashboard-main">
                <div className="manager-dashboard-container">
                    <div className="manager-dashboard-header">
                        <h1> Manager Dash-Board</h1>
                    </div>
                    <div className="upper-card-group">
                        <div className="big-card manager-monthly-card">
                            <div className="big-card-headers">
                                <h2>Total Monthly Transactions</h2>
                            </div>
                            <div className="big-card-header-values">
                                <p>Monthly</p>
                            </div>
                        </div>
                        <div className="big-card manager-daily-card">
                            <div className="big-card-headers">
                                <h2>Total Daily Transactions</h2>
                            </div>
                            <div className="big-card-header-values">
                                <p>Daily</p>
                            </div>
                        </div>
                        <div className="big-card manager-weekly-card">
                            <div className="big-card-headers">
                                <h2>Total Weekly Transactions</h2>
                            </div>
                            <div className="big-card-header-values">
                                <p>Weekly</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        manager: state.managerReducer.manager,
        loading: state.managerReducer.loading,
        error: state.managerReducer.error
    }
}

const mapDispatchToProps = {
    getTotalDailyTransactions,
    getTotalMonthlyTransactions,
    getTotalWeeklyTransactions
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)

