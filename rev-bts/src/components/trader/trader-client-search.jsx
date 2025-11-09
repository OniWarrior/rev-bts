import React from "react";
import { connect } from "react-redux";
import LoggedInNavbar from "../logged-in-navbar";
import { getClient } from "../../state/actions/trader-actions";
import "../../styles/trader/client-search.css";

const ClientSearch = (props) => {

    //handler for handling submission
    const onFormSubmit = (e) => {
        e.preventDefault()

        props.getClient(client)
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
                                    placeholder="Client's first name"
                                />
                            </div>
                            <div className="input-group last-name-group">
                                <h2>Last Name: </h2>
                                <input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    placeholder="Client's last name"
                                />
                            </div>
                            <div className="input-group email-group">
                                <h2>Email: </h2>
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    placeholder="Client's Email"
                                    required
                                />
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