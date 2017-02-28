// JavaScriot Functions - 16

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

button.addEventListener(`click`, () => {
  let uniqueChars = []
  let splitString = string.split(``) // split string to an Array
  for(let i = 0; i < splitString.length; i++) {
    if(uniqueChars.indexOf(splitString[i]) == -1) { // iterate over all characters within the string, if they don't exist within the unique characters array, add them.
      uniqueChars.push(splitString[i])
    }
  }
  uniqueChars = uniqueChars.join(``) // convert array to string by joining together with no defined seperator
  output.textContent = uniqueChars;
})
