// JavaScriot Functions - 9

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

const typeOfChecker = (input) => {
  output = typeof input;
  console.log(output)
}

let argumentArray = [1, `string`, function(){},{name: `Stephen`}, true]

typeOfChecker(argumentArray[0])
typeOfChecker(argumentArray[1])
typeOfChecker(argumentArray[2])
typeOfChecker(argumentArray[3])
typeOfChecker(argumentArray[4])
typeOfChecker(argumentArray[5])
