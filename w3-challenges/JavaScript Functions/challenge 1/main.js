// JavaScriot Functions - 1

// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

let intToReverse = 34223;
intToReverse = intToReverse.toString()
let intOutput = intToReverse.split(``).reverse().join(``); // have to split string in to array for use with reverse method
intOutput = parseInt(intOutput)
document.write(intOutput);
