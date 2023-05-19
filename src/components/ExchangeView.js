import './ExchangeView.css';
export default function ExchangeView() {
    return (<div class="container exchange-view pb-3">
        <div class="row pt-3 pb-2">
            <h2><span class="left">USD</span> | <span class="right">BTC</span></h2>
        </div>
        {/* //curency start */}
        <div class="row mx-3 my-2">
            <div class="container exchange-currency d-flex flex-row justify-content-between">
                <div class='col-3'>100</div>
                <div class='col-3'>
                    <span class='mx-2 sign'><i class="fa-solid fa-plus fa-sm"></i></span>
                    <span class='sign'><i class="fa-solid fa-minus fa-sm"></i></span>
                </div>
            </div>
        </div>
        {/* conversion rate 1 */}
        <div class='row mx-3 pb-2'>
            <div class='container exchange-rate'>
                - 1 <span>BTC</span> = <span>1000</span><span>USD</span>
            </div>
        </div>
        {/* //curency end */}
        <div class="row mx-3 my-2">
            <div class="container exchange-currency d-flex flex-row justify-content-between">
                <div class='col-3'>100</div>
                <div class='col-3'>
                    <span class='mx-2 sign'><i class="fa-solid fa-plus fa-sm"></i></span>
                    <span class='sign'><i class="fa-solid fa-minus fa-sm"></i></span>
                </div>
            </div>
        </div>
        {/* conversion rate 2 */}
        <div class='row mx-2'>
            <div class='container exchange-rate'>
                - 1 <span>BTC</span> = <span>1000</span><span>USD</span>
            </div>
        </div>
    </div>);
}