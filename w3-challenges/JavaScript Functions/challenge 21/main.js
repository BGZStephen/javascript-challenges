// JavaScriot Functions - 21

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

let inputOne = document.getElementById(`input-one`)
let inputTwo = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let testArray = [1, 2, 3, 4, 5];


inputOne.addEventListener(`keyup`, () => {
  string = parseInt(inputOne.value);
})

button.addEventListener(`click`, () => {
  checkArray(string, testArray)
})

const checkArray = (string, testArray) => {
  testArray = testArray.join(``)
  console.log(testArray)
}


// base number
// start number
// end number
// start number should start at 0
// if start number = base number, start number + 1
// is end number = base number, base number + 1

checkArray(2, testArray)
