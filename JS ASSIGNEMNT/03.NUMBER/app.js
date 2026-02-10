// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

let age = 22;

window.alert(age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

let count = Number(localStorage.getItem("visitCount"));
count = count + 1;
localStorage.setItem("visitCount", count);
document.getElementById("Visitcounts").innerHTML =
  "You have Visited my website " + count + " Times ";

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

let birthyear = 2005;
document.getElementById("visitor").innerHTML = "my Birth year is " + birthyear;

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let Name = "John Doe";
let Product = "5 T-shirt(s)";
let Quantity = " XYZ Clothing store";

document.getElementById("message").innerHTML =
  Name + " ordered " + Product + " on " + Quantity;
