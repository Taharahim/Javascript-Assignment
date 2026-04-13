// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let pos = document.querySelector(".positive");

// let positive = Number(prompt("Enter a positive number"));

// let round = Math.round(positive);

// let floor = Math.floor(positive);

// let ceil = Math.ceil(positive)

// pos.innerHTML=`<p>Number : ${positive}</p> <br>`+`<p>Round off value : ${round}</p> <br>`+`<p>Floor value : ${floor}</p><br>`+`<p> Ceil value : ${ceil} </p><br>`;

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let neg = document.querySelector(".negative");

// let negative = Number(prompt("Enter a negative number"));

// let Round = Math.round(negative);

// let Floor = Math.floor(negative);

// let Ceil = Math.ceil(negative)

// neg.innerHTML=`<p>Number : ${negative}</p> <br>`+`<p> Round off value : ${Round}</p> <br>`+`<p> Floor value : ${Floor}</p><br>`+`<p> Ceil value : ${Ceil}</p><br>`;

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let number = Number(prompt("Enter a for absolute number"));
// let absolute = Math.abs(number);

// let Abs = document.querySelector(".absolute");

// Abs.innerHTML=`<p>The Absolute of ${number} is ${absolute} </p>`;

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let roll = (document.querySelector(".roll").onclick = function () {
  let randomdice = Math.floor(Math.random() * 6) + 1;
  let Value = document.getElementById("dice");

  Value.innerHTML = `<p>${randomdice}</p>`;
});

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
let Valuetoss = document.getElementById("sign");

let btn = document.querySelector(".toss");
btn.onclick = function () {
  let randomtoss = Math.floor(Math.random() * 2);
  const coin = randomtoss === 0 ? "Heads" : "Tails";

  Valuetoss.textContent = coin;
};

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let counting = Math.floor(Math.random() * 100) + 1;

let count = (document.getElementById("counting").textContent = counting);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

let weight = parseFloat(prompt("Enter your weight "));

let size = (document.getElementById("weight").textContent = weight);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let secret = Math.floor(Math.random() * 10) + 1;
let secretNumber = Number(prompt("Enter a number between 1 and 10"));

if (secret === secretNumber) {
  alert("Congratulation! You finded the secret Number");
} else {
  alert("Sorry! Better luck Next time ");
}
