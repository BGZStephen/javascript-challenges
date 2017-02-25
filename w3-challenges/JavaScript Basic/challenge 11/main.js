// Challenge 11

// 11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

let input1 = document.getElementById(`input-one`)
let input2 = document.getElementById(`input-two`)

input1.addEventListener(`keyup`, () => {
  input2.value = ((input1.value / 5) * 9) + 32;
})

input2.addEventListener(`keyup`, () => {
  input1.value = ((input2.value - 32) / 9) * 5
})
