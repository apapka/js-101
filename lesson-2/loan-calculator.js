
let rlSync = require('readline-sync');
console.log('What is the loan amount?');
let loanAmount = Number(rlSync.question());

while (!loanAmount || loanAmount <= 0) {
  console.log("Please enter a valid loan amount");
  loanAmount = Number(rlSync.question());
}

console.log('What is the apr?');
let apr = parseInt(rlSync.question());
console.log("apr " + apr);
while (!apr || apr > 100 || apr < 0) {
  console.log("Please enter a valid apr");
  apr = Number(rlSync.question());
}

console.log('What is the loan duration in years?');
let loanDurationInYears = parseInt(rlSync.question());
console.log(loanDurationInYears);
while (!loanDurationInYears || loanDurationInYears < 0) {
  console.log("Please enter a valid number of years");
  loanDurationInYears = Number(rlSync.question());
}

let monthlyInterestRate = (apr / 100) / 12;
let loanDurationInMonths = loanDurationInYears * 12;
let monthlyPayment = loanAmount * (monthlyInterestRate / (
  1 - Math.pow(( 1 + monthlyInterestRate), (-loanDurationInMonths))));

monthlyPayment = monthlyPayment.toFixed(2);
console.log("The monthly payment is $" + monthlyPayment);