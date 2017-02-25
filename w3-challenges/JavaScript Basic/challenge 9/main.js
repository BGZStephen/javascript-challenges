// Challenge 9

// 9. Write a JavaScript program to calculate days left until next Christmas.

let todaysDate = new Date();
console.log(todaysDate);
let endYearDate = new Date(`2017`, `11`, `25`)
console.log(endYearDate)
let daysLeft = (endYearDate - todaysDate) / (1000 * 60 * 60 * 24)
console.log(daysLeft)

let output = document.getElementById(`text-holder`)

output.textContent = `There are` + Math.floor(daysLeft) + ` Days left until Christmas`
