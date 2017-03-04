// JavaScriot Functions - 27

// 27. Write a JavaScript function that returns the longest palindrome in a given string.


let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let longest = ``;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

button.addEventListener(`click`, () => {
  longestPalindrome(string)
})

const longestPalindrome = (string) => {
  for(let i = 0; i < string.length; i++) {
    let subStrTwo = i + 1; // set ending substring reference
    for(let j = 1; j < string.length - i + 1; j++) { // for loop while second substring position fits within the string length
      testSubString = string.substr(i, j) // apply substring
      reversedSubString = testSubString.split(``).reverse().join(``) // split, reverse and joib the string, to check if identical
      if(testSubString == reversedSubString && testSubString.length > longest.length) {
        longest = testSubString
      }
    }
    subStrTwo += 1; // increment substring
  }
  if(longest.length == 0) {
    output.innerHTML = `<p>unfortunately, we couldn't find any Palindrome's in your string</p>`
  } else {
    output.innerHTML = `<p>The longest Palindrome is ${longest}</p>`
  }

}
