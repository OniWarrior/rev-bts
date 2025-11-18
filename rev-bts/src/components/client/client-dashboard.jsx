/*
 * Author: Stephen Aranda
 * File  : client-dashboard.jsx 
 * Desc  : This is the component for the client dashboard of a client user
 * 
 * * */


import { connect } from "react-redux";
import {
    getBitcoinWallet,
    getPastOrders,
    getBitcoinHoldings,
    getPortfolio

} from "../../state/actions/client-actions";
import {
    getLatestPriceForCPurchase,
    getLatestPriceForCSell,
    getLatestBitcoinPrice

} from "../../state/actions/bitcoin-actions";
import { useNavigate } from "react-router";
import LoggedInNav from "../logged-in-navbar";
import "../../styles/client/client-dashboard.css";
import { useEffect } from "react";



const ClientDashBoard = (props) => {

    // local state var for navigation
    const navigate = useNavigate();



    // fetch portfolio value, bitcoin holdings, and purchasing power
    useEffect(() => {
        props.getLatestBitcoinPrice()
        props.getPortfolio()

    }, [])




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
        props.getLatestPriceForCPurchase(navigate);
    }

    // handler func to fetch bitcoin price and navigate to sell bitcoin page
    const goToSellBitcoin = (e) => {
        e.preventDefault()

        // make api call to fetch current bitcoin price and nav to sell bitcoin page
        props.getLatestPriceForCSell(navigate);
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
                    <div className="c-upper-card-group">

                        <div className=" c-big-card client-holdings-card">
                            <div className="big-card-headers">
                                <h2>Portfolio Total Value</h2>

                            </div>
                            <div className="big-card-header-values">
                                <p>$ {props.client.portfolioValue}</p>
                            </div>

                        </div>
                        <div className=" c-big-card client-holdings-card">
                            <div className="big-card-headers">
                                <h2>Purchasing Power</h2>

                            </div>
                            <div className="big-card-header-values">
                                <p>$ {props.client.balance}</p>
                            </div>

                        </div>
                        <div className=" c-big-card client-holdings-card">
                            <div className="big-card-headers">
                                <h2>Bitcoin Holdings</h2>

                            </div>
                            <div className="big-card-header-values">
                                <p>BTC {props.client.wallet}</p>
                            </div>

                        </div>
                        <div className="c-big-card bitcoin-price-card">
                            <div className="big-card-headers">
                                <h2>Current Bitcoin Price</h2>
                            </div>
                            <div className="big-card-header-values">
                                <p>$ {props.bitcoin.price}</p>
                            </div>

                        </div>
                    </div>
                    <div className="lower-card-group">
                        <div className="small-card buy-bitcoin-card">
                            <div className="btn-c-buy" onClick={goToBuyBitcoin}></div>
                            <h2>Buy Bitcoin</h2>
                        </div>
                        <div className="small-card sell-bitcoin-card">
                            <div className="btn-c-sell" onClick={goToSellBitcoin}></div>
                            <h2>Sell Bitcoin</h2>
                        </div>
                        <div className="small-card transfer-money-card">
                            <div className="btn-c-transfer" onClick={goToMoneyTransfer}></div>
                            <h2>Transfer Money To Trader</h2>
                        </div>
                        <div className="small-card past-orders-card">
                            <div className="btn-c-orders" onClick={goToPastOrders}></div>
                            <h2>Past Orders</h2>
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
        error: state.clientReducer.error,
        bitcoin: state.bitcoinReducer.bitcoin,
        bitcoin_loading: state.bitcoinReducer.loading,
        bitcoin_error: state.bitcoinReducer.error
    }

}

// maps api calls to props of component
const mapDispatchToProps = {
    getBitcoinWallet,
    getPastOrders,
    getLatestPriceForCPurchase,
    getLatestPriceForCSell,
    getBitcoinHoldings,
    getLatestBitcoinPrice,
    getPortfolio
}


// connect global state to the props of client dashboard.
export default connect(mapStateToProps, mapDispatchToProps)(ClientDashBoard);