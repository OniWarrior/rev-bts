import { connect } from "react-redux";
import LoggedInNav from "../logged-in-navbar";

import OrderCard from './trader-order-card'
import TransferCard from "./trader-transfer-card";

import { cancelTransferOrTransaction } from "../../state/actions/trader-actions";
import { useNavigate } from "react-router";
import '../../styles/trader/cancel-form.css';



const CancelForm = (props) => {
    const navigate = useNavigate();


    const onCancelButton = (e, orderORTransfer) => {
        e.preventDefault()
        props.cancelTransferOrTransaction(orderORTransfer, navigate);
    }

    return (
        <div className="order-transfer">
            <LoggedInNav />
            <div className="order-transfer-main">
                <div className="order-transfer-header">
                    <h1>Cancel Orders Or Transactions</h1>
                </div>
                <div className="order-transfer-cards-group">
                    {props.orders ? (
                        props.orders.map(order => (
                            <div className="card order-form-card-container" key={order.order_id}>
                                <OrderCard order={order} />
                                <button className="order-submit" onClick={(e) => onCancelButton(e, order)}>
                                    Cancel Transaction
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading transactions...</p>
                    )}

                    {props.transfers ? (
                        props.transfers.map(transfer => (

                            <div className="card transfer-form-card-container" key={transfer.transac_id}>
                                <TransferCard transfer={transfer} />
                                <button className="transfer-submit" onClick={(e) => onCancelButton(e, transfer)}>
                                    Cancel Transfer
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading transfers...</p>
                    )}



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
        orders: state.orderReducer.orders,
        o_loading: state.orderReducer.loading,
        o_error: state.orderReducer.error,
        transfers: state.transferReducer.transfers,
        tr_loading: state.transferReducer.loading,
        tr_error: state.transferReducer.error
    }
}
const mapDispatchToProps = {
    cancelTransferOrTransaction

}

export default connect(mapStateToProps, mapDispatchToProps)(CancelForm)