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
        props.fetchTransfers(props.trader.client_id)
        props.fetchTransactions(props.trader.client_id, navigate)


    }

    return (
        <div className="found-client">
            <LoggedInNav />
            <div className="found-client-main">
                <div className="found-client-container">
                    <div className="found-client-header">
                        <h1>Found Client</h1>
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