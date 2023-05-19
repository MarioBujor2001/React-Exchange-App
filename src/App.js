import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CurrencySelector from './components/CurrencySelector';
import ExchangeHistory from './components/EchangeHistory';
import ExchangeView from './components/ExchangeView';
function App() {
  return (
    <div className="App container">
      <CurrencySelector />
      <ExchangeView />
      <ExchangeHistory />
      <button class='btn btn-danger rounded-pill mt-4'>BUY</button>
    </div>
  );
}

export default App;
