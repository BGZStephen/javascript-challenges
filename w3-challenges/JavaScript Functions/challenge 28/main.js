// JavaScriot Functions - 28

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.


let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString

input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  multiplyRandom(string, randomNumber(10))
})

const multiplyRandom = (string, randomNumber) => {
  calculated = string * randomNumber
  output.textContent = calculated
}

const randomNumber = (max) => {
  max = Math.ceil(max)
  let random = Math.floor(Math.random() * (max) + 1)
  return random;
}
