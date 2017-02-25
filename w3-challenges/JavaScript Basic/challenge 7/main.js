// Challenge 7

// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

let dayArray = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
let minDate = 2014;
let maxDate = 2050;
let htmlOutput = `<p>The following years first days are Sunday</p>`

for(minDate; minDate <= maxDate; minDate ++) {
  minDate = minDate.toString(); // set to string to allow for use in new Date function
  let dateToCheck = new Date(minDate)
  let dayToCheck = dateToCheck.getDay();
  let yearOutput = dateToCheck.getFullYear();
  dayToCheck = dayArray[dayToCheck]
  console.log(dayToCheck)
  if(dayToCheck == `Sunday`) {
    htmlOutput += `<p>` + yearOutput + `</p>`;
    console.log(`working`)
  }
  minDate = parseInt(minDate); // set back to integer for loop to be able to increase
}

document.write(htmlOutput)
