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
    fetchLatestPriceForCPurchase,
    fetchLatestPriceForCSell
} from '../../state/actions/bitcoin-actions'
import { useNavigate } from "react-router";

const ClientNav = (props) => {
    // local state var for navigation
    const navigate = useNavigate();




}

// map the login to props
const mapStateToProps = (state) => {
    return {
        login: state.loginReducer.login
    }
}


// map api calls to props
const mapDispatchTProps = {
    fetchLatestPriceForCPurchase,
    fetchLatestPriceForCSell,
    getBitcoinWallet,
    getPastOrders
}

export default connect(mapStateToProps, mapDispatchTProps)(ClientNav)