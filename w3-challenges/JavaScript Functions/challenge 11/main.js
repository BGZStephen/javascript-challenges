// JavaScriot Functions - 11

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

let output = document.getElementById(`output-area`)
let outputString = ``;
let myArray = [30,2,10,4,50]

const sortArray = (array) => {
  array.sort(function sortNumbers(a, b) { // sort array which holds numbers, allowing for unordered arrays to work
  return a - b;
  });
  let secondHighest = array.length - 2; // get the array item that sits one before the end, -2 as array is 0 indexed
  outputString = `<p>2nd Lowest number is: ` + array[1] + `</p>`
  outputString += `<p>2nd Highest number is: ` + array[secondHighest] + `</p>`
  output.innerHTML = outputString
}

sortArray(myArray)
