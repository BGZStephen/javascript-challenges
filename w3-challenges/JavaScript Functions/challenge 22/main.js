// JavaScriot Functions - 22

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

let inputOne = document.getElementById(`input-one`)
let inputTwo = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let checker;
let occurances;


inputOne.addEventListener(`keyup`, () => {
  string = inputOne.value;
})

inputTwo.addEventListener(`keyup`, () => {
  checker = inputTwo.value;
})

button.addEventListener(`click`, () => {
  checkString(string, checker)
  outputString = `<p>The string contains ${occurances} occurances of ${checker}</p>`
  output.innerHTML = outputString;
})

const checkString = (string, checker) => {
  let checkerRegExp = new RegExp(checker, `g`);
  occurances = string.match(checkerRegExp).length;
}
