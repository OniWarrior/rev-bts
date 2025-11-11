import React from "react";
import LoggedInNav from "../logged-in-navbar";
import { postTraderSellBitcoinTransaction } from "../../state/actions/trader-actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import '../../styles/trader/sell-form.css';
import Trader_Sell_Form_Schema from '../../form-schemas/trader-sell-form-schema.jsx';
import useFormValidation from "../../hooks/useFormValidation";


const TraderSell = (props) => {
    const navigate = useNavigate();


    // --------------Initial values and errors objs
    const initialValues = {
        Bitcoin_balance: '',
        Bitcoin_price: '',
        email: ''
    }

    const initialErrors = {
        Bitcoin_balance: '',
        Bitcoin_price: '',
        email: ''

    }

    //--------------------------------------------

    const [sell, errors, setSell] = useFormValidation(Trader_Sell_Form_Schema, initialValues, initialErrors);

    //handler to deal with changes in form input
    const onFormChange = (e) => {

        setSell(e, Trader_Sell_Form_Schema);
    }

    // handler to deal with form submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        // format the request body to include bitcoin price
        const formattedRequest = {
            ...sell,
            Bitcoin_price: props.bitcoin.price
        }

        props.postTraderSellBitcoinTransaction(formattedRequest, navigate);
    }

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