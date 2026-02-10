// 1.Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// &&
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

let firstNum = 10;
let secondNum = 5;
let Sum = firstNum + secondNum;
let Difference = firstNum - secondNum;
let Product = firstNum * secondNum;
let Quotient = firstNum / secondNum;
let Remainder = firstNum % secondNum;

document.getElementById("Q1").innerHTML =
  `(Q1) Sum of ${firstNum} and ${secondNum} is ${Sum}`;

document.getElementById("Q2.1").innerHTML =
  `(Q2) Difference of ${firstNum} and ${secondNum} is ${Difference}`;

document.getElementById("Q2.2").innerHTML =
  `(Q3) Product of ${firstNum} and ${secondNum} is ${Product}`;

document.getElementById("Q2.3").innerHTML =
  `(Q4) Quotient of ${firstNum} and ${secondNum} is ${Quotient}`;

document.getElementById("Q2.4").innerHTML =
  `(Q4) Remainder of ${firstNum} and ${secondNum} is ${Remainder}`;

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

let Empty;
document.getElementById("Q3.1").innerHTML =
  `(Q5) Value after variable declaration is: ${Empty} `;

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
Empty = 5;

document.getElementById("Q3.2").innerHTML = `(Q6) Initial value: ${Empty} `;

Empty++;
document.getElementById("Q3.3").innerHTML =
  `(Q7) Initial after increment is: ${Empty} `;
let addSum = Empty + 7;
document.getElementById("Q3.4").innerHTML =
  `(Q8) Value after addition is: ${addSum} `;

addSum--;
document.getElementById("Q3.5").innerHTML =
  `(Q9) Value after decrement is: ${addSum} `;

let remainder = addSum % 3;
document.getElementById("Q3.6").innerHTML =
  `(Q10) The remainder is : ${remainder} `;

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
let ticket = 5;
let price = 600;
let total = ticket * price;
document.getElementById("Q4").innerHTML =
  `(Q10) Taha brough ${ticket} tickets of ${price}PRK in Total ${total}PRK `;

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

let table = 4;
let element = document.getElementById("Q5");
element.innerHTML = "";
for (let i = 1; i <= 10; i++) {
  let multiply = i * table;

  element.innerHTML += `${table} X ${i} = ${multiply} <br><br>`;
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

let celsius = 40;
let fahrenheit = 70;

let celsiusResult = ((fahrenheit - 32) * 5) / 9;
let fahrenheitResult = (celsius * 9) / 5 + 32;

document.getElementById("Q6.1").innerHTML =
  `${celsius}&deg;C is ${celsiusResult.toFixed(2)}&deg;F;`;
document.getElementById("Q6.2").innerHTML =
  `${fahrenheit}&deg;F is ${fahrenheitResult.toFixed(2)}&deg;C`;

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

let Price1 = 650;
let Quantity1 = 3;
let Price2 = 100;
let Quantity2 = 7;
let Shipping = 100;

let totalCharges = Price1 * Quantity1 + Price2 * Quantity2 + Shipping;

document.getElementById("Q7.1").innerHTML = `Price of Item1:  ${Price1}`;
document.getElementById("Q7.2").innerHTML = ` Qunatity of Item1:  ${Quantity1}`;
document.getElementById("Q7.3").innerHTML = `Price of Item2:  ${Price2}`;
document.getElementById("Q7.4").innerHTML = ` Qunatity of Item2:  ${Quantity2}`;
document.getElementById("Q7.5").innerHTML = `:Shipping charges :  ${Shipping}`;
document.getElementById("Q7.6").innerHTML =
  `Total cost of your order is :  ${totalCharges}`;

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

document.getElementById("Q8.1").innerHTML = `Total Marks : ${totalMarks}`;
document.getElementById("Q8.2").innerHTML = `Marks Obtained : ${marksObtained}`;
document.getElementById("Q8.3").innerHTML =
  `Percentage : ${percentage.toFixed(2)}`;

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let Usd = 1;
let Prk = 279.75;

let Saudi = 1;
let PRk = 74.59;

document.getElementById("Q9.1").innerHTML = `USD ${Usd} is ${Prk} PRK`;
document.getElementById("Q9.2").innerHTML =
  `Saudi Riyal ${Saudi} is ${PRk} PRK`;

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let num = ((23 + 5) * 10) / 2;
let ans = "(23 + 5)* 10 / 2";
document.getElementById("Q10").innerHTML = `${ans} is ${num}`;

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN years old”.

let current_year = 1947;
let birth_year = 2026;
let age = birth_year - current_year;

document.getElementById("Q11").innerHTML =
  `<p>Current year is ${current_year}</p>` +
  `<p>Birth year is ${birth_year} </p>` +
  `<p>And the age is ${age}</p>`;

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 20;
let pi = 3.142;

let cricle = 2 * pi * radius;
let area = pi * (radius * radius);

document.getElementById("Q12").innerHTML =
  `<p>the radius of cricle ${radius}</p>` +
  `<p>The circumference is ${cricle.toFixed(2)}</p>` +
  `<p>The area of cricle is ${area} </p>`;

/*
13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN”.
*/

let fav = "biryani";
let currentage = 20;
let maximumage = 40;
let snack = 2;

let calculation = maximumage - currentage;
let totalamount = calculation * 365 * snack;

document.getElementById("Q13").innerHTML =
  `<p> You will need ${totalamount} ${fav} to last you until the ripe old age of ${calculation} </p>`;
