import './App.css';
import Logo from './components/Logo.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';

function App() {
  return (
    <div className="App">
      <Logo name='León' />
      <main>
        <header>
          <h1>Conversor de divisas</h1>
        </header>
        <CurrencyConverter />
      </main>
    </div>
  );
}

export default App;
