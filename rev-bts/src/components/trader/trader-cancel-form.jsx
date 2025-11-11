import { connect } from "react-redux";
import LoggedInNav from "../logged-in-navbar";
import TraderOrderCard from "./trader-order-card";
import TraderTransferCard from "./TraderTransferCard";

import { cancelTransferOrTransaction } from "../../state/actions/trader-actions";
import { useNavigate } from "react-router";
import '../../styles/trader/cancel-form.css';

const CancelForm = (props) => {
    const navigate = useNavigate();


    const onCancelButton = (e, orderORTransfer) => {
        e.preventDefault()
        props.cancelTransferOrTransaction(orderORTransfer, navigate);
    }

}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        loading: state.traderReducer.loading,
        error: state.traderReducer.error,
        orders: state.ordersReducer.orders,
        o_loading: state.orderReducer.loading,
        o_error: state.orderReducer.error,
        transfers: state.transferReducer.transfers,
        tr_loading: state.transferReducer.loading,
        tr_error: state.transferReducer.error
    }
}
const mapDispatchToProps = { cancelTransferOrTransaction }

export default connect(mapStateToProps, mapDispatchToProps)(CancelOrderOrTransfer)