// JavaScriot Functions - 16

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let outputString;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

button.addEventListener(`click`, () => {
  let uniqueChars = []
  let occurances;
  let newreg;
  let splitString = string.split(``) // split string to an Array
  for(let i = 0; i < splitString.length; i++) {
    if(uniqueChars.indexOf(splitString[i]) == -1) { // iterate over all characters within the string, if they don't exist within the unique characters array, add them.
      newreg = new RegExp(splitString[i], `g`);
      occurances = string.match(newreg).length;
      uniqueChars.push(splitString[i], occurances);
    }
  }
  for(let j = 0; j < uniqueChars.length; j+= 2) {
    let k = j + 1;
    outputString += `<p>` + uniqueChars[j] + ` - ` + uniqueChars[k] + `</p>`
  }
  console.log(uniqueChars)
  output.innerHTML = outputString;
})
