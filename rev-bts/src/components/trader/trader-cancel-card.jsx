import React from "react";

import '../../styles/trader/cancel-card.css';



const CancelCard = (props) => {


    // format date
    const formattedDate = props.trader.date.slice(0, 10)
    return (
        <div className="cancel-card">
            <h2>Cancelled Order/Transaction</h2>
            <h3>Log id</h3>
            <p>{props.trader.log_id}</p>
            <h3>Order id</h3>
            <p>{props.trader.order_id}</p>
            <h3>Client id</h3>
            <p>{props.trader.client_id}</p>
            <h3>Trader id</h3>
            <p>{props.trader.trader_id}</p>
            <h3>Transaction id</h3>
            <p>{props.trader.transac_id}</p>
            <h3>Date</h3>
            <p>{formattedDate}</p>
            <h3>Commission Paid</h3>
            <p>{props.trader.comm_paid}</p>
            <h3>Commission Type</h3>
            <p>{props.trader.comm_type}</p>
            <h3>Bitcoin Amount</h3>
            <p>{props.trader.Bitcoin_balance}</p>
            <h3>Transfer Amount</h3>
            <p>{props.trader.amount_paid}</p>
        </div>
    )

}


export default CancelCard