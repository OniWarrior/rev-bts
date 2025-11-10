import { connect } from "react-redux"
import React from "react";
import LoggedInNav from "../logged-in-navbar";
import '../../styles/trader/found-client.css';
import { useNavigate } from "react-router";
import { getLatestPriceForTBuy } from "../../state/actions/bitcoin-actions";
import { getLatestPriceForTSell } from "../../state/actions/bitcoin-actions";
import { fetchTransactions } from "../../state/actions/order-actions";
import { fetchTransfers } from "../../state/actions/transfer-actions";


const FoundClient = (props) => {
    const navigate = useNavigate()


    // get price of bitcoin then nav to trader buy
    const goToBuy = (e) => {
        e.preventDefault()
        props.getLatestPriceForTBuy(navigate, props.trader.client_id)
    }

    // get price of bitcoin then nav to trader sell
    const goToSell = (e) => {
        e.preventDefault()
        props.getLatestPriceForTSell(navigate, props.trader.client_id)
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
        error: state.traderReducer.error
    }

}

const mapDispatchToProps = {
    getLatestPriceForTBuy,
    getLatestPriceForTSell,
    fetchTransactions,
    fetchTransfers
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundClient)