// Challenge 3

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currentDate = new Date();
let currentDay = currentDate.getDate()
let currentMonth = currentDate.getMonth()
currentMonth = currentMonth += 1; // increment by 1 as getMonth returns 0 indexed values
let currentYear = currentDate.getFullYear()

if (currentDay < 10) {
  currentDay = `0` + currentDay;
}

if (currentMonth < 10) {
  currentMonth = `0` + currentMonth;
}

let dateOutput = `<p>` + currentDay + `-` + currentMonth + `-` + currentYear + `</p>`
document.write(dateOutput);
