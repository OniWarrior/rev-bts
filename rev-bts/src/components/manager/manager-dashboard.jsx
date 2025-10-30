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
import useFormValidation from '../../hooks/useFormValidation.js';
import Daily_Form_Schema from "../../form-schemas/daily-form-schema.jsx";
import Monthly_Form_Schema from "../../form-schemas/monthly-form-schema.jsx";
import Weekly_Form_Schema from "../../form-schemas/weekly-form-schema.jsx";


const ManagerDashboard = (props) => {

    // Initial values and errors for daily card
    const initialDailyValues = {
        daily_date: "",
        error: ''
    }

    const initialDailyErrors = {
        daily_date: '',
        error: ''
    }

    // Initial values and errors for monthly card
    const initialMonthlyValues = {
        date: '',
        error: ''

    }

    const initialMonthlyErrors = {
        date: '',
        error: ''
    }

    // Initial vaules and errors for weekly card
    const initialWeeklyValues = {
        start_date: '',
        end_date: '',
        error: ''
    }

    const initialWeeklyErrors = {
        start_date: '',
        end_date: '',
        error: ''

    }
    const [selectedDailyDate, dailyErrors, setSelectedDailyDate] = useFormValidation(Daily_Form_Schema, initialDailyErrors, initialDailyValues);
    const [selectedMonthlyDate, monthlyErrors, setSelectedMonthlyDate] = useFormValidation(Monthly_Form_Schema, initialMonthlyErrors, initialMonthlyValues);
    const [selectedWeeklyDate, weeklyErrors, setSelectedWeeklyDate] = useFormValidation(Weekly_Form_Schema, initialWeeklyValues, initialWeeklyErrors);
    // handler func that sets state values for selectedDailyDate
    const onDailyChange = (e) => {

        setSelectedDailyDate(e, Daily_Form_Schema);

    }

    // handler func that sets state values for selectedMonthlyDate
    const onMonthlyChange = (e) => {

        setSelectedMonthlyDate(e, Monthly_Form_Schema);

    }

    // handler func that sets state values for selectedWeeklyDate
    const onWeeklyChange = (e) => {
        setSelectedWeeklyDate(e, Weekly_Form_Schema);
    }

    // handles the date format and api call after form submission.
    const onMonthlyFormSubmit = (e) => {
        e.preventDefault()
        // make the api call that will retrieve the total number of transactions
        // of the month of the provided year.
        props.getTotalMonthlyTransactions(selectedMonthlyDate);

    }

    // handles the date format and api call after form submission.
    const onDailyFormSubmit = (e) => {
        e.preventDefault()
        // make the api call that will retrieve the total number of transactions
        // of the month of the provided year.
        props.getTotalDailyTransactions(selectedDailyDate);

    }

    // handles the date format and api call after form submission.
    const onWeeklyFormSubmit = (e) => {
        e.preventDefault()

        props.getTotalWeeklyTransactions(selectedWeeklyDate)
    }





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
                                <form className="date-form" onSubmit={onMonthlyFormSubmit}>
                                    <input
                                        id="date"
                                        type="date"
                                        name="date"
                                        onChange={onMonthlyChange}
                                    />

                                    <button
                                        type='submit'
                                        className='monthly-submit'
                                    >
                                        Submit
                                    </button>
                                    <div className="error">
                                        <p>{monthlyErrors.error}</p>
                                    </div>

                                </form>


                            </div>
                        </div>
                        <div className="big-card manager-daily-card">
                            <div className="big-card-headers">
                                <h2>Total Daily Transactions</h2>
                            </div>
                            <div className="big-card-header-values">
                                <form className="date-form" onSubmit={onDailyFormSubmit}>
                                    <input
                                        id="daily_date"
                                        type="date"
                                        name="daily_date"
                                        onChange={onDailyChange}
                                    />
                                    <button
                                        type='submit'
                                        className='daily-submit'
                                    >
                                        Submit
                                    </button>
                                    <div className="error">
                                        <p>{dailyErrors.error}</p>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="big-card manager-weekly-card">
                            <div className="big-card-headers">
                                <h2>Total Weekly Transactions</h2>
                            </div>
                            <div className="big-card-header-values">
                                <form className="weekly-form" onSubmit={onWeeklyFormSubmit}>
                                    <div className="start-date-group">
                                        <h2>Start Date</h2>
                                        <input
                                            id="start_date"
                                            type="date"
                                            name="start_date"
                                            onChange={onWeeklyChange}
                                        />
                                    </div>
                                    <div className="end-date-group">
                                        <h2>End Date</h2>
                                        <input
                                            id="end_date"
                                            type="date"
                                            name="end_date"
                                            onChange={onWeeklyChange}
                                        />
                                    </div>
                                    <button
                                        type='submit'
                                        className='daily-submit'
                                    >
                                        Submit
                                    </button>
                                    <div className="error">
                                        <p>{weeklyErrors.error}</p>
                                    </div>

                                </form>


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

