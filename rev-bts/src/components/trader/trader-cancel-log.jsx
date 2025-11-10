import { connect } from "react-redux";
import LoggedInNav from "../logged-in-navbar";
import CancelCard from '../trader/trader-cancel-card';
import '../../styles/trader/cancel-log.css'

const CancelLog = (props) => {

    if (!props.trader || props.trader.length === 0) {
        return <div>No Cancelled  Orders Or Transfers</div>
    }

    return (
        <div className="cancelled-container">
            <LoggedInNav />
            <div className="cancelled-list">
                <div className="cancelled-list-header">
                    <h1>Cancelled Orders Or Transfers</h1>
                </div>

                <div className="cancelled-cards-group">
                    {
                        props.trader.map(cancelled => (
                            <CancelCard key={cancelled.log_id} trader={cancelled} />
                        ))
                    }

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

export default connect(mapStateToProps)(CancelLog)