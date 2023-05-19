import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import CurrencySelector from './components/CurrencySelector';
import ExchangeHistory from './components/ExchangeHistory';
import ExchangeView from './components/ExchangeView';

const APPID = '--';

function App() {

  const [rates, setRates] = useState({});
  const [startCurrency, setStartCurrency] = useState('');
  const [resCurrency, setResCurrency] = useState('');
  const [startAmount, setStartAmount] = useState(0);
  const [resAmount, setResAmount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateRates = () => {
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${APPID}`)
      .then((resp) => resp.json())
      .then((json) => {
        let res = json.rates;
        res.USD = 1;//adding base to rates
        for (let rate in res) {
          res[rate] = roundAt2Decimal(res[rate]);
          console.log(rate, res[rate]);
        }
        setRates(res);
      })
  };

  const roundAt2Decimal = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }

  const updateCurrencies = (start, res) => {
    console.log(start, res);
    setStartCurrency(start);
    setResCurrency(res);
  }

  const convertCurrencies = (amount, startCurrency, resCurrency, targetUpdate) => {
    // Exchange rates relative to the dollar
    const dollarAmount = amount / rates[startCurrency];
    const convertedAmount = roundAt2Decimal(dollarAmount * rates[resCurrency]);
    if (targetUpdate != null) {
      targetUpdate(convertedAmount);
    } else {
      return convertedAmount;
    }
  }

  const updateStartAmount = (start) => {
    convertCurrencies(start, startCurrency, resCurrency, setResAmount);
    setStartAmount(roundAt2Decimal(start));
  }
  const updateResAmount = (res) => {
    convertCurrencies(res, resCurrency, startCurrency, setStartAmount);
    setResAmount(roundAt2Decimal(res));
  }

  const addHistoryItem = (item) => {
    setHistory([...history, item])
  }

  const postMessage = (message) => {
    console.log(message);
    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({
        "name": "USER",
        "email": "user@gmail.com",
        "body": message
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((body) => body.json())
      .then((json) => console.log(json))
  }

  useEffect(() => {
    updateRates();
  }, []);

  return (
    <div className="App container">
      <CurrencySelector utils={
        {
          updateCurrencies,
          updateResAmount,
          updateStartAmount
        }
      } />
      <ExchangeView utils={
        {
          startCurrency,
          resCurrency,
          startAmount,
          resAmount,
          updateResAmount,
          updateStartAmount,
          rateStart: convertCurrencies(1, startCurrency, resCurrency, null),
          rateRes: convertCurrencies(1, resCurrency, startCurrency, null)
        }
      } />
      <ExchangeHistory utils={{ history }} />
      <button class='btn btn-danger rounded-pill mt-4' onClick={() => {
        addHistoryItem({ startCurrency, resCurrency, startAmount, resAmount });
        postMessage(`User just bought ${resAmount}${resCurrency} with ${startAmount}${startCurrency}`);
      }}>BUY</button>
    </div>
  );
}

export default App;
