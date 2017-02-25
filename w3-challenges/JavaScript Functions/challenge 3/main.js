// JavaScriot Functions - 3

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let stringIterations = [];

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// use slice1 to index the starting point of the slice
// use slice2 to index the ending point of the slice
// the slice slice2 index needs to start 1 higher than the slice1 index
// the slice1 index will stay fixed until the slice2 index has reached the maximum length of the string
// once this occurs, the outer for loop will itterate slice1 ++ and start the process again.

button.addEventListener(`click`, () => {
  console.log(`working`)
  for(let slice1 = 0; slice1 < string.length; slice1++){
    for(let slice2 = slice1 + 1; slice2 < string.length + 1; slice2++)
    stringIterations.push(string.slice([slice1],[slice2]))
  }
  output.textContent = stringIterations
})
