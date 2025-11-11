import React from "react";
import '../../sStyles/trader/order-card.css';




const TraderOrderCard = (props) => {

    // format date
    const formattedDate = props.transfer.date.slice(0, 10)
    return (
        <div>
            <div className="trader-order-card">
                <div className="order-form-card-container" >
                    <h2>Order</h2>
                    <hr />
                    <h3>Order id</h3>
                    <p>{props.transfer.order_id}</p>
                    <h3>Date</h3>
                    <p>{formattedDate}</p>
                    <h3>Commission Paid</h3>
                    <p>{props.transfer.comm_paid}</p>
                    <h3>Commission Type</h3>
                    <p>{props.transfer.comm_type}</p>
                    <h3>Bitcoin Amount</h3>
                    <p>{props.transfer.Bitcoin_balance}</p>
                </div>

            </div>
        </div>
    )

}

export default TraderOrderCard