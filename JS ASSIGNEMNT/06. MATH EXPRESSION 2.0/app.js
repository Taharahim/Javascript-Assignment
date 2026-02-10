// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

let alpha = 10;

document.getElementById("Q1").innerHTML =
  `<p>The value of a is ${alpha}</p>` +
  `<p>The value of ++a is ${++alpha}</p>` +
  `<p>Now value of a is ${alpha}</p>` +
  `<p>The value of a++ is ${alpha++}</p>` +
  `<p>Now value of a is ${alpha}</p>` +
  `<p>The value of --a is ${--alpha}</p>` +
  `<p>Now value of a is ${alpha}</p>` +
  `<p>The value of a-- is ${alpha--}</p>` +
  `<p>Now value of a is ${alpha}</p><hr>`;

// 2. What will be the output in variables a, b & result after
// Explain the output at each stage:
// execution of the following script:

var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;

document.getElementById("Q2").innerHTML =
  `<h3>Step-by-Step Explanation:</h3>
    <p>1. --a: <b>1</b></p>
    <p>2. --a - --b: <b>1</b></p>
    <p>3. --a - --b + ++b: <b>2</b></p>
    <p>4. --a - --b + ++b + b--: <b>3</b></p>
    <hr>
    <p>a is ${a}</p>` +
  `<p> b is ${b}</p>` +
  `<p>result is ${result}</p>`;

// 3. Write a program that takes input a name from user &
// greet the user.

// let username = prompt("Enter your username");
// alert(`Welcome ${username} to my web page `);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let table = parseFloat(prompt("Enter a number for table")) || 5;

let element = document.getElementById("Q3");
element.innerHTML = "";
for (let i = 1; i <= 10; i++) {
  let multiply = table * i;
  element.innerHTML += `${table} X ${i} = ${multiply}<br><br>`;
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = prompt("Enter the Subject Name") || "ENGLISH";
var subject2 = prompt("Enter the Subject Name 2") || "URDU";
var subject3 = prompt("Enter the Subject Name 3") || "SINDHI";

var mark1 = parseFloat(prompt("Enter your Subject Mark")) || 40;
var mark2 = parseFloat(prompt("Enter your Subject Mark 2")) || 50;
var mark3 = parseFloat(prompt("Enter your Subject Mark 3")) || 50;

let result1 = (mark1 / 100) * 100;
let result2 = (mark2 / 100) * 100;
let result3 = (mark3 / 100) * 100;
let totalObtained = mark1 + mark2 + mark3;
let totalPercentage = (totalObtained / 300) * 100;

document.getElementById("Q4").innerHTML = `
    <table>
    <tr>
    <th>
    Subject
    </th>
    <th>
    Total Marks
    </th>
    <th>
    Obtained Marks
    </th>
    <th>
    Percentage
    </th>
    </tr>
    <tr>
    <td>${subject1}</td>
    <td>100</td>
    <td>${mark1}</td>
    <td>${result1}%</td>
    </tr>
    <tr>
    <td>${subject2}</td>
    <td>100</td>
    <td>${mark2}</td>
    <td>${result2}%</td>
    </tr>
    <tr>
    <td>${subject3}</td>
    <td>100</td>
    <td>${mark3}</td>
    <td>${result3}%</td>
    </tr>
    <tr>
    <td></td>
    <td></td>
    <td>${totalObtained}</td>
    <td>${totalPercentage.toFixed(2)}%</td>
    </tr>
    </table>
    `;
