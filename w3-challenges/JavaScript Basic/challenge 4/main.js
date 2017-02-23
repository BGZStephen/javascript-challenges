// Challenge 4

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let a = 5;
let b = 6;
let c = 7;

let s = ((a + b + c) / 2); // semiperimeter value

let a1 = (s - a)
let b1 = (s - b)
let c1 = (s - c)

// use herons equation to calculate triangle based on knowledge of 3 sides

let triangleArea = Math.sqrt((s * (a1 * b1 * c1))) + `cm2`

document.write(triangleArea);
