import React from "react";
import { connect } from "react-redux";
import LoggedInNavbar from "../logged-in-navbar";
import { getClient } from "../../state/actions/trader-actions";

const ClientSearch = (props) => {

    return (
        <div className="client-search-container">
            <LoggedInNavbar />
            <div className="client-search-main">

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