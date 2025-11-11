import React from "react";
import LoggedInNav from "../logged-in-navbar";
import { postTraderSellBitcoinTransaction } from "../../state/actions/trader-actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import '../../styles/trader/sell-form.css';
import Trader_Sell_Form_Schema from '../../form-schemas/trader-sell-form-schema.jsx';
import useFormValidation from "../../hooks/useFormValidation";


const TraderSell = (props) => {

}

const mapStateToProps = (state) => {
    return {
        trader: state.traderReducer.trader,
        t_loading: state.traderReducer.loading,
        t_error: state.traderReducer.error,
        bitcoin: state.bitcoinReducer.bitcoin,
        b_loading: state.bitcoinReducer.loading,
        b_error: state.bitcoinReducer.error
    }
}

const mapDispatchToProps = { postTraderSellBitcoinTransaction }

export default connect(mapStateToProps, mapDispatchToProps)(TraderSell);