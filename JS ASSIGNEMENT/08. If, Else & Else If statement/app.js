// 1.Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

document.querySelector(".submit").onclick = function () {
  finder = document.getElementById("identify").value;

  code = finder.charCodeAt(0);

  if (code >= 97 && code <= 122) {
    alert("It is a Lowercase");
  } else if (code >= 65 && code <= 90) {
    alert("It is a Uppercase");
  } else if (code >= 48 && code <= 57) {
    alert("It is a Number");
  } else {
    alert("Sorry Unable to the Detect");
  }
  // 2. Write a JavaScript program that accept two integers and
  // display the larger. Also show if the two integers are equal.

  var number1 = Number(prompt("Enter a number 1 to tell the diifferences"));
  var number2 = Number(prompt("Enter a number 2 to tell the diifferences"));
  if (isNaN(number1) || isNaN(number2)) {
    alert("Enter the valid Number");
  } else if (number1 > number2) {
    alert(`${number1} is greater than ${number2}`);
  } else if (number2 > number1) {
    alert(`${number2} is greater than ${number1}`);
  } else {
    alert(`Both ${number1} and ${number2} is same number`);
  }
};

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var num = Number(prompt("Enter the number to check positive or negative"));
if (isNaN(num)) {
  alert("Enter the valid Number");
} else if (num < 0) {
  alert("It is a Negative Number");
} else if (num > 0) {
  alert("It is a Positive Number");
} else {
  alert("It is a zero");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var letter = prompt("Enter a single word").toLowerCase();

if (
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u"
) {
  alert(true);
} else if (letter.length > 1) {
  alert("Enter only one word");
} else {
  alert(false);
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = "Taha-is-web-dev";

var verify = String(prompt("Please the password"));

if (verify === "") {
  alert("Please enter your password");
} else if (verify !== password) {
  alert("Incorrect password");
} else {
  alert("Correct! The password you entered matches the original password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

/*
7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements
*/

var time = Number(prompt("Convert 24 time format to 12"));

if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
  alert("Enter the valid Time");
} else {
  var hours = Math.floor(time / 100);
  var minute = time % 100;
  var period = "AM";

  if (hours === 0) {
    hours = 12;
    period = "AM";
  } else if (hour === 12) {
    period = "PM";
  } else if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  alert(`The time is ${hours}:${minute.toString().padStart(2, "0")} ${period}`);
}
