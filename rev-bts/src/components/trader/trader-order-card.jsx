





const OrderCard = (props) => {

    // format date
    const formattedDate = props.order.date.slice(0, 10)
    return (
        <div>
            <div className="trader-order-card">
                <div className="order-form-card-container" >
                    <h2>Order</h2>
                    <hr />
                    <h3>Order id</h3>
                    <p>{props.order.order_id}</p>
                    <h3>Date</h3>
                    <p>{formattedDate}</p>
                    <h3>Commission Paid</h3>
                    <p>{props.order.comm_paid}</p>
                    <h3>Commission Type</h3>
                    <p>{props.order.comm_type}</p>
                    <h3>Bitcoin Amount</h3>
                    <p>{props.order.Bitcoin_balance}</p>
                </div>

            </div>
        </div>
    )

}

export default OrderCard