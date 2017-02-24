// Challenge 5

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

let string = `w3resource`;
let textHolder = document.getElementById(`text-holder`)

let wordRotateLoop = () => {
  setTimeout(function() {
    let i = 0;
    textHolder.textContent = string;
    i ++;
    let lastLetter = string.substr(string.length - 1);
    string = string.slice(0, -1);
    string = lastLetter + string;
    if (i < 100) {
      wordRotateLoop();
    }
  }, 1000)
}

wordRotateLoop();
