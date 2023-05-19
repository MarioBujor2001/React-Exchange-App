import './CurrencySelector.css';
import reload from './img/reload.png';
export default function CurrencySelector() {
    return (<header class="my-4 mt-5">
        <h1>Currency Exchange</h1>
        <div class="container text-center my-4">
            <div class="row justify-content-evenly">
                <div class="col-3 d-flex align-items-center flex-fill">
                    {/* <button class="btn btn-light btn-lg">BTC</button> */}
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">USD</option>
                        <option value="2">EUR</option>
                        <option value="3">RON</option>
                    </select>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-center">
                    <button class="btn btn-primary rounded-circle px-1">
                        {/* <img src={reload}></img> */}
                        <i class="fa-solid fa-arrows-rotate fa-2xl"></i>
                    </button>
                </div>
                <div class="col-3 d-flex align-items-center flex-fill">
                    {/* <button class="btn btn-light btn-lg">USD</button> */}
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">USD</option>
                        <option value="2">EUR</option>
                        <option value="3">RON</option>
                    </select>
                </div>
            </div>
        </div>
    </header>);
}