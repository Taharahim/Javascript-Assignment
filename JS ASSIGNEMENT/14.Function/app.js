// 1.Write a function that displays current date & time in your
// browser.

function currentday() {
  let date = new Date();
  document.getElementById("date").textContent = date;
}
setInterval(currentday, 1000);

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetings(name1, name2) {
  let fullname = name1.concat(" " + name2).toUpperCase();
  alert(`Welcome ${fullname} to my web page`);
}
let firstname = String(prompt("Enter Your First Name"));
let lastname = String(prompt("Enter Your Last Name"));

greetings(firstname, lastname);

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function addition(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return;
  }
  let result = num1 + num2;
  alert(`The Sum of ${num1} and ${num2} is ${result} `);
  return result;
}

let number1 = Number(prompt("Enter num for additions"));
let number2 = Number(prompt("Enter num2 for additions"));

addition(number1, number2);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
  let result = 0;
  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter the sum in numbers");
    return;
  }

  if (operator === "/") {
    if (num2 === 0) {
      alert("Zero cannot be divide");
      return;
    }
    result = num1 / num2;
  } else if (operator.toLowerCase() === "x" || operator === "*") {
    result = num1 * num2;
  } else if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "%") {
    result = num1 % num2;
  } else {
    alert("Enter a Correct Operator ");
  }

  document.getElementById("calculation").innerHTML =
    `<p>The Sum of ${num1} ${operator} ${num2} = ${result}</p>`;
}

let sum1 = Number(prompt("Enter the Number for calculaton"));
let sum2 = Number(prompt("Enter the Number2 for calculaton"));
let operations = String(prompt("Enter a Opertor (+,-,*,/,%) for calculaton"));

calculator(sum1, sum2, operations);

// 5. Write a function that squares its argument.

let num = Number(prompt("Enter a number to find it's square"));
square(num);

function square(num) {
  let result = num * num;
  document.getElementById("square").textContent = result;
}

// 6. Write a function that computes factorial of a number.

let factor = Number(prompt("Enter a number to take factor"));
factorial(factor);
function factorial(num) {
  let number = num;
  if (isNaN(number)) {
    alert("Enter the sum in numbers");
    return;
  }
  if (number >= 15) {
    alert("Enter a number between 1 to 14");
    return;
  }
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }

  document.getElementById("factorial").textContent = result;
}

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function counting() {
  let number1 = Number(prompt("Enter the Start of counting"));
  let number2 = Number(prompt("Enter the End of counting"));
  if (isNaN(number1) || isNaN(number2)) {
    alert("Enter a number");
    return;
  }
  for (let i = number1; i <= number2; i++) {
    let count = (document.getElementById("count").innerHTML += i + `<br>`);
  }
}
counting();

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

let base = Number(prompt("Enter a number "));
let perpendicular = Number(prompt("Enter a number "));

function calculateHypotenuse(num1, num2) {
  function calculateSquare(num) {
    return num * num;
  }
  let hypotenuse = Math.sqrt(calculateSquare(num1) + calculateSquare(num2));
  alert(hypotenuse);
}
calculateHypotenuse(base, perpendicular);

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// // ii. Arguments as variables

function rectangle(width, height) {
  let area = width * height;
  document.getElementById("area").innerHTML =
    `The Area of Rectangle is ${area}`;
}
rectangle(90, 25);
let Width = 50;
let Height = 30;
rectangle(Width, Height);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function palindrome() {
  let text = String(prompt("Enter a palindrome word").toUpperCase().trim());
  let checker = "";
  for (let i = text.length - 1; i >= 0; i--) {
    checker += text[i];
    console.log(checker);
  }
  if (text !== checker) {
    alert("It is not a palindrome word");
  } else {
    alert("It is a palindrome word");
  }
}

palindrome();

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
let sentence1 = String(prompt("Titlecase convert here").toLowerCase());
function titlecase(text) {
  let words = text.split(" ");
  let result = [];
  let converter = "";
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    converter = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(converter);
  }
  alert(result.join(" "));
}

titlecase(sentence1);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longest(output) {
  let words = output.split(" ");
  let letter = "";
  let word = "";
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    if (word.length > letter.length) {
      letter = word;
    }
  }
  alert(letter);
}
let sentence2 = String(prompt("Enter a word"));

longest(sentence2);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
let sentence3 = String(
  prompt("Enter a sentence to calculate number of letter in it").toLowerCase(),
);
let alpha = String(
  prompt("Enter the letter to calculate number it").toLowerCase(),
);
word_calculator(sentence3, alpha);

function word_calculator(text, word) {
  let breaker = text.split("");
  let letter = word;
  let count = 0;
  let element = "";
  for (let i = 0; i < breaker.length; i++) {
    element = breaker[i];
    if (element === letter) {
      count++;
    }
  }
  alert(`There are ${count} of ${letter}`);
}

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
let radius = Number(prompt("Enter the radius"));

function calcCircumference(radius) {
  let r = radius;
  let circumference = 2 * Math.PI * r;
  alert(`The circumference is ${circumference}`);
}
function calcArea(radius) {
  let r = radius;
  let area = Math.PI * (radius * radius);
  alert(`The Area of Cricle = ${area}`);
}
calcCircumference(radius);
calcArea(radius);
