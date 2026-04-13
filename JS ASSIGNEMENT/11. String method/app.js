// 1.Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let first_name = prompt("Enter the first name");
let last_name = prompt("Enter the last name");

let full_name = first_name + " " + last_name;

alert(`Welcome ${full_name} to my Webpage `);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let UserInput = String(prompt("Enter Your favorite mobile phone model"));

UserInput = UserInput.trim();

let Length = UserInput.length;

alert(`Your Input length is ${Length} `);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let WORD = "Pakistani";
let index = word.indexOf("n");

alert(`The index of letter 'n' in "Pakistani" is ${index}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let word2 = "Hello World";
let index2 = word2.lastIndexOf("l");

alert(`The last index of letter 'l' in "Hello World" is ${index2}`);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let WORDS = "Pakistani";
let index3 = words.charAt(3);

alert(`The character at index 3 in "Pakistani" is ${index3}`);

// 6. Repeat Q1 using string concat() method.

let firstname = prompt("Enter the first name");
let lastname = prompt("Enter the last name");

let fullname = firstname.concat(" ", lastname);

alert(`Welcome ${fullname} to my Webpage `);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let city = "Hyderabad";

let Update = city.replace("Hyder", "Islam");

console.log(Update);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
//  var message =“Ali and Sami are best friends. They play cricket and
// football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";

var upgrade = message.replaceAll("and", "&");
console.log(upgrade);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var num = Number("472");
// var type = typeof(num)
// alert(`${num} and ${type} `)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var Message = prompt("Enter a Text");
var upper = Message.toUpperCase();
alert(upper);

// 11. Write a program that takes user input. Convert and
//Convert and show the input in title case.

let titleCase = prompt("Enter a Text");
let Words = titleCase.toLowerCase().split(" ");

for (let i = 0; i < Words.length; i++) {
  Words[i] = Words[i][0].toUpperCase() + Words[i].slice(1).toLowerCase();
}
let letter = Words.join(" ");
alert(letter);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var Num = 35.36;

var str = Num.toString().replace(".", "");

alert(str);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

let username = prompt("Enter the username");
username = username.toLowerCase();
let forbidden = [33, 44, 46, 64];
let Name;
let isvaild = true;

for (let i = 0; i < username.length; i++) {
  Name = username.charCodeAt(i);
  if (forbidden.includes(Name)) {
    isvaild = false;
    break;
  }
}

if (isvaild === false) {
  alert("Invaild Username");
} else {
  alert("Welcome to my web page");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

let bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
let items = false;

let search = String(prompt("Search your desirable item here "));
let found = document.getElementById("found");

for (let i = 0; i < bakery.length; i++) {
  if (bakery[i].toLowerCase().includes(search.toLowerCase())) {
    items = true;
  }
}
if (items === false) {
  found.innerHTML = ` <p> Your Desirable items is not available here</p>`;
} else {
  found.innerHTML = ` <p> Your Desirable items is available here </p>`;
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
let HasLength = false;
let HasLetter = false;

let Hasnumber = false;
let word = false;

let password = String(prompt("Enter a password"));

if (password.length >= 6) {
  HasLength = true;
} else {
  HasLength = false;
}
let firstword = password.charCodeAt(0);
let startword;
if (
  (firstword >= 65 && firstword <= 90) ||
  (firstword >= 97 && firstword <= 122)
) {
  startword = true;
}
for (let i = 0; i < password.length; i++) {
  word = password.charCodeAt(i);
  if ((word >= 65 && word <= 90) || (word >= 97 && word <= 122)) {
    HasLetter = true;
  } else if (word >= 48 && word <= 57) {
    Hasnumber = true;
  }
}
if (HasLength && startword && HasLetter && Hasnumber) {
  alert("Password is Saved");
} else {
  alert("Password is not Strong");
}
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = "University of Karachi";

var University = university.split(" ");

var arr = (document.getElementById("arr").innerHTML =
  `<p> let uni = {${University}}</p> <br>`);

// 17. Write a program to display the last character of a user
// input.

let userInput = prompt("write a text");
let lastword = userInput.slice(userInput.length - 1);

console.log(lastword);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence.toLowerCase().split(" ");

let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.getElementById("arr2").innerText =
  " The Count of the is " + count + " times .";
