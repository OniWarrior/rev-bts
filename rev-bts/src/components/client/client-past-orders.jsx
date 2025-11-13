import { connect } from "react-redux"
import PastOrderCard from "./client-past-order-card"
import LoggedInNav from "../logged-in-navbar"
import '../../styles/client/client-purchase.css'

const ClientPastOrders = (props) => {


    if (!props.client || props.client.length === 0) {
        return (<div>
            <div className="past-orders-container">
                <LoggedInNav />
                <div className="past-orders-list">
                    <div className="past-orders-header">
                        <h1>No past orders</h1>
                    </div>
                </div>
            </div>
        </div>)
    }

    return (
        <div className="past-orders-container">
            <LoggedInNav />
            <div className="past-orders-list">
                <div className="past-orders-header">
                    <h1>Past Orders</h1>
                </div>

                <div className="upper-card-group">
                    {
                        props.client.map(order => (
                            <PastOrderCard key={order.order_id} client={order} />

                        ))
                    }

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


export default connect(mapStateToProps)(ClientPastOrders)