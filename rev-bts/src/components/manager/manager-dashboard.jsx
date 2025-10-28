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
import ManagerNav from './manager-nav';

const ManagerDashboard = (props) => {

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

