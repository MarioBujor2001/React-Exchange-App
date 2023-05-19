import './ExchangeHistory.css';
export default function ExchangeHistory(props) {
    return (
        <div class='container mt-3 scrollable'>
            {/* history item */}
            {
                props.utils.history.map((e) => {
                    return (
                        <div class='row'>
                            <div class='col-6 history-item-left'>
                                <h3>{e.resCurrency}</h3>
                                <p>-{e.startAmount}{e.startCurrency} = -{e.resAmount}{e.resCurrency}</p>
                            </div>
                            <div class='col-6 history-item-right'>
                                <h3>{e.resAmount}</h3>
                                <p>-{e.startAmount}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}