// Challenge 10

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

let inputs = document.getElementsByTagName(`input`)
let multiply = document.getElementById(`multiply`)
let divide = document.getElementById(`divide`)
let outputContainer = document.getElementById(`text-output`)
let input1;
let input2;

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener(`keyup`, () => {
    input1 = document.getElementById(`input-one`).value
    input2 = document.getElementById(`input-two`).value
    input1 = parseInt(input1)
    input2 = parseInt(input2)
  })
}


divide.addEventListener(`click`, () => {
  let outputContainer = document.getElementById(`text-output`)
  let output = input1 / input2;
  outputContainer.textContent = output;
})

multiply.addEventListener(`click`, () => {
  let output = input1 * input2;
  outputContainer.textContent = output;
})
