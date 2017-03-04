// JavaScriot Functions - 25

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"


let inputOne = document.getElementById(`input-one`)
let inputTwo = document.getElementById(`input-two`)
let button = document.getElementById(`submitter`)
let output = document.getElementById(`output-area`)
let outputString
let string;
let countryList = ["Australia", "Germany", "United States of America"]

button.addEventListener(`click`, () => {
  longestCountry(countryList)
})

const longestCountry = (array) => {
  if(array.length != null) {
    let currentLongest = array[0]
    for(let i= 0; i < array.length; i++) {
      if(array[i].length > currentLongest.length) {
        currentLongest = array[i]
      }
    }
    outputString = `<p>The array entered was: ${array.join(`, `)}, the longest country was ${currentLongest}`
  } else {
    outputString = `<p>The entered list of countries was empty</p>`
  }
  output.innerHTML = outputString
}
