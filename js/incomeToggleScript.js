//I am going to make a toggle for my tax-income calculator
//I want users to be able to choose 
//between monthly and annual salary
//I will use an event listener on the entire salary toggle box

//the function will use e.target

//if the ID is monthly it will:
//set all the text to monthly
//set the monthly class to active
//set the annual class to inactive
//it will also clear all table values
//or maybe recalculate the table values

//if the ID is annual it will
//set all the text to annual
//set the monthly class to inactive
//set the annual class to active
//it will also clear all table values
//or maybe recalculate the table values

//first I need to create references to the toggle elements
const salaryToggle = document.getElementById('salary-toggle');






//now write a function that will
//toggle between monthly and annual salary inputs
//change the classes of the Monthly and Annual salary tabs
//to indicate which has been chosen
//change the text content of the income brackets
//to represent the brackets in monthly or annual form

// let toggleSalary = function(e) {
// 	if (e.target.getAttribute('id') === 'salary-monthly') {//convert to monthly
// 		if (monthlySalary.className === 'salary-on') {
// 			return
// 		}
// 		//change the classes
// 		monthlySalary.className = 'salary-on';
// 		annualSalary.className = 'salary-off';
// 		//change the table text content
// 		tableFirstBracket.textContent = `$${Math.floor(540000/12).toLocaleString('en-US')}`;
// 		tableSecondBracket.textContent = `$${Math.floor(1210000/12).toLocaleString('en-US')}`;
// 		tableThirdBracket.textContent = `$${Math.floor(2420000/12).toLocaleString('en-US')}`;
// 		tableFourthBracket.textContent = `$${Math.floor(4530000/12).toLocaleString('en-US')}`;
// 		tableFifthBracket.textContent = `$${Math.floor(10310000/12).toLocaleString('en-US')}`;
// 		tableSixthBracket.textContent = `$${Math.floor(10310001/12).toLocaleString('en-US')}`;
// 		//change the variables used in functions
// 		//change firstRange through fifthRange (income range values)
// 		firstIncomeRange = Math.floor(540000/12);//=45,000
// 		secondIncomeRange = Math.floor(670000/12);//=55,833
// 		thirdIncomeRange = Math.floor(1210000/12);//=100,833
// 		fourthIncomeRange = Math.floor(2110000/12);//=175,834
// 		fifthIncomeRange = Math.floor(5780000/12);//=481,666
// 		//the fourth income range rounds down 1 too low.
// 		fourthIncomeRange += 1;
// 		//change the array values.. 
// 		//for some reason they don't change
// 		//when i change each value manually 
// 		for (i = 0; i < incomeRangeArray.length; i++) {
// 			incomeRangeArray[i] = Math.floor(incomeRangeArray[i]/12);
// 		}
// 		incomeRangeArray[3] = incomeRangeArray[3]+1;

// 		//change firstTaxMax through fifthTaxMax (tax range values)
// 		//for some reason they are not tied to the array values
// 		//and need to be modified each time the monthly/annual toggle is run
// 		firstTaxRange = 2250;
// 		secondTaxRange = 6699.96;
// 		thirdTaxRange = 20166.6;
// 		fourthTaxRange = 52750.2;
// 		fifthTaxRange = 192666.4;
// 		//2250
// 		//I want to see if I can get away with not changing the tax variables
// 		for (i = 0; i < maxTaxArray.length; i++) {
// 			maxTaxArray[i] = Math.floor(maxTaxArray[i]/12);
// 		}
// 		maxTaxArray[1] -= 0.04;
// 		maxTaxArray[2] += 0.6;
// 		maxTaxArray[3] += 0.2;
// 		maxTaxArray[4] += 0.4;



// 		console.log('You switch to monthly salary mode');
// 		console.log(maxTaxArray);
// 		input.focus();
// 	} else { //convert to annual
// 		if (monthlySalary.className === 'salary-off') {
// 			return
// 		}
// 		//change the classes
// 		monthlySalary.className = 'salary-off';
// 		annualSalary.className = 'salary-on';
// 		//change the table text content
// 		tableFirstBracket.textContent = `$540,000`;
// 		tableSecondBracket.textContent = `$1,210,000`;
// 		tableThirdBracket.textContent = `$2,420,000`;
// 		tableFourthBracket.textContent = `$4,530,000`;
// 		tableFifthBracket.textContent = `$10,310,000`;
// 		tableSixthBracket.textContent = `$10,310,001`;
// 		//change the variables used in functions
// 		//change firstRange through fifthRange (income range values)
// 		firstIncomeRange = 540000;
// 		secondIncomeRange = 1210000 - firstIncomeRange;
// 		thirdIncomeRange = 2420000 - secondIncomeRange - firstIncomeRange;
// 		fourthIncomeRange = 4530000 - thirdIncomeRange - secondIncomeRange - firstIncomeRange;
// 		fifthIncomeRange = 10310000 - fourthIncomeRange - thirdIncomeRange - secondIncomeRange - firstIncomeRange;
// 		//change firtTaxMax through fifthTaxMax (tax range values)
// 		incomeRangeArray[3] = incomeRangeArray[3]+1;

// 		for (i = 0; i < incomeRangeArray.length; i++) {
// 			incomeRangeArray[i] = Math.floor(incomeRangeArray[i]*12)
// 		}
// 		//fix the array values to correct for Math.floor
// 		incomeRangeArray[1] += 4;
// 		incomeRangeArray[2] += 4;
// 		incomeRangeArray[3] -= 20;
// 		incomeRangeArray[4] += 8;

// 		//correct the Tax Range variables individually
// 		firstTaxRange = 27000;
// 		secondTaxRange = 80400;
// 		thirdTaxRange = 242000;
// 		fourthTaxRange = 633000;
// 		fifthTaxRange = 2312000;

// 		//change the maxTaxArray values
// 		for (i = 0; i < maxTaxArray.length; i++) {
// 			maxTaxArray[i] = Math.floor(maxTaxArray[i]*12)
// 		}

// 		maxTaxArray[1] +=1;
// 		maxTaxArray[2] += 1;
// 		maxTaxArray[3] -= 2;
// 		maxTaxArray[4] += 4;
// 		console.log('You switched to annual salary mode.');
// 		console.log(maxTaxArray);
// 		input.focus();
// 	}
// }




// salaryToggle.addEventListener('click', toggleSalary);