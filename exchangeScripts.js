const foreignTax = document.getElementById('exchange-tax');
const foreignIncome = document.getElementById('exchange-income');

const yourTax = document.getElementById('your-tax');
const yourIncome = document.getElementById('your-income');

//make a variable to reference selector
const currencySelector = document.getElementById('select-currency');


let changeCurrencyWithMenuSelector = function() {
	if (input.value === '') {
		alert('You need to enter a salary first before you can use the currency converter.')
		input.focus();
		return
	}

	
	// convert net tax and net income to euro because that is baseline
	const taxSetToEuro = netTax * 1/currencyData.rates.TWD; //this is EUR
	const incomeSetToEuro = netIncome * 1/currencyData.rates.TWD; //this is EUR

	const selectedCurrency = currencySelector.value
	//now I need to make that switch
	//and the selector
	switch (selectedCurrency) {
		case('CAD'):
			//convert the taxes
			const cadTax = taxSetToEuro * currencyData.rates.CAD;
			foreignTax.textContent = `$${Math.floor(cadTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Canadian dollars'
			//convert the income
			const cadIncome = incomeSetToEuro *currencyData.rates.CAD;
			foreignIncome.textContent = `$${Math.floor(cadIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'Canadian dollars'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagCanada.png');
			currencyFlag.setAttribute('alt', 'An image of the Canadian flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = Canada +'s';
			break;
		case('USD'):
			//convert the taxes
			const usdTax = taxSetToEuro * currencyData.rates.USD;
			foreignTax.textContent = `$${Math.floor(usdTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'American dollars'
			//convert the income
			const usdIncome = incomeSetToEuro * currencyData.rates.USD;
			foreignIncome.textContent = `$${Math.floor(usdIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'American dollars'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagUS.png');
			currencyFlag.setAttribute('alt', 'An image of the American flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = America +'s';
			break;
		case('AUD'):
			//convert the taxes
			const audTax = taxSetToEuro * currencyData.rates.AUD;
			foreignTax.textContent = `$${Math.floor(audTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Australian dollars'
			//convert the income
			const audIncome = incomeSetToEuro * currencyData.rates.AUD;
			foreignIncome.textContent = `$${Math.floor(audIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'Australian dollars'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagAustralia.png');
			currencyFlag.setAttribute('alt', 'An image of the Australian flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = Australia +'s';
			break;
		case('GBP'):
			//convert the taxes
			const gbpTax = taxSetToEuro * currencyData.rates.GBP;
			foreignTax.textContent = `\u00a3${Math.floor(gbpTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'British pounds'
			//convert the income
			const gbpIncome = incomeSetToEuro * currencyData.rates.GBP;
			foreignIncome.textContent = `\u00a3${Math.floor(gbpIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'British pounds'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagUK.png');
			currencyFlag.setAttribute('alt', 'An image of the United Kingdom flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = United + 's';
			break;
		case('EUR'): //Note the european exchange rate is 1.
			//convert the taxes
			const eurTax = taxSetToEuro * currencyData.rates.EUR;
			foreignTax.textContent = `\u20ac${Math.floor(eurTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Euros'
			//convert the income
			const eurIncome = incomeSetToEuro * currencyData.rates.EUR;
			foreignIncome.textContent = `\u20ac${Math.floor(eurIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'Euros'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagIreland.png');
			currencyFlag.setAttribute('alt', 'An image of the Irish flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = Euro +'s';
			break;
		case('NZD'):
			//convert the taxes
			const nzdTax = taxSetToEuro * currencyData.rates.NZD;
			foreignTax.textContent = `$${Math.floor(nzdTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'New Zealand dollars'
			//convert the income
			const nzdIncome = incomeSetToEuro * currencyData.rates.NZD;
			foreignIncome.textContent = `$${Math.floor(nzdIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'New Zealand dollars'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagNZ.png');
			currencyFlag.setAttribute('alt', 'An image of the New Zealand flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = Newzealand + 's';
			break;
		default:
			foreignTax.textContent = '';
			foreignIncome.textContent = '';
			foreignTax.className = ''
			foreignIncome.className = ''
			currencyFlag.setAttribute('src', '');
			selectedExchange.textContent = '';
	}
}





//I think I can make the currency auto change based on the selector choice
//I would need to give my selector and ID and change the click to change.
//but let's get it working with click for now.
currencySelector.addEventListener('change', changeCurrencyWithMenuSelector);