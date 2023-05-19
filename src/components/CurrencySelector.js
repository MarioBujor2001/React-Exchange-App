import './CurrencySelector.css';
import { useEffect, useState } from 'react';
export default function CurrencySelector(props) {

    const [startCurency, setStartCurency] = useState('USD');
    const [resCurency, setResCurency] = useState('RON');
    const [times, setTimes] = useState(0);

    useEffect(() => {
        if (times > 3) {
            alert("YOU JUST UNLOCKED AN EASTER EGG");
        }
    }, [times])

    const resetFields = () => {
        props.utils.updateStartAmount(0);
        props.utils.updateStartAmount(0);
    }

    useEffect(() => {
        props.utils.updateCurrencies(startCurency, resCurency);
    }, [resCurency, startCurency])

    return (<header className={`my-4 mt-5 ${times > 3 ? "easter-egg" : ""}`}>
        <h1>Currency Exchange</h1>
        <div class="container text-center my-4">
            <div class="row justify-content-evenly">
                <div class="col-3 d-flex align-items-center flex-fill">
                    {/* <button class="btn btn-light btn-lg">BTC</button> */}
                    <select value={startCurency} class="form-select" aria-label="Default select example" onChange={(e) => { setStartCurency(e.target.value); resetFields(); }}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="RON">RON</option>
                    </select>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-center">
                    <button class="btn btn-primary rounded-circle px-1" onClick={() => {
                        let aux = startCurency;
                        setStartCurency(resCurency);
                        setResCurency(aux);
                        resetFields();
                        setTimes(times + 1);
                    }}>
                        {/* <img src={reload}></img> */}
                        <i class="fa-solid fa-arrows-rotate fa-2xl"></i>
                    </button>
                </div>
                <div class="col-3 d-flex align-items-center flex-fill">
                    {/* <button class="btn btn-light btn-lg">USD</button> */}
                    <select value={resCurency} class="form-select" aria-label="Default select example" onChange={(e) => { setResCurency(e.target.value); resetFields(); }}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="RON">RON</option>
                    </select>
                </div>
            </div>
        </div>
    </header>);
}