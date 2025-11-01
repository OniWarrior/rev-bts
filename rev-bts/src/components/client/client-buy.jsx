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
import "../../styles/client/client-buy.css";

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

    const [buy, errors, setBuy] = useFormValidation(Client_Buy_Form_Schema, initialValues, initialErrors);

    // handler func to handle change
    const onChange = (e) => {
        setBuy(e, Client_Buy_Form_Schema);
    }

    // handler func to handle form submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        // make api call to post purchase
        props.postBuyBitcoin(buy, navigate);
    }

    return (
        <div className="c-buy">
            <LoggedInNav />
            <div className="c-buy-main-container">
                <div className="c-buy-container">
                    <div className="c-buy-header">
                        <h1>Buy Bitcoin Form</h1>
                    </div>
                    <div className="upper-card-group">
                        <div className="buy-big-card-form-container">
                            <form className="c-buy-form" onSubmit={onFormSubmit}>
                                <div className="bitcoin-price-group">
                                    <h2>Bitcoin Price</h2>
                                    <p>$ {props.bitcoin.price}</p>
                                </div>
                                <div className="bitcoin-amount-group">
                                    <h2>BTC Amount</h2>
                                    <input
                                        id="Bitcoin_balance"
                                        type="text"
                                        name="Bitcoin_balance"
                                        placeholder="BTC amount to purchase"
                                        required
                                    />
                                </div>
                                <div className="email-group">
                                    <h2>Email</h2>
                                    <input
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        required
                                    />
                                </div>
                                <div className="password-group">
                                    <h2>Password</h2>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        required
                                    />

                                </div>
                                <div className="comm-pay-group">
                                    <h2>Commission Pay type</h2>
                                    <div className="comm-radio-btn-group">
                                        <input
                                            id="comm_type"
                                            name="comm_type"
                                            type="radio"
                                            value="USD"

                                        />
                                        <p>USD</p>
                                        <input
                                            id="comm_type"
                                            name="comm_type"
                                            type="radio"
                                            value="BTC"

                                        />
                                        <p>BTC</p>
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='c-buy-submit'


                                >
                                    Buy BTC
                                </button>
                            </form>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    )



}

const mapStateToProps = (state) => {
    return {
        client: state.clientReducer.client,
        loading: state.clientReducer.loading,
        error: state.clientReducer.error,
        bitcoin: state.bitcoinReducer.bitcoin,
        b_loading: state.bitcoinReducer.loading,
        b_error: state.bitcoinReducer.error
    }
}

const mapDispatchToProps = { postBuyBitcoin }

export default connect(mapStateToProps, mapDispatchToProps)(ClientBuy)