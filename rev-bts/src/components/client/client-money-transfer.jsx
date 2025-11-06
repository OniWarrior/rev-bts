import React from "react";
import { connect } from 'react-redux';
import LoggedInNav from "../logged-in-navbar";
import { postMoneyTransfer } from "../../state/actions/client-actions";
import { useNavigate } from "react-router";
import useFormValidation from '../../hooks/useFormValidation';
import Client_Transfer_Money_Form_Schema from "../../form-schemas/client-money-transfer-form-schema";
import "../../styles/client/client-purchase.css";

const ClientMoneyTransfer = (props) => {

    // local state var for navigation after purchase
    const navigate = useNavigate();

    // initial state object for form
    const initialValues = {
        amount_paid: ""
    }

    // initial errors for form values
    const initialErrors = {
        amount_paid: ""
    }

    const [transfer, errors, setTransfer] = useFormValidation(Client_Transfer_Money_Form_Schema, initialValues, initialErrors);

    // handler func to handle change
    const change = (e) => {

        setTransfer(e, Client_Transfer_Money_Form_Schema);
    }

    // handler func to handle form submission
    const onFormSubmit = (e) => {
        e.preventDefault();


        // make api call to post purchase
        props.postMoneyTransfer(transfer, navigate);
    }

    return (
        <div className="c-purchase">
            <LoggedInNav />
            <div className="c-purchase-main-container">
                <div className="c-purchase-container">
                    <div className="c-purchase-header">
                        <h1>Money Transfer Form</h1>
                    </div>
                    <div className="upper-card-group">
                        <div className="purchase-big-card-form-container">
                            <form className="c-purchase-form" onSubmit={onFormSubmit}>

                                <div className="transfer-amount-group">
                                    <h2>Money Transfer Amount</h2>
                                    <input
                                        id="amount_paid"
                                        type="text"
                                        name="amount_paid"
                                        placeholder="USD amount to be transferred to trader"
                                        required
                                        onChange={change}
                                    />
                                    <div className="error" >
                                        <p>{errors.amount_paid}</p>
                                    </div>
                                </div>




                                <button
                                    type='submit'
                                    className='c-purchase-submit'
                                >
                                    Transfer USD
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
        error: state.clientReducer.error
    }
}

const mapDispatchToProps = { postMoneyTransfer }

export default connect(mapStateToProps, mapDispatchToProps)(ClientMoneyTransfer)