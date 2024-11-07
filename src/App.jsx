import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [dataAmount, setDataAmount] = useState({});
  const [amount, setAmount] = useState(null);
  const [currencyName, setCurrencyName] = useState([]);
  const [newCurrency, setNewCurrency] = useState(null)
  const fetchData = async () => {
    const fetchD = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const dataResponse = await fetchD.json();
    setDataAmount(dataResponse);
    const currencyList = Object.keys(dataResponse.rates);
    setCurrencyName(currencyList);
    setData([...data, dataResponse]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const changeCurrency = (value) => {
    const amountRate = dataAmount.rates[value];
    setAmount(amountRate);
    setNewCurrency(value);
  }
  return (
    <>
      <div>
        <input type='text' />
          <select name="currency"  onChange={(e) => {
            changeCurrency(e.target.value);
          }}>
          {currencyName.map((currency, index) => (
            <option value={currency} key={index} >{currency}</option>
          ))}
          </select>
        <h1> {amount} { newCurrency}</h1>
      </div>
    </>
  )
};

export default App;
