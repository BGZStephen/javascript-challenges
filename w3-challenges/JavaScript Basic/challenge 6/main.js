// Challenge 6

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

let year = prompt(`Enter a year to check`)

let isLeapYear = (year) => {
  let thisYear = new Date(year);
  year = parseInt(year) // turn the user entered string in to an integer to increment
  year ++;
  year = year.toString(); // turn integer back in to string for use in Date function
  nextYear = new Date(year);
  let difference = nextYear - thisYear;
  let daysInTheYear = difference / (1000 * 60 * 60 * 24)
  if (daysInTheYear == `365`) {
    alert(`Not a leap year`)
  } else if (daysInTheYear == `366`) {
    alert(`It's a leap year`)
  }
}

isLeapYear(year);
