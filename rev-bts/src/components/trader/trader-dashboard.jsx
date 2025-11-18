import React from "react";
import { connect } from 'react-redux';
import LoggedInNav from '../logged-in-navbar';
import { useNavigate } from "react-router";
import '../../styles/trader/trader-dashboard.css';
import {
    getTraderPortfolio,
    getCancelLog

} from "../../state/actions/trader-actions";
import { useEffect } from "react";

const TraderDashboard = (props) => {
    // local state var for navigation
    const navigate = useNavigate();

    // fetch portfolio value, bitcoin holdings, and purchasing power
    useEffect(() => {
        props.getTraderPortfolio()
    }, [])

    // handler func to cancel log
    const goToCancelLog = (e) => {
        e.preventDefault();

        // make api call to retrieve past orders of the client
        props.getCancelLog(navigate);

    }

    // handler func to client search
    const goToCSearch = (e) => {
        e.preventDefault();

        // go to client search
        navigate('/trader-dashboard/client-search');
    }



    return (
        <div className="trader-dashboard">
            <LoggedInNav />
            <div className="trader-dashboard-main">
                <div className="trader-dashboard-container">
                    <div className="trader-dashboard-header">
                        <h1> Trader Dash-Board</h1>
                    </div>
                    <div className="t-upper-card-group">
                        <div className="t-big-card client-holdings-card">
                            <div className="big-card-headers">
                                <h2>Portfolio Total Value</h2>

                            </div>
                            <div className="big-card-header-values">
                                <p>$ {props.trader.portfolioValue}</p>

                            </div>
                        </div>
                        <div className="t-big-card client-holdings-card">
                            <div className="big-card-headers">

                                <h2>USD Comm Pay</h2>

                            </div>
                            <div className="big-card-header-values">

                                <p>$ {props.trader.balance}</p>

                            </div>
                        </div>
                        <div className="t-big-card client-holdings-card">
                            <div className="big-card-headers">

                                <h2>Bitcoin Comm Pay</h2>
                            </div>
                            <div className="big-card-header-values">

                                <p>BTC {props.trader.wallet}</p>
                            </div>
                        </div>

                    </div>
                    <div className="lower-card-group">
                        <div className="small-card cancel-log-card">
                            <div className="btn-t-cancel-log" onClick={goToCancelLog}></div>
                            <h2>Cancel Log</h2>
                        </div>
                        <div className="small-card client-search-card">
                            <div className="btn-t-client-search" onClick={goToCSearch}></div>
                            <h2>Client Search</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error
    }
}

const mapDispatchToProps = {
    getTraderPortfolio,
    getCancelLog

}

export default connect(mapStateToProps, mapDispatchToProps)(TraderDashboard)

