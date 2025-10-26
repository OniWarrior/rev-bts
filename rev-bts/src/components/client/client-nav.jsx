/*
 * Author: Stephen Aranda
 * File  : client-nav.jsx 
 * Desc  : This is the navigation that will be rendered when a client is logged in.
 * */

import React from "react";
import { connect } from "react-redux";
import {
    getBitcoinWallet,
    getPastOrders

} from "../../state/actions/client-actions";
import {
    getLatestPriceForCPurchase,
    getLatestPriceForCSell
} from '../../state/actions/bitcoin-actions'
import { useNavigate } from "react-router";
import "../../styles/nav-bar.css";

const ClientNav = (props) => {
    // local state var for navigation
    const navigate = useNavigate();

    // handler func to logout
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        navigate('/');
    }



    // handler func to handle navigating to dashboard
    const goToDash = (e) => {
        e.preventDefault();

        // navigate to dashboard
        navigate("/client-dashboard");
    }

    // handler func to handle the retrieval of the client's bitcoin wallet
    const getWallet = (e) => {
        e.preventDefault();

        // make api call to get the amount of bitcoin in wallet
        props.getBitcoinWallet();
    }

    // handler func to handle navigation to buy bitcoin
    const goToBuy = (e) => {
        e.preventDefault();

        // make api call to get latest price of bitcoin and nav to buy bitcoin
        props.getLatestPriceForCPurchase(navigate);
    }

    // handler func to handle navigation to sell bitcoin
    const goToSell = (e) => {
        e.preventDefault()

        // make api call to get latest price of bitcoin and nav to sell bitcoin
        props.getLatestPriceForCSell(navigate);
    }

    // handler func to handle navigation to past orders
    const goToOrders = (e) => {
        e.preventDefault();

        // make api call to get past orders and navigate to orders page
        props.getPastOrders(navigate);
    }

    // handler func to handle navigation to transfer money
    const goToTransfer = (e) => {
        e.preventDefault();

        // navigate to transfer money
        navigate("/client-dashboard/transfer-money");
    }

    return (

        <div className="nav-container">
            <nav className="nav-row">
                <div className="btn-c-dashboard" onClick={goToDash}></div>
                <div className="btn-c-wallet" onClick={getBitcoinWallet}></div>
                <div className="btn-c-buy" onClick={goToBuy}></div>
                <div className="btn-c-sell" onClick={goToSell}></div>
                <div className="btn-c-orders" onClick={goToOrders}></div>
                <div className="btn-c-transfer" onClick={goToTransfer}></div>
                <div className="btn-logout" onClick={logOut}></div>
            </nav>
        </div>

    )

}




// map api calls to props
const mapDispatchToProps = {
    getLatestPriceForCPurchase,
    getLatestPriceForCSell,
    getBitcoinWallet,
    getPastOrders
}

export default connect(null, mapDispatchToProps)(ClientNav);