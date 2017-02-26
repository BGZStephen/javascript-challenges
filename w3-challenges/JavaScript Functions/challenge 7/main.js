// JavaScriot Functions - 7

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let outputString

input.addEventListener(`keyup`, () => {
  string = input.value;
})

// use a simple match function to capture all instances of vowels, these are stored to an array, simply use the length to see how many times vowels occur

button.addEventListener(`click`, () => {
  outputString = string.match(/[`aeiouAEIOU`]/gi);
  output.textContent = outputString.length;
})
