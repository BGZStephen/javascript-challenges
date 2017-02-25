// JavaScriot Functions - 6

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let longest;

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// \b gets a character that is a word boundary where it is either preceeded by, or preceeds a whitespace
// \w ensures the following character is a letter, meaning the boundary can only be a starting work
// /g gets all global instancess

button.addEventListener(`click`, () => {
  string = string.split(` `)
  longest = string[0].length
  for(let i = 0; i < string.length; i++) {
    if(longest < string[i].length) {
      console.log(`working`);
      longest = string[i];
    }
  } output.textContent = longest
})
