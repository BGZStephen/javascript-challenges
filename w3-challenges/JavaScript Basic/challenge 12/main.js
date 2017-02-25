// Challenge 12

// 12. Write a JavaScript program to get the website URL (loading page).

let output = document.getElementById(`text-output`)
let currentLink = window.location.href;

output.textContent = currentLink;
