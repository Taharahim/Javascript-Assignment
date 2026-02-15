// 1.Write a function that displays current date & time in your
// browser.
function currentDateandtime () {
    let date = document.getElementById("date");
    let currentDate = new Date();
    date.textContent=currentDate.toLocaleString();
    
};
currentDateandtime();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greet() {
    let firstname = prompt("Enter your first name");
    let lastname = prompt("Enter your last name");

    let fullname = firstname.concat(" " + lastname).toUpperCase();
    alert(`Welcome to my web page ${fullname}`);


};

greet();


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


function add (){
let num1 = Math.round(Number(prompt("Enter a number")));
let num2 = Math.round(Number(prompt("Enter a second number")));

let finalnum = num1 + num2 ;

document.getElementById("sum").innerHTML=`<p>The sum of ${num1} and ${num2} = ${finalnum} number </p>`;

};

add();


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.












/*
5. Write a function that squares its argument.
6. Write a function that computes factorial of a number.
7. Write a function that take start and end number as inputs
& display counting in your browser.
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
function | JAVASCRIPT
Page 2 of 4
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables
10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam.
11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'
13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
function | JAVASCRIPT
Page 3 of 4
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'
14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2
*/