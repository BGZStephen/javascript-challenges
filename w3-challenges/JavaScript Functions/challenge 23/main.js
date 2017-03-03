// JavaScriot Functions - 23

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

let inputOne = document.getElementById(`input-one`)
let inputTwo = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let stringToCheck = `abacddbec`

button.addEventListener(`click`, () => {
  checkString(string, stringToCheck)
})

const checkString = (string, checker) => {
  splitString = stringToCheck.split(``);
  let regexp;
  for (let i = 0; i < stringToCheck.length; i++) {
    console.log(`working`)
    regexp = new RegExp(splitString[i], `g`)
    console.log(splitString[i])
    if(stringToCheck.match(regexp).length == 1) {
      output.textContent = splitString[i];
      break;
    }
  }
}
