/*
 * Author: Stephen Aranda
 * File  : client-buy.jsx 
 * Desc  : Single component file for the client buy component
 *       : Allows the client to make a bitcoin purchase.
 * */

import React from "react";
import { connect } from 'react-redux';
import LoggedInNav from "../logged-in-navbar";
import { postBuyBitcoin } from "../../state/actions/client-actions";
import { useNavigate } from "react-router";
import useFormValidation from '../../hooks/useFormValidation';
import Client_Buy_Form_Schema from "../../form-schemas/client-buy-form-schema";

const ClientBuy = (props) => {

    // local state var for navigation after purchase
    const navigate = useNavigate();

    // initial state object for form
    const initialValues = {
        Bitcoin_price: '',
        Bitcoin_balance: '',
        email: '',
        password: '',
        comm_type: ''
    }

    // initial errors for form values
    const initialErrors = {
        Bitcoin_price: '',
        Bitcoin_balance: '',
        email: '',
        password: '',
        comm_type: ''

    }



}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error
    }
}

const mapDispatchToProps = { postBuyBitcoin }

export default connect(mapStateToProps, mapDispatchToProps)(ClientBuy)