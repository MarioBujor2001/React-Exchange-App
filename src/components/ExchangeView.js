import './ExchangeView.css';
import { Modal, Button } from 'bootstrap';
import React from 'react';
export default function ExchangeView(props) {

    return (<div class="container exchange-view pb-3">
        <div class="row pt-3 pb-2">
            <h2><span class="left">{props.utils.startCurrency}</span> | <span class="right">{props.utils.resCurrency}</span></h2>
        </div>
        {/* //curency start */}
        <div class="row mx-3 my-2">
            <div class="container exchange-currency d-flex flex-row justify-content-between">
                <div class='col-3'>{props.utils.startAmount}</div>
                <div class='col-3'>
                    <span class='mx-2 sign'><i class="fa-solid fa-plus fa-sm" onClick={() => { props.utils.updateStartAmount(props.utils.startAmount + 1); }}></i></span>
                    <span class='sign'><i class="fa-solid fa-minus fa-sm" onClick={() => { if (props.utils.startAmount > 0) props.utils.updateStartAmount(props.utils.startAmount - 1) }}></i></span>
                </div>
            </div>
        </div>
        {/* conversion rate 1 */}
        <div class='row mx-3 pb-2'>
            <div class='container exchange-rate'>
                1 <span>{props.utils.startCurrency}</span> = <span>{props.utils.rateStart}</span><span>{props.utils.resCurrency}</span>
            </div>
        </div>
        {/* //curency end */}
        <div class="row mx-3 my-2">
            <div class="container exchange-currency d-flex flex-row justify-content-between">
                <div class='col-3'>{props.utils.resAmount}</div>
                <div class='col-3'>
                    <span class='mx-2 sign'><i class="fa-solid fa-plus fa-sm" onClick={() => { props.utils.updateResAmount(props.utils.resAmount + 1); }}></i></span>
                    <span class='sign'><i class="fa-solid fa-minus fa-sm" onClick={() => { if (props.utils.resAmount > 0) props.utils.updateResAmount(props.utils.resAmount - 1) }}></i></span>
                </div>
            </div>
        </div>
        {/* conversion rate 2 */}
        <div class='row mx-3'>
            <div class='container exchange-rate'>
                1 <span>{props.utils.resCurrency}</span> = <span>{props.utils.rateRes}</span><span>{props.utils.startCurrency}</span>
            </div>
        </div>
    </div>);
}