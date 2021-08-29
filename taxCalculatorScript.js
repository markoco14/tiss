const taxBracketInfo = [
	{
		"annualGrossIncomeMinimum": 0,
		"annualGrossIncomeLimit": 540000,
		"netTaxLimit": 27000,
		"netIncomeLimit": 513000,
		"monthlyGrossIncomeMinimum": 0,
		"monthlyGrossIncomeLimit": 45000,
		"taxRate": 0.05
	},
	{
		"annualGrossIncomeMinimum": 540000, 
		"annualGrossIncomeLimit": 1210000,
		"netTaxLimit": 80400,
		"netIncomeLimit": 589600,
		"monthlyGrossIncomeMinimum": 45000, 
		"monthlyGrossIncomeLimit": 100833,
		"taxRate": 0.12
	},
	{
		"annualGrossIncomeMinimum": 1210000,
		"annualGrossIncomeLimit": 2420000,
		"netTaxLimit": 242000,
		"netIncomeLimit": 968000,
		"monthlyGrossIncomeMinimum": 100833,
		"monthlyGrossIncomeLimit": 201666,
		"taxRate": 0.2
	},
	{
		"annualGrossIncomeMinimum": 2420000,
		"annualGrossIncomeLimit": 4530000,
		"netTaxLimit": 633000,
		"netIncomeLimit": 1477000,
		"monthlyGrossIncomeMinimum": 201666,
		"monthlyGrossIncomeLimit": 377500,
		"taxRate": 0.3
	},
	{
		"annualGrossIncomeMinimum": 4530000,
		"annualGrossIncomeLimit": 10310000,
		"netTaxLimit": 2312000,
		"netIncomeLimit": 3468000,
		"monthlyGrossIncomeMinimum": 377500,
		"monthlyGrossIncomeLimit": 859166,
		"taxRate": 0.4
	},
	{
		"annualGrossIncomeMinimum": 10310001,
		"monthlyGrossIncomeMinimum": 859166,
		"taxRate": 0.45
	}
]

const input = document.getElementById('income');
const submit = document.getElementById('submit');

/*
	monthly/annual salary logic
*/

// create trackers for using monthly or annual salary
let monthlySalaryIsActive = false;
const monthlySalary = document.getElementById('salary-monthly');
const annualSalary = document.getElementById('salary-annual');

// create functions to toggle between monthly and annual salaries
let setSalaryToMonthly = function() {
	monthlySalaryIsActive = true;
	console.log(`Monthly salary is active: ${monthlySalaryIsActive}`)
	// set styles for annual salary button
	annualSalary.classList.remove('salary-on');
	annualSalary.classList.add('salary-off');
	// set styles for monthly salary button
	monthlySalary.classList.remove('salary-off');
	monthlySalary.classList.add('salary-on');
	for (i = 0; i < tableIncomeLimitColumn.length; i++) {
		if (taxBracketInfo[i].monthlyGrossIncomeLimit) {
			tableIncomeLimitColumn[i].textContent = `up to $${taxBracketInfo[i].monthlyGrossIncomeLimit.toLocaleString('en-us')}`
		} else {
			tableIncomeLimitColumn[i].textContent = `$${taxBracketInfo[5].monthlyGrossIncomeMinimum.toLocaleString('en-us')}+`
		}
	}
	if (input.value !== '') {
		determineTaxBracketAndCalculate();
	}
}

let setSalaryToAnnual = function() {
	monthlySalaryIsActive = false;
	console.log(`Monthly salary is active: ${monthlySalaryIsActive}`)
	// set styles for annual salary button
	annualSalary.classList.remove('salary-off');
	annualSalary.classList.add('salary-on');
	// set styles for monthly salary button
	monthlySalary.classList.remove('salary-on');
	monthlySalary.classList.add('salary-off');
	for (i = 0; i < tableIncomeLimitColumn.length; i++) {
		if (taxBracketInfo[i].annualGrossIncomeLimit) {
			tableIncomeLimitColumn[i].textContent = `up to $${taxBracketInfo[i].annualGrossIncomeLimit.toLocaleString('en-us')}`
		} else {
			tableIncomeLimitColumn[i].textContent = `$${taxBracketInfo[5].annualGrossIncomeMinimum.toLocaleString('en-us')}+`
		}
	}
	if (input.value !== '') {
		determineTaxBracketAndCalculate();
	}
}

monthlySalary.addEventListener('click', setSalaryToMonthly);
annualSalary.addEventListener('click', setSalaryToAnnual);

/*
	Tax calculator logic
*/

// create monthly or annual income range array
const annualIncomeRangeArray = taxBracketInfo.map((element, i) => {
	if (!(i === 5)) {
		return taxBracketInfo[i].annualGrossIncomeLimit - taxBracketInfo[i].annualGrossIncomeMinimum;
	}
});

const monthlyIncomeRangeArray = taxBracketInfo.map((element, i) => {
	if (!(i === 5)) {
		return taxBracketInfo[i].monthlyGrossIncomeLimit - taxBracketInfo[i].monthlyGrossIncomeMinimum;
	}
});

// make reference to income limit column and fill content
const tableIncomeLimitColumn = document.querySelectorAll('.income-limit');
// set default table income limit column
for (i = 0; i < tableIncomeLimitColumn.length; i++) {
		if (taxBracketInfo[i].annualGrossIncomeLimit) {
			tableIncomeLimitColumn[i].textContent = `up to $${taxBracketInfo[i].annualGrossIncomeLimit.toLocaleString('en-us')}`
		} else {
			tableIncomeLimitColumn[i].textContent = `$${taxBracketInfo[5].annualGrossIncomeMinimum.toLocaleString('en-us')}+`
		}
	}
// make reference to tax rate column and fill content
const tableTaxRateColumn = document.querySelectorAll('.tax-rate');
for (i = 0; i < tableTaxRateColumn.length; i++) {
	tableTaxRateColumn[i].textContent = `${taxBracketInfo[i].taxRate*100}%`
}

// make reference to the net tax column
const tableNetTaxColumn = document.querySelectorAll('.net-tax');

// make reference to the net income column
const tableNetIncomeColumn = document.querySelectorAll('.net-income');


// .map() taxBracketInfo to make tax rate array
const taxRatesArray = taxBracketInfo.map((element, i) => {
	return taxBracketInfo[i].taxRate;
});

//intitalize totalTax and totalIncome variables
const totalTax = document.getElementById('total-tax')
const totalIncome = document.getElementById('total-income')

let grossIncome;
// console.log(grossIncome)
let netIncome;
let netTax;

// I think I can feed the calculateNetTaxAndNetIncome function
// two more variables because I use the income range array (global)

let calculateNetTaxAndNetIncome = function(length, incomeRangeArray) {
	if (length === 1) {
		grossIncome = input.value;
		//find the taxes
		netTax = grossIncome * taxRatesArray[0];
		//find net income
		netIncome = grossIncome - netTax;
		//set table data content
		tableNetTaxColumn[0].textContent = `$${netTax.toLocaleString('en-US')}`;
		tableNetIncomeColumn[0].textContent = `$${netIncome.toLocaleString('en-US')}`;
		/*firstGrossIncome.textContent = `$${grossIncome}`;*/
		//set the net income and taxes content
		totalTax.textContent = `${netTax}`;
		totalIncome.textContent = `${netIncome}`;
		totalTax.className = 'tax-data'
		totalIncome.className = 'income-data'

		// convert net tax and net income to local strings
		let taxNumber = Number(totalTax.textContent).toLocaleString('en-US');
		let incomeNumber = Number(totalIncome.textContent).toLocaleString('en-US');
		//console.log(`Your net taxes are $${taxNumber}`)
		totalTax.textContent =  `$${taxNumber}`;
		totalIncome.textContent =  `$${incomeNumber}`;
	} 

	else {
		let arrayLength = length;
		grossIncome = input.value;
		// console.log(grossIncome)
		netIncome = 0;
		netTax = 0;
		let grossIncomeTracker = 0;
		const grossIncomeArray = Array(arrayLength).fill(null);

		// console.log(grossIncomeArray);

		// calculate gross income
		for (i = 0; i < grossIncomeArray.length-1; i++) {
			grossIncomeArray[i] = incomeRangeArray[i];
		}
		// console.log(grossIncomeArray);

		for (i = 0; i < grossIncomeArray.length-1; i++) {
			grossIncomeTracker += incomeRangeArray[i];
			// console.log(grossIncomeTracker)
		}

		grossIncomeArray[grossIncomeArray.length-1] = grossIncome - grossIncomeTracker;
		// console.log(grossIncomeArray);

		// calculate net income
		const netIncomeArray = Array(arrayLength).fill(null);
		for (i = 0; i < netIncomeArray.length; i++) {
			netIncomeArray[i] = grossIncomeArray[i] * (1 - taxRatesArray[i]);
			tableNetIncomeColumn[i].textContent = '$' + netIncomeArray[i].toLocaleString('en-US');
		}
		// console.log(netIncomeArray)

		// calculate net taxes
		const netTaxArray = Array(arrayLength).fill(null);
		for (i = 0; i < netTaxArray.length; i++) {
			netTaxArray[i] = grossIncomeArray[i] * taxRatesArray[i];
			tableNetTaxColumn[i].textContent = '$' + netTaxArray[i].toLocaleString('en-US');
		}
		// console.log(netTaxArray)
		
		// calculate total net income
		for (i = 0; i < netIncomeArray.length; i++) {
			netIncome += netIncomeArray[i]
		}


		// calculate total net taxes
		for (i = 0; i < netTaxArray.length; i++) {
			netTax += netTaxArray[i]
		}

		totalTax.textContent = `${netTax}`;
		totalIncome.textContent = `${netIncome}`;
		totalTax.className = 'tax-data'
		totalIncome.className = 'income-data'	

		// convert net tax and net income to local strings
		let taxNumber = Number(totalTax.textContent).toLocaleString('en-US');
		let incomeNumber = Number(totalIncome.textContent).toLocaleString('en-US');
		//console.log(`Your net taxes are $${taxNumber}`)
		totalTax.textContent =  `$${taxNumber}`;
		totalIncome.textContent =  `$${incomeNumber}`;
	}
}

function cleanPreviousInputValue(input) {
	while(input.value.includes(',') || input.value.includes('$')) {
	    input.value = input.value.replace(',','');
	    input.value = input.value.replace('$','');
	}
}

function clearPreviousTableFormatting() {
	for (i = 0; i < 6; i++) {
		tableNetTaxColumn[i].textContent = '';
		tableNetIncomeColumn[i].textContent = '';
	}
}

function formatCurrentInputAsLocaleString() {
	const chosenSalaryNumber = Number(input.value);
	const chosenSalaryLocale = chosenSalaryNumber.toLocaleString('en-us');
	if (input.value === '') {
		input.value = '$0';
	} else {
		input.value = `$${chosenSalaryLocale}`;
	}
}

let determineTaxBracketAndCalculate = function() {

	cleanPreviousInputValue(input);
	
	clearPreviousTableFormatting();

	// if (input.value === '') {
	// 	// alert('You need to enter a number to use the tax calculator.')
	// 	for (i = 0; i < tableNetTaxColumn.length; i++) {
	// 		tableNetTaxColumn[i].textContent = '';
	// 	}
	// 	//reset the table net income data
	// 	for (i = 0; i < tableNetIncomeColumn.length; i++) {
	// 		tableNetIncomeColumn[i].textContent = '';
	// 	}
	// 	input.focus();
	// 	return
	// } 

	// if (!(Number(input.value) >= 0)) {
	// 	alert('You need to enter a number to use the tax calculator.')
	// 	input.value = '';
	// 	input.focus();
	// 	return
	// }


	grossIncome = input.value;
	//here I need to add a conditional
	//if monthlySalary.className = 'salary-on' do the monthly way
	//if monthlySalary.className = 'salary-off' do the annual way
	//I think I also need to add a conditional in each of my functions.
	//One way I could do it:
	//check right away for the monthly class name, and change all my bracket values
	//then let the function carry out as normal
	if (monthlySalaryIsActive) {
		if (grossIncome < 45001) {
			let length = 1;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		} else if (grossIncome >= 45001 && grossIncome < 100834) {
			let length = 2;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		} else if (grossIncome >= 100834 && grossIncome < 201667) {
			let length = 3;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		} else if (grossIncome >= 201667 && grossIncome < 377501) {
			let length = 4;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		} else if (grossIncome >= 377501 && grossIncome < 859167) {
			let length = 5;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		} else if (grossIncome >= 859167) {
			let length = 6;
			calculateNetTaxAndNetIncome(length, monthlyIncomeRangeArray);
		}
	} else {
		if (grossIncome < 540001) {
			// firstBracket();
			let length = 1;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} else if (grossIncome >= 540001  && grossIncome < 1210001) {
			// secondBracket();
			let length = 2;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} else if (grossIncome >= 1210001 && grossIncome < 2420001) {
			// thirdBracket();
			let length = 3;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} else if (grossIncome >= 2420001 && grossIncome < 4530001){
			// fourthBracket();
			let length = 4;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} else if (grossIncome >= 4530001 && grossIncome < 10310001) {
			// fifthBracket();
			let length = 5;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} else if (grossIncome >= 10310001 ) {
			// sixthBracket();
			let length = 6;
			calculateNetTaxAndNetIncome(length, annualIncomeRangeArray);
		} 

	}

	//color the tax and income cells that have data
	//note that tax and income are in two separate arrays
	//but both arrays are the same length so I can use 1 array to track the [i] value
	//and affect both tax and income data cells
	//I think this means that I probably need to make an array of objects
	//this would let me hold multiple tax and net income and even range values for each bracket
	//note that I am using the length of the tax array
	//to loop through both the tax array and the net income array
	for (i = 0; i < tableNetTaxColumn.length; i++) {
		if (tableNetTaxColumn[i].textContent !== '') {
			tableNetTaxColumn[i].className = 'tax-data'
			tableNetIncomeColumn[i].className = 'income-data'
		} else {
			tableNetTaxColumn[i].className = 'no-tax-data'
			tableNetIncomeColumn[i].className = 'no-income-data'
		}
	}

	// reset the conversion tax and income
	if (currencySelector.value === 'Default') {
		foreignTax.textContent = '';
		foreignIncome.textContent = '';
		foreignTax.className = '';
		foreignIncome.className = '';
		// the lines below reset the currency converter
		currencySelector.value = '';
		yourIncome.textContent = '';
		yourTax.textContent = '';
	} else {
		changeCurrencyWithMenuSelector();
	}
	

	formatCurrentInputAsLocaleString();
}	

input.addEventListener('keyup', determineTaxBracketAndCalculate);
// input.addEventListener('keyup', formatInputValue);
submit.addEventListener('click', determineTaxBracketAndCalculate);
// input.addEventListener('keyup', formatInputValue);

// setSalaryToAnnual();


