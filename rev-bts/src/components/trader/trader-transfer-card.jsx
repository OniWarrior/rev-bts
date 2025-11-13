



const TransferCard = (props) => {

    // format date

    const formattedDate = props.transfer.date.slice(0, 10)
    return (
        <div>
            <div className="trader-transfer-card">
                <h2>Transfer</h2>
                <hr />
                <h3>Transaction id</h3>
                <p>{props.transfer.transac_id}</p>
                <h3>Client id</h3>
                <p>{props.transfer.client_id}</p>
                <h3>Trader id</h3>
                <p>{props.transfer.trader_id}</p>
                <h3>Transfer Amount</h3>
                <p>{props.transfer.amount_paid}</p>
                <h3>Date</h3>
                <p>{formattedDate}</p>
            </div>
        </div>
    )

}


export default TransferCard