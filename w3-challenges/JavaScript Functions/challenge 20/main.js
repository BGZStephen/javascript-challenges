// JavaScriot Functions - 20

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let charList = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
let outputString
let string;


input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  outputString = `<p>Your random string with ${string} characters: `
  generateString(string, charList)
})

const generateString = (string, charList) => {
  let charListArray = charList.split(``) // split char list to array
  for(let i = 0; i <= string; i++) { // for loop to add a random character while below the string entered
    let max = charListArray.length; // set max to allow for inclusive use of math.random
    let index = Math.floor(Math.random() * (max + 1));
    outputString += charListArray[index]
  }
  output.innerHTML = outputString + `</p>`
}
