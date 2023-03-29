import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CurrencyConverter.css';

const API_KEY = '19509183e62749a0ab909f9dd22321e2';
const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

const CurrencyConverter = () => {  
  useEffect(() => {
    axios.get(API_URL)
    .then(response => {
      setRates(response.data.rates);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);
  
  const [rates, setRates] = useState({}); // Objeto vacio
  const [amount, setAmount] = useState(0); // Cantidad de dinero
  const [fromCurrency, setFromCurrency] = useState('USD'); // De moneda
  const [toCurrency, setToCurrency] = useState('EUR'); // A moneda
  const [convertedAmount, setConvertedAmount] = useState(0); // Cantidad convertida
  
  const handleAmountChange = e => {
    setAmount(e.target.value); // Recupera el valor del input
  };

  const handleFromCurrencyChange = e => {
    setFromCurrency(e.target.value); // Recupera el valor del input
  }
  
  const handleToCurrencyChange = e => {
    setToCurrency(e.target.value);
  }
  
  const handleConvertedAmount = () => {
    const rate = rates[toCurrency] / rates[fromCurrency]; // valorAMoneda / valorDeMoneda
    const converted = amount * rate; // cantidad * valor
    setConvertedAmount(converted.toFixed(2)); // deja dos valores dsp de la coma
  }
  
  // Cambia el valor siempre que hay un cambio en amount, fromCurrency, toCurrency
  useEffect(() => {
    handleConvertedAmount()
  }, [amount, fromCurrency, toCurrency]);

  return(
    <section className='currencyConverter-container'>
      <div id='fromCurrency' className='currency-container'>
        <select 
          value={fromCurrency}
          onChange={handleFromCurrencyChange}>
            {
              // Object.keys() retorna arreglo de strings de las keys del objeto
              Object.keys(rates).map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))
            }
        </select>
        <input 
          type='number' name='amount' min='0'
          value={amount}
          onChange={handleAmountChange}>
        </input>
      </div>
      {/* Añadir un btn para intencambiar divisas */}
      <div id='toCurrency' className='currency-container'>
        <select
          value={toCurrency}
          onChange={handleToCurrencyChange}>
          {
            Object.keys(rates).map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          }
        </select>
        <input type='number' readOnly 
          value={isNaN(convertedAmount) ? 0 : convertedAmount}>
        </input> 
      </div>
    </section>
  );    
};

export default CurrencyConverter;