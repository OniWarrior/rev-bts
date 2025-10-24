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
    fetchLatestForCPurchase,
    fetchLatestForCSell

} from "../../state/actions/bitcoin-actions";
import { useNavigate } from "react-router";


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
        props.fetchLatestForCPurchase(navigate);
    }

    // handler func to fetch bitcoin price and navigate to sell bitcoin page
    const goToSellBitcoin = (e) => {
        e.preventDefault()

        // make api call to fetch current bitcoin price and nav to sell bitcoin page
        props.fetchLatestForCSell(navigate);
    }


    // handler func to navigate to money transfer page
    const goToMoneyTransfer = (e) => {
        e.preventDefault()

        // navigate to the money transfer page
        navigate("/client-dashboard/transfer-money");
    }



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
    fetchLatestForCPurchase,
    fetchLatestForCSell
}


// connect global state to the props of client dashboard.
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashBoard);