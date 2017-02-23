// Challenge 1

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

  let dayArray = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]

  let currentDate = new Date(); // set date string
  let currentDay = currentDate.getDay();
  currentDay -= 1; // reduce day by 1 to allow for matching with array
  currentDay = dayArray[currentDay];

  let currentTime = currentDate.toTimeString(); // parse currentDate to a time string
  currentTime = currentTime.substring(0, 8); // strip unnecasary bits from the end of the string
  currentTime = currentTime.split(`:`); // split by the : to form array for use in calling hours, minutes and seconds

  let hours = currentTime[0] //
  if (hours < 12) {
    hours = hours + ` AM`;
  } else {
    hours = hours -= 12;
    hours = hours + ` PM`;
  };

  let minutes = currentTime[1];
  let seconds = currentTime[2];
  let timeOutput = `<p>Today is : ` + currentDay + `</p>`;
  timeOutput += `<p>Current time is : ` + hours + ` : ` + minutes + ` : ` + seconds + `</p>`;
  document.write(timeOutput);
