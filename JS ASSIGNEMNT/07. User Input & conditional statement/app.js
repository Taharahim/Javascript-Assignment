// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city;
let gender;
let traffic;
let fuel;

document.getElementById("city-btn").onclick = function () {
  city = document.getElementById("city").value.trim().toLowerCase();

  if (city === "karachi") {
    alert("Welcome to city of light");
  } else if (city === "lahore") {
    alert("Lahore lahore hai");
  } else if (city === "islamabad") {
    alert("Welcome to Capital city of pakistan");
  } else if (city === "quetta") {
    alert("Welcome to frozen city of pakistan");
  } else {
    alert("Welcome");
  }
  // 2. Write a program to take “gender” as input from user. If the
  // user is male, give the message: Good Morning Sir. If the
  // user is female, give the message: Good Morning Ma’am.
  gender = document.getElementById("gender").value.trim().toLowerCase();

  if (gender === "male") {
    alert("Good Morning Sir");
  } else if (gender === "female") {
    alert("Good Morning Ma'am.");
  } else {
    alert("Good Morning");
  }

  // 3. Write a program to take input color of road traffic signal
  // from the user & show the message according to this table:
  // Signal color Message
  // Red Must Stop
  // Yellow Ready to move
  // Green Move now

  traffic = document.getElementById("traffic").value.trim().toLowerCase();

  if (traffic === "green") {
    alert("Move now");
  } else if (traffic === "red") {
    alert("Must Stop");
  } else if (traffic === "yellow") {
    alert("Ready to move");
  } else alert("don't move");

  // 4. Write a program to take input remaining fuel in car (in
  // litres) from user. If the current fuel is less than ,
  // show the message “”

  let fuel = Number(document.getElementById("fuel").value);

  if (isNaN(fuel)) {
    alert("Please enter a valid number");
  } else if (fuel < 1 || fuel < 2 || fuel < 3) {
    alert("Please refill the fuel in your car");
  } else {
    alert("Fuel level is okay");
  }
  // 8. Write a program to check whether the given number is
  // divisible by 3. Show the message to the user if the number
  // is divisible by 3.
  let divisible = 0;

  let givenNumber = Number(document.getElementById("divisible").value);

  if (givenNumber % 3 !== divisible) {
    alert("it is not divisible number to 3");
  } else {
    alert("the number is divisible by 3");
  }

  // 9. Write a program that checks whether the given input is an
  // even number or an odd number.

  if (givenNumber % 2 === divisible) {
    alert("It is Odd Number");
  } else {
    alert("It is Even Number");
  }
  // 10. Write a program that takes temperature as input and
  // shows a message based on following criteria
  // a. T > 40 then “It is too hot outside.”
  // b. T > 30 then “The Weather today is Normal.”
  // c. T > 20 then “Today’s Weather is cool.”
  // d. T > 10 then “OMG! Today’s weather is so Cool.”

  temp = Number(document.getElementById("temp").value);

  if (temp >= 40) {
    alert("It is too hot outside.");
  } else if (temp >= 30) {
    alert("The Weather today is Normal.");
  } else if (temp >= 20) {
    alert("Today's Weather is cool.");
  } else if (temp >= 10) {
    alert("OMG! Today's weather is so Cool.");
  } else {
    alert("Enter a number");
  }
};

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// a. Pre-increment: 'a' becomes 5, then comparison happens.
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// // b. Post-increment: 'b' is checked as 82, then becomes 83. (False)
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// // c. Checking variable c increments
// var c = 12;
// if (c++ === 13) { // False: checks 12, then c becomes 13
//   alert("condition 1 is true");
// }
// if (c === 13) { // True: c is now 13
//   alert("condition 2 is true");
// }
// if (++c < 14) { // False: c becomes 14; 14 is not less than 14
//   alert("condition 3 is true");
// }
// if (c === 14) { // True: c is 14
//   alert("condition 4 is true");
// }

// // d. Cost comparison
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// // e. Boolean checks
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// // f. String comparison (based on alphabetical order)
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

let markSheet = [];
let subject;
let subject_marks;
let result = document.querySelector(".result");
let full_subjects_marks = 100;
let obtained = 0;
let percentage;
let total_mark;
let grade;
let remarks;
document.getElementById("add").onclick = function (event) {
  subject = document.getElementById("subject-name").value.trim();
  subject_marks = Number(document.getElementById("subject-mark").value);
  event.preventDefault();

  if (subject === "" || isNaN(subject_marks)) {
    alert("Please enter valid subject and marks");
    return;
  }
  markSheet.push({ name: subject, mark: subject_marks });
  let obtained = 0;
  for (let item of markSheet) {
    obtained += item.mark;
  }

  let total_mark = markSheet.length * full_subjects_marks;
  let percentage = total_mark ? (obtained / total_mark) * 100 : 0;

  if (percentage >= 80) {
    grade = "A+";
    remarks = "Come take the award";
  } else if (percentage >= 70) {
    grade = "A";
    remarks = "good good";
  } else if (percentage >= 60) {
    grade = "B";
    remarks = "Good enough but try harder";
  } else if (percentage >= 50) {
    grade = "C";
    remarks = "You needed the improve ";
  } else {
    grade = "Fail";
    remarks = " repeat the class";
  }

  let tableHTML = `
        <table border="1" class="table">
            <thead>
                <tr class="row">
                    <th>Subject</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>`;

  for (let i = 0; i < markSheet.length; i++) {
    tableHTML += `
            <tr class="row" >
                <td>${markSheet[i].name}</td>
                <td>${markSheet[i].mark}</td>
            </tr>`;
  }

  tableHTML += `
            </tbody>
            <tfoot >
                <tr class="row">
                    <td class="table">
                        <strong>Obtained:</strong> ${obtained} / ${total_mark} <br>
                        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
                        <strong>Grade:</strong> ${grade}
                        <strong>Remarks:</strong> ${remarks}
                    </td>
                </tr>
            </tfoot>
        </table>`;

  result.innerHTML = tableHTML;
};

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

//   let secretNumber = 5;

//   // let Ask
//   //      Number(window.prompt("Enter the secret Number (1 to 10)"));

//   if(Ask === secretNumber ){
//     alert("Bingo! Correct answer");
//   }else if (isNaN(Ask) ) {
//     alert("Please Enter the number")
//   }else if(Ask + 1 == secretNumber ) {
//     alert("Close enough to the correct answer")
//   }else {
//     alert("Wrong answer")
//   }

// /*

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let answer;

let firstNumber = Number(prompt("Enter a first number"));

let secondNumber = Number(prompt("Enter a second number"));

let Operator = prompt("Enter any Operator (+ - * /)");

if (Operator === "+") {
  answer = firstNumber + secondNumber;
  alert(`After  the Addition is ${answer}`);
} else if (Operator === "-") {
  answer = firstNumber - secondNumber;
  alert(`After  the subtraction is ${answer}`);
} else if (Operator === "/") {
  answer = firstNumber / secondNumber;
  alert(`After  the division is ${answer}`);
} else if (Operator === "X" || Operator === "x") {
  answer = firstNumber * secondNumber;
  alert(`After  the multiplication is ${answer}`);
} else {
  alert("Thank you");
}
