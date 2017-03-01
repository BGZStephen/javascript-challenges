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
  outputString = ''
  let chars = []
  let occurances;
  let newreg;
  let splitString = string.split(``)
  for(let i = 0; i < splitString.length; i++) {
    if(chars.indexOf(splitString[i]) == -1) {
      newreg = new RegExp(splitString[i], `g`); // set new regular to use the value of splitstring[i] which will change over iterations
      occurances = string.match(newreg).length; // match string using defined regular expression and return the length to signify times [i] occurs
      chars.push(splitString[i], occurances); // push items to array, I would have nested an array with both values, but this messes up checking if a character already exists in the array
    }
  }
  for(let j = 0; j < chars.length; j+= 2) { // increment for loop by 2 as the above push puts both values in the same level of the array
    let k = j + 1; // as j is incremented by 2, set k as j+1 to reference the following item in the array, which will always be the occurances variable
    outputString += `<p>` + chars[j] + ` - ` + chars[k] + `</p>`
  }
  output.innerHTML = outputString;
})
