// JavaScriot Functions - 29

// 29. Write a JavaScript function to get the function name.


let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString

button.addEventListener(`click`, () => {
  getMyFunctionName()
})

const getMyFunctionName = () => {
  output.innerHTML = `<p>` + getMyFunctionName.name + `</p>`
}
