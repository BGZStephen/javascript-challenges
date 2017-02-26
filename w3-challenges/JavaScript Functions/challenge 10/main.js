// JavaScriot Functions - 10

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

let output = document.getElementById(`output-area`)
let outputString = ``;
let n = 20;

const indexMatrix = (n) => {
  // for loop to start rows
  // for loop for columns within rows
  // if the column index j equals the row index i, a 1 should be printed insteasd of a 0.

  for(let i = 0; i <= n; i++) {
    outputString += `<p>`
    for(let j = 0; j <= n; j++) {
      if(i == j) {
        outputString += `1`
      } else {
        outputString += `0`
      }
    }
    outputString += `</p>`
  }
  output.innerHTML = outputString;
}
indexMatrix(n)
