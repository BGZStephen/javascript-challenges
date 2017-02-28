// JavaScriot Functions - 15

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

let input1 = document.getElementById(`input-one`)
let input2 = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let option1;
let option2;

input1.addEventListener(`keyup`, () => {
  option1 = parseInt(input1.value);
})

input2.addEventListener(`keyup`, () => {
  option2 = parseInt(input2.value);
})

button.addEventListener(`click`, () => {
  output.textContent = Math.pow(option1, option2)
})
