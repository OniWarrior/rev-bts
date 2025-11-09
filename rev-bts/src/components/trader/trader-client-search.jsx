import React from "react";
import { connect } from "react-redux";
import LoggedInNavbar from "../logged-in-navbar";
import { getClient } from "../../state/actions/trader-actions";
import "../../styles/trader/client-search.css";
import { useNavigate } from "react-router";
import Client_Search_Form_Schema from "../../form-schemas/client-search-form-schema";
import useFormValidation from '../../hooks/useFormValidation';

const ClientSearch = (props) => {

    // state var for navigation
    const navigate = useNavigate();

    // initial local state values
    const initialValues = {
        first_name: '',
        last_name: '',
        email: ''
    }

    // initial values for errors
    const initialErrors = {
        first_name: '',
        last_name: '',
        email: ''
    }

    const [client, errors, setClient] = useFormValidation(Client_Search_Form_Schema, initialValues, initialErrors);

    //handler function to handle change in input
    const onInputChange = (e) => {
        setClient(e, Client_Search_Form_Schema);
    }

    //handler for handling submission
    const onFormSubmit = (e) => {
        e.preventDefault();

        props.getClient(client, navigate);
    }

    return (
        <div className="client-search">
            <LoggedInNavbar />
            <div className="client-search-main">
                <div className="client-search-container">
                    <div className="client-search-header">
                        <h1>Client Search Form</h1>
                    </div>
                    <form className="client-search-form" onSubmit={onFormSubmit}>
                        <div className="client-search-input-group">
                            <div className="input-group first-name-group">
                                <h2>First Name: </h2>
                                <input
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    placeholder="Client's first name (optional)"
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="input-group last-name-group">
                                <h2>Last Name: </h2>
                                <input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    placeholder="Client's last name (optional)"
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="input-group email-group">
                                <h2>Email: </h2>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="Client's Email (Required)"
                                    onChange={onInputChange}
                                    required
                                />
                                <div className="error">
                                    <p>{errors.email}</p>
                                </div>
                            </div>
                            <button className="btn-c-search" type="submit">Find Client</button>
                        </div>

                    </form>
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
    getClient
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientSearch)