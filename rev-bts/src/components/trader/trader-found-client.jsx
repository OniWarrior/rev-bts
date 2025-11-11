import { connect } from "react-redux"
import React, { useEffect } from "react";
import LoggedInNav from "../logged-in-navbar";
import '../../styles/trader/found-client.css';
import { useNavigate } from "react-router";
import { getLatestBitcoinPrice } from "../../state/actions/bitcoin-actions";
import { fetchTransactions } from "../../state/actions/order-actions";
import { fetchTransfers } from "../../state/actions/transfer-actions";
import { postTraderBuyBitcoinTransaction } from "../../state/actions/trader-actions";


const FoundClient = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.getLatestBitcoinPrice()
    }, [])

    // get price of bitcoin then buy bitcoin
    const goToBuy = (e) => {
        e.preventDefault();

        const formattedRequest = {
            email: props.trader.email,
            Bitcoin_price: props.bitcoin.price
        }

        props.postTraderBuyBitcoinTransaction(formattedRequest, navigate)
    }

    //  nav to trader sell
    const goToSell = (e) => {
        e.preventDefault()
        navigate('/trader-dashboard/client-search/clients/search/t-sell')

    }

    // get transfers and transactions and nav to cancel transfer and/or transacs

    const goToCancel = (e) => {
        e.preventDefault()
        props.fetchTransfers(props.trader.client_id);
        props.fetchTransactions(navigate, props.trader.client_id);


    }

    return (
        <div className="found-client">
            <LoggedInNav />
            <div className="found-client-main">
                <div className="found-client-container">
                    <div className="found-client-header">
                        <h1>Found Client</h1>
                    </div>
                    <div className="upper-card-group">
                        <div className="big-card found-client-info-card">
                            <div className="big-card-headers">
                                <h2>First Name</h2>
                                <h2>Last Name</h2>
                                <h2>Email</h2>
                            </div>
                            <div className="big-card-header-values">
                                <p>{props.trader.first_name}</p>
                                <p>{props.trader.last_name}</p>
                                <p>{props.trader.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lower-card-group">
                        <div className="small-card buy-bitcoin-card">
                            <div className="btn-t-buy" onClick={goToBuy}></div>
                            <h2>Buy Bitcoin</h2>
                        </div>
                        <div className="small-card sell-bitcoin-card">
                            <div className="btn-t-sell" onClick={goToSell}></div>
                            <h2>Sell Bitcoin</h2>
                        </div>
                        <div className="small-card cancel-order-card">
                            <div className="btn-t-cancel-log" onClick={goToCancel}></div>
                            <h2>Cancel Transfer/Transaction</h2>
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
        error: state.traderReducer.error,
        bitcoin: state.bitcoinReducer.bitcoin,
        b_loading: state.bitcoinReducer.loading,
        b_error: state.bitcoinReducer.error
    }

}

const mapDispatchToProps = {
    getLatestBitcoinPrice,
    fetchTransactions,
    fetchTransfers,
    postTraderBuyBitcoinTransaction
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundClient)