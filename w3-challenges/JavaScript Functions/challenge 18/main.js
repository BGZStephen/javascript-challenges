// JavaScriot Functions - 18

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let baseArray;
let arr1;
let arr2;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

button.addEventListener(`click`, () => {
  baseArray = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`]
  binarySearch(string, baseArray)
})

const binarySearch = (testString, baseArray) => {
  if(baseArray.indexOf(testString) >=0) { // check existance of the string entered in the entire base array
      while(baseArray.length > 1) { // keeps running the binary search until the array length equals 1, with the item contained within it being that of the searched for string
      console.log(baseArray)
      arr1 = baseArray.splice(Math.ceil(baseArray.length / 2), baseArray.length); // split the base array in to 2 seperate arrays of roughly equal length
      arr2 = baseArray // assign array2 as the remainder of the base array
      if(arr1.indexOf(testString) >= 0) { // check if the test string exists within the 1st array, if so, make the new base array array1
        baseArray = arr1;
      } else {
        baseArray = arr2;
      }
    }
    console.log(baseArray)
    output.textContent = baseArray + ` exists within the array`
  } else (
    output.textContent = `Unfortunately, ${string} does not exist within the array`
  )
}
