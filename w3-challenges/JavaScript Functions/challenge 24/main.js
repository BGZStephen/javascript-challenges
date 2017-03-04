// JavaScriot Functions - 24

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]


let inputOne = document.getElementById(`input-one`)
let inputTwo = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let bubbleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]

button.addEventListener(`click`, () => {
  bubbleSort(bubbleArray)
})

const bubbleSort = (array) => {
  bubbleArray = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
  let j = 0; // j signifies the index for the array
  for(let i = 0; i < (bubbleArray.length * bubbleArray.length); i++) { // cycle through the maximum number of required iterations (array to the power of the array)
    console.log(`cycle`, i)
    console.log(`Array at the begining of cycle `, bubbleArray)
    if(j >= bubbleArray.length -1) {
      j = 0;
    }
    let k = j + 1;
    let bubbleOne = bubbleArray[j]
    let bubbleTwo = bubbleArray[k]
    // console.log(`current positions to check`, bubbleArray[j], bubbleArray[k])
    if(bubbleArray[j] < bubbleArray[k] ) {
      bubbleArray[j] = bubbleTwo;
      bubbleArray[k] = bubbleOne;
    }
    // console.log(`positions after check`, bubbleArray[j], bubbleArray[k])
    j++
    console.log(`Array at the end of cycle `, bubbleArray)
  }
  console.log(`finished bubbleSort`, bubbleArray)
  output.innerHTML = `<p>` + bubbleArray + `</p>`
}
