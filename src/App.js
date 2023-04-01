import { useState, useEffect } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
	const [rates, setRates] = useState({})
	const [fromCurrency, setFromCurrency] = useState('USD')
	const [toCurrency, setToCurrency] = useState('EUR')
	const [fromValuePrice, setFromValuePrice] = useState(0)
	const [toValuePrice, setToValuePrice] = useState(0)

	useEffect(() => {
		fetch('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(res => res.json())
		.then(json =>	setRates(json.Valute))
		.catch(error => {
			console.log(error.message)
			alert('Данные о валютах не получены')
		})
	}, [])
		
	const onChangeFromValuePrice = (value) => {
		const price1 = value/(rates[fromCurrency].Value)
		const price2 = price1*(rates[toCurrency].Value)
		setFromValuePrice(value)
		setToValuePrice(price2)
	}

	const onChangeToValuePrice = (value) => {
		const price = ((rates[fromCurrency].Value)/(rates[toCurrency].Value))*value
		setToValuePrice(value)
		setFromValuePrice(price)
	}

  return (
    <div className="App">
      <Block 
				value={fromValuePrice} 
				currency={fromCurrency} 
				onChangeCurrency={setFromCurrency} 
				onChangeValue={onChangeFromValuePrice} />
      <Block 
				value={toValuePrice} 
				currency={toCurrency} 
				onChangeCurrency={setToCurrency} 
				onChangeValue={onChangeToValuePrice} />
    </div>
  );
}

export default App;
