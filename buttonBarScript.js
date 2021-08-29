//make reference to flag button bar
const flagSelector = document.getElementById('flag-bar');
const currencyFlag = document.getElementById('currency-flag');
const selectedExchange = document.getElementById('selected-exchange')

//create variables to hold values which change the currency text
var Canada = 'Canadian dollar'
var America = 'United States dollar'
var Newzealand = 'New Zealand dollar'
var Australia = 'Australian dollar'
var United = 'Great British pound'
var Euro = 'Euro'

let changeCurrencyWithFlagSelector = function(e) {
	if (input.value === '') {
		alert('You need to enter a salary first before you can use the currency converter.')
		input.focus();
		return
	}

	//use net tax to calculate the corrected tax (tax in baseline euros)
	const taxSetToEuro = netTax * 1/currencyData.rates.TWD; 

	//use net income to calculate the corrected income (income in baseline euros)
	const incomeSetToEuro = netIncome * 1/currencyData.rates.TWD;

	const selectedFlag = e.target.getAttribute('id');
	switch (selectedFlag) {
		case('canada-flag'):
			currencySelector.value = "CAD";
			changeCurrencyWithMenuSelector();
			break;
		case('us-flag'):
			currencySelector.value = "USD";
			changeCurrencyWithMenuSelector();
			break;
		case('aus-flag'):
			currencySelector.value = "AUD";
			changeCurrencyWithMenuSelector();
			break;
		case('uk-flag'):
			currencySelector.value = "GBP";
			changeCurrencyWithMenuSelector();
			break;
		case('ire-flag'):
			currencySelector.value = "EUR";
			changeCurrencyWithMenuSelector();
			break;
		case('nz-flag'):
			currencySelector.value = "NZD";
			changeCurrencyWithMenuSelector();
			break;
		default:
			currencySelector.value = "Default";
			foreignTax.textContent = '';
			foreignIncome.textContent = '';
			foreignTax.className = ''
			foreignIncome.className = ''
			currencyFlag.setAttribute('src', '');

	}
}

flagSelector.addEventListener('click', changeCurrencyWithFlagSelector)