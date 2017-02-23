// Challenge 5

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let string = `w3resource`;

for(let i = 0; i < 10; i++) {
  setTimeout(function() {
    let lastLetter = string.substr(string.length - 1);
    string = string.slice(0, -1);
    string = lastLetter + string;
    console.log(string);
  }, 3000)
}

for(var start = 1; start < 10; start++) {
  setTimeout(function () {
    alert('hello');
  }, 3000);
}
