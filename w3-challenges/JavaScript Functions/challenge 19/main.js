// JavaScriot Functions - 19

// 19. Write a JavaScript function that returns array elements larger than a number.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let array = [`The`, `Quick`, `Brown`, `Fox`, `Jumps`, `Over`, `The`, `Slow`, `Dog`]
let outputString
let string;


input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  outputString = `<p>The following items in the string have a greater length than ${string}</p>`
  getElementsByLength(string, array)
})

const getElementsByLength = (string, array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i].length > string) {
      outputString += `<p>` + array[i] + `</p>`
    }
  }
  output.innerHTML = outputString
}
