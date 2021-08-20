// Create references to HTML in const
// Change the symbols to include the currencies of the big 6
// Access the API data and assign to variables
// this is going to be more complicated than I thought
// because I'm going to have to make calculations
// based on turning textContent values into numbers
// and then multiplying them by my data values.
// also, all your conversions are going to be relative to EUR
// so you're going to have to write a calculation
// that makes a new base, converting euro into TWD
// and apply that to your input values
// it looks like I can set the equalities I need
// based on the DOM variables I've created
// when I use the developer console
// so hopefully the script can automatically access the same variables
// I am going to experiment with creating variables for each of my currency rates
// this way I can practice the calculations with making any API calls
// I can also write about it and talk about it in interviews

const foreignTax = document.getElementById('exchange-tax');
const foreignIncome = document.getElementById('exchange-income');

const yourTax = document.getElementById('your-tax');
const yourIncome = document.getElementById('your-income');

//make a variable to reference selector
const select = document.getElementById('select-currency');

let taxToNumber;
let incomeToNumber;
let correctedTax;
let correctedIncome;
var currencyData;

//initialize variables for tax amounts by currency
let cadTax;
let usdTax;
let audTax;
let gbpTax;
let eurTax;
let nzdTax;

//initialize variables for income amounts by currency
let cadIncome;
let usdIncome;
let audIncome;
let gbpIncome;
let eurIncome;
let nzdIncome;
/*let AUD = 1.54;
let CAD = 1.49;
let USD = 1.19;
let EUR = 1.00;
let GBP = 0.85;
let NZD = 1.66;
let NTD = 0.0297074266 //compared to EUR base*/




let changeCurrency = function() {
	if (input.value === '') {
		alert('You need to enter a salary first before you can use the currency converter.')
		return
	}

	/*if (!(Number(input.value) >= 0)) {
		alert('You need to enter a salary first before you can use the currency converter.')
		input.value = '';
		return
	}*/

	// I need this function to 
	// change the foreignTax and foreignIncome text contents
	// whenever the tax calculator gets updated. 
	// this function needs to be separate from the API call.
	// so I need to add an event listener eventually?


	//initialize the tax variables
	//use .slice to remove the $ from the totalTax as foreignTax is created
	//the new problem is that in my console.log foreignTax.textContent
	//is already NaN
	correctedTax = netTax * 1/currencyData.rates.TWD; //this is EUR
	console.log(`Your tax converted from TWD to EUR is ${correctedTax}`);
	console.log('the net income is ' + netIncome);

	//initialize the income variables
	correctedIncome = netIncome * 1/currencyData.rates.TWD; //this is EUR
	console.log(`Your income coverted from TWD to EUR is ${correctedIncome}`);

	const choice = select.value
	//now I need to make that switch
	//and the selector
	switch (choice) {
		case('CAD'):
			//convert the taxes
			cadTax = correctedTax * currencyData.rates.CAD;
			foreignTax.textContent = `$${Math.floor(cadTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Canadian dollars'
			//convert the income
			cadIncome = correctedIncome *currencyData.rates.CAD;
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
			usdTax = correctedTax * currencyData.rates.USD;
			foreignTax.textContent = `$${Math.floor(usdTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'American dollars'
			//convert the income
			usdIncome = correctedIncome * currencyData.rates.USD;
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
			audTax = correctedTax * currencyData.rates.AUD;
			foreignTax.textContent = `$${Math.floor(audTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Australian dollars'
			//convert the income
			audIncome = correctedIncome * currencyData.rates.AUD;
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
			gbpTax = correctedTax * currencyData.rates.GBP;
			foreignTax.textContent = `\u00a3${Math.floor(gbpTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'British pounds'
			//convert the income
			gbpIncome = correctedIncome * currencyData.rates.GBP;
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
			eurTax = correctedTax * currencyData.rates.EUR;
			foreignTax.textContent = `\u20ac${Math.floor(eurTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'Euros'
			//convert the income
			eurIncome = correctedIncome * currencyData.rates.EUR;
			foreignIncome.textContent = `\u20ac${Math.floor(eurIncome).toLocaleString('en-US')}`;
			yourIncome.textContent = 'Euros'
			//set the classes
			foreignTax.className = 'tax-data'
			foreignIncome.className = 'income-data'
			currencyFlag.setAttribute('src', 'images/flagIreland.png');
			currencyFlag.setAttribute('alt', 'An image of the Irish flag.');
			//change the text content of the Selected Currency
			selectedExchange.textContent = Euro +'s';;
			break;
		case('NZD'):
			//convert the taxes
			nzdTax = correctedTax * currencyData.rates.NZD;
			foreignTax.textContent = `$${Math.floor(nzdTax).toLocaleString('en-US')}`;
			yourTax.textContent = 'New Zealand dollars'
			//convert the income
			nzdIncome = correctedIncome * currencyData.rates.NZD;
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
	}
}



// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.exchangerate.host/latest', true)
// Make .onload and access function?
request.onload = function() {
	//parse resonse
	currencyData = JSON.parse(this.response)
	//test with console log
	
	console.log(currencyData.rates)
	
}

// Send request
request.send()

//I think I can make the currency auto change based on the selector choice
//I would need to give my selector and ID and change the click to change.
//but let's get it working with click for now.
select.addEventListener('change', changeCurrency);