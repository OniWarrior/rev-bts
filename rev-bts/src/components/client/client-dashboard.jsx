/*
 * Author: Stephen Aranda
 * File  : client-dashboard.jsx 
 * Desc  : This is the component for the client dashboard of a client user
 * 
 * * */

import React from "react";
import { connect } from "react-redux";
import {
    getBitcoinWallet,
    getPastOrders

} from "../../state/actions/client-actions";
import {
    getLatestPriceForCPurchase,
    getLatestPriceForCSell

} from "../../state/actions/bitcoin-actions";
import { useNavigate } from "react-router";
import LoggedInNav from "../logged-in-navbar";
import "../../styles/client-dashboard.css";



const ClientDashBoard = (props) => {

    // local state var for navigation
    const navigate = useNavigate();

    // handler func to retrieve bitcoin wallet
    const goToWallet = (e) => {

        e.preventDefault();
        // make api call to retrieve wallet
        props.getBitcoinWallet(navigate);
    }


    // handler func to retrieve past orders
    const goToPastOrders = (e) => {
        e.preventDefault();

        // make api call to retrieve past orders of the client
        props.getPastOrders(navigate);
    }

    // handler func to fetch bitcoin price and navigate to buy bitcoin page
    const goToBuyBitcoin = (e) => {
        e.preventDefault()

        // make api call to fetch current bitcoin price and nav to buy bitcoin page
        props.getLatestForCPurchase(navigate);
    }

    // handler func to fetch bitcoin price and navigate to sell bitcoin page
    const goToSellBitcoin = (e) => {
        e.preventDefault()

        // make api call to fetch current bitcoin price and nav to sell bitcoin page
        props.getLatestForCSell(navigate);
    }


    // handler func to navigate to money transfer page
    const goToMoneyTransfer = (e) => {
        e.preventDefault()

        // navigate to the money transfer page
        navigate("/client-dashboard/transfer-money");
    }

    return (
        <div className="client-dashboard">
            <LoggedInNav />
            <div className="client-dashboard-main">
                <div className="client-dashboard-container">
                    <div className="client-dashboard-header">
                        <h1> Client Dash-Board</h1>
                    </div>
                    <div className="upper-card-group">
                        <div className="big-card client-holdings-card">

                        </div>
                        <div className="big-card bitcoin-price-card">

                        </div>
                    </div>
                    <div className="lower-card-group">
                        <div className="small-card buy-bitcoin-card">
                            <div className="btn-c-buy" onClick={goToBuyBitcoin}></div>
                        </div>
                        <div className="small-card sell-bitcoin-card">
                            <div className="btn-c-sell" onClick={goToSellBitcoin}></div>
                        </div>
                        <div className="small-card transfer-money-card">
                            <div className="btn-c-transfer" onClick={goToMoneyTransfer}></div>
                        </div>
                        <div className="small-card past-orders-card">
                            <div className="btn-c-orders" onClick={goToPastOrders}></div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )



}

// maps global state to props of component
const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }

}

// maps api calls to props of component
const mapDispatchToProps = {
    getBitcoinWallet,
    getPastOrders,
    getLatestPriceForCPurchase,
    getLatestPriceForCSell
}


// connect global state to the props of client dashboard.
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashBoard);