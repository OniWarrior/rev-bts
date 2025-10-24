/*
 * Author: Stephen Aranda
 * File  : client-dashboard.jsx 
 * Desc  : This is the component for the client dashboard of a client user
 * 
 * * */

import React from "react";
import { connect } from "react-redux";
import {
    getBitcoinWallet,
    getPastOrders,
    fetchLatestForCBuy,
    fetchLatestForCSell
} from "../../state/actions/client-actions";
import { useNavigate } from "react-router";


const ClientDashBoard = (props) => {

    // local state var for navigation
    const navigate = useNavigate();



}

export default ClientDashBoard;