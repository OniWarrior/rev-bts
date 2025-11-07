import React from "react";

import '../../styles/client/client-purchase.css'



const PastOrderCard = (props) => {


    // format date
    const formattedDate = props.client.date.slice(0, 10)
    return (
        <div className="big-card">
            <div className="big-card-headers">
                <h2>Order id</h2>
                <h2>Date</h2>
                <h2>Comm Paid</h2>
                <h2>Comm Type</h2>
                <h2>BTC Buy</h2>
            </div>

            <div className="big-card-header-values">
                <p>{props.client.order_id}</p>
                <p>{formattedDate}</p>
                <p>{props.client.comm_paid}</p>
                <p>{props.client.comm_type}</p>
                <p>{props.client.Bitcoin_balance}</p>
            </div>

        </div>
    )

}


export default PastOrderCard
