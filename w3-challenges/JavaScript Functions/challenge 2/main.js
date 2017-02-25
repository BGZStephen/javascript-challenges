// JavaScriot Functions - 2

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let input = document.getElementById(`text-input`);
let button = document.getElementById(`submitter`);
let palindromeToCheck;

input.addEventListener(`keyup`, () => {
  palindromeToCheck = input.value;
  return palindromeToCheck
})

button.addEventListener(`click`, () => {
  let reversedString = palindromeToCheck.split(``).reverse().join(``); // have to split string in to array for use with reverse method
  if(palindromeToCheck == reversedString) {
    alert(`The string you've entered is a palindrome`)
  } else {
    alert(`The string you've entered is not a palindrome`)
  }
})
