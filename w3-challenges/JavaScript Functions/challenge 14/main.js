// JavaScriot Functions - 14

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

let input = document.getElementById(`text-input`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let string;
let coins = [1, 2, 5, 10, 25, 50, 100]

coins.sort(function(a, b) { // sort the coins array in case the array does not come in highest denomination to lowest
  return b - a;
})

input.addEventListener(`keyup`, () => {
  string = parseInt(input.value);
})

button.addEventListener(`click`, () => {
  let outputString = `<p>Minimum number of coins required: </p><p>`
  let coinsOutput = []
  for (let i = 0; i < coins.length; i++) {
    while(string >= coins[i]) {
      coinsOutput.push(coins[i])
      string = string - coins[i]
    }
  }
  outputString += coinsOutput + `<p>`
  output.innerHTML = outputString;
})
