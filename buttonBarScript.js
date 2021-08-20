//make reference to flag button bar
const flagBar = document.getElementById('flag-bar');
const canadaFlag = document.getElementById('canada-flag');
const currencyFlag = document.getElementById('currency-flag');
const selectedExchange = document.getElementById('selected-exchange')

//create variables to hold values which change the currency text
var Canada = 'Canadian dollar'
var America = 'United States dollar'
var Newzealand = 'New Zealand dollar'
var Australia = 'Australian dollar'
var United = 'Great British pound'
var Euro = 'Euro'

let flagCurrency = function(e) {
	if (input.value === '') {
		alert('You need to enter a salary first before you can use the currency converter.')
		input.focus();
		return
	}

	/*if (!(Number(input.value) >= 0)) {
		alert('You need to enter a salary first before you can use the currency converter.')
		input.value = '';
		return
	}*/
	//use net tax to calculate the corrected tax (tax in baseline euros)
	correctedTax = netTax * 1/currencyData.rates.TWD; 
	console.log(`Your tax converted from TWD to EUR is ${correctedTax}`);

	//use net income to calculate the corrected income (income in baseline euros)
	correctedIncome = netIncome * 1/currencyData.rates.TWD;
	console.log(`Your income coverted from TWD to EUR is ${correctedIncome}`);

	//wire up the button bar
	//convert the taxes
	if (e.target.getAttribute('id') === 'canada-flag') {//convert to CAD
		cadTax = correctedTax * currencyData.rates.CAD;
		foreignTax.textContent = `$${Math.floor(cadTax).toLocaleString('en-US')}`;
		yourTax.textContent = Canada + 's';
		//convert the income
		cadIncome = correctedIncome *currencyData.rates.CAD;
		foreignIncome.textContent = `$${Math.floor(cadIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = Canada + 's';
		//set the classes
		foreignTax.className = 'tax-data';
		foreignIncome.className = 'income-data';
		select.value = 'CAD';
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = Canada +'s';
	} else if (e.target.getAttribute('id') === 'us-flag') {//convert to USD
		//convert the taxes
		usdTax = correctedTax * currencyData.rates.USD;
		foreignTax.textContent = `$${Math.floor(usdTax).toLocaleString('en-US')}`;
		yourTax.textContent = America +'s';
		//convert the income
		usdIncome = correctedIncome * currencyData.rates.USD;
		foreignIncome.textContent = `$${Math.floor(usdIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = America +'s';
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'USD'
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = America +'s';
	} else if (e.target.getAttribute('id') === 'aus-flag') {//convert to AUD
		audTax = correctedTax * currencyData.rates.AUD;
		foreignTax.textContent = `$${Math.floor(audTax).toLocaleString('en-US')}`;
		yourTax.textContent = Australia +'s';
		//convert the income
		audIncome = correctedIncome * currencyData.rates.AUD;
		foreignIncome.textContent = `$${Math.floor(audIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = Australia +'s';
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'AUD'
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = Australia +'s';
	} else if (e.target.getAttribute('id') === 'uk-flag') {//convert to GBP
		//convert the taxes
		gbpTax = correctedTax * currencyData.rates.GBP;
		foreignTax.textContent = `\u00a3${Math.floor(gbpTax).toLocaleString('en-US')}`;
		yourTax.textContent = United + 's'
		//convert the income
		gbpIncome = correctedIncome * currencyData.rates.GBP;
		foreignIncome.textContent = `\u00a3${Math.floor(gbpIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = United + 's'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'GBP'
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = United + 's';
	} else if (e.target.getAttribute('id') === 'ire-flag') {//convert to EUR
		//convert the taxes
		eurTax = correctedTax * currencyData.rates.EUR;
		foreignTax.textContent = `\u20ac${Math.floor(eurTax).toLocaleString('en-US')}`;
		yourTax.textContent = Euro +'s';
		//convert the income
		eurIncome = correctedIncome * currencyData.rates.EUR;
		foreignIncome.textContent = `\u20ac${Math.floor(eurIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = Euro +'s';
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'EUR'
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = Euro +'s';;
	} else if (e.target.getAttribute('id') === 'nz-flag') {//convert to NZD
		//convert the taxes
		nzdTax = correctedTax * currencyData.rates.NZD;
		foreignTax.textContent = `$${Math.floor(nzdTax).toLocaleString('en-US')}`;
		yourTax.textContent = Newzealand + 's';
		//convert the income
		nzdIncome = correctedIncome * currencyData.rates.NZD;
		foreignIncome.textContent = `$${Math.floor(nzdIncome).toLocaleString('en-US')}`;
		yourIncome.textContent = Newzealand + 's';
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		//change the currency flag src and alt text
		select.value = 'NZD'
		//change the currency flag src and alt text
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
		currencyFlag.setAttribute('alt', e.target.getAttribute('alt'));
		//change the text content of the Selected Currency
		selectedExchange.textContent = Newzealand + 's';
	} else {
		yourIncome.textContent = ''
		yourTax.textContent = ''
		foreignIncome.textContent = ''
		foreignTax.textContent = ''
		select.value = ''
		currencyFlag.setAttribute('src', '');
		currencyFlag.setAttribute('alt', '');
		//change the currency flag src and alt text
		//change the text content of the Selected Currency
		selectedExchange.textContent = '';
	}
}

flagBar.addEventListener('click', flagCurrency)