// JavaScriot Functions - 27

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.


let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

button.addEventListener(`click`, () => {
  longestSubstring(string)
})

const longestSubstring = (string) => {
  let longestSub = ``;
  for(let i = 0; i < string.length; i++) { // set the starting substring position
    let subStrTwo = i + 1; // set the end substring position
    for(let j = 1; j < string.length - i + 1; j++) { // for loop while second substring position fits within the string length
      let multiCounter = 0; // multi counter to check multiple occurances of a letter within the string
      testSubString = string.substr(i, j) // apply the substring to the current string
      splitTestString = testSubString.split(``) // split the substring so that we can use each letter within the string to check for multiples
      for(let k = 0; k < testSubString.length; k++) { // run a matching regular expression across all letters within a string
        let regexp = new RegExp(testSubString[k], `g`)
        if(testSubString.match(regexp).length > 1) {
          multiCounter += 1; // if multiple occurances happen, increment the multicounter
          break;
        }
      }
      if(multiCounter == 0 && testSubString.length > longestSub.length) { // check the multicounter at the end of each loop, if it is 0 and the current checked substring is less than the longest substring, update itit.
        longestSub = testSubString
      }
      subStrTwo += 1 // increment second substring position
    }
  }
  output.innerHTML = `<p>` + longestSub + `</p>`
}
// for loop to cycle start of substring
// for loop to cycle end of substring
