// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function calculatepower(a, b) {
  let result = 1;
  let i = 1;
  while (i <= b) {
    result = result * a;
    i++;
  }
  return result;
}

let question1 = Number(prompt("Enter the number of a "));
let question2 = Number(prompt("Enter the number of b "));

let finalResult = calculatepower(question1, question2);

console.log("The answer of values is " + finalResult);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

let year = Number(prompt("Enter a year in number"));

function calculateleapyear(a) {
  let divide = a % 400;
  let divide2 = a % 100;
  let divide3 = a % 4;

  if (divide === 0) {
    alert("It is a Leap year");
  } else if (divide2 === 0) {
    alert("It is not a Leap year");
  } else if (divide3 === 0) {
    alert("It is a Leap year");
  } else {
    alert("It is not a Leap year");
  }
}
calculateleapyear(year);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

let one = 14;
let two = 15;
let three = 18;

function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function calculateTriangleArea(a, b, c) {
  let S = semiPerimeter(a, b, c);
  let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
  alert(`The Area of triangle is ${area}`);
}

calculateTriangleArea(one, two, three);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calculateResult(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Enter the number");
    return;
  }
  let total = a + b + c;

  function calculateAverage(sum) {
    let average = Math.round(sum / 3);
    return average;
  }
  let average = calculateAverage(total);
  console.log(average);

  function calculatePercentage(sum) {
    let percentage = Math.round((sum * 100) / 300);
    return percentage;
  }

  let result = calculatePercentage(total);
  console.log(result);

  if (result >= 90) {
    alert(`[AVERAGE]: [${average}] [PERCENTAGE]: [${result}]  [GRADE]: [A+]`);
  } else if (result >= 80) {
    alert(`[AVERAGE]: [${average}] [PERCENTAGE]: [${result}]  [GRADE]: [A]`);
  } else if (result >= 70) {
    alert(`[AVERAGE]: [${average}] [PERCENTAGE]: [${result}]  [GRADE]: [B]`);
  } else if (result >= 60) {
    alert(`[AVERAGE]: [${average}] [PERCENTAGE]: [${result}]  [GRADE]: [C]`);
  } else {
    alert(`[AVERAGE]: [${average}] [PERCENTAGE]: [${result}]  [GRADE]: [FAIL]`);
  }
}
let arabic = 78;
let science = 88;
let computer = 93;

calculateResult(arabic, science, computer);

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function findingtext(a, b) {
  let word = String(a).toLowerCase();
  let find = String(b).toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === find) {
      console.log(word[i]);
      return i;
    }
  }
  return -1;
}
let word = "a";
let letters = "taharahim";

let findout = findingtext(letters, word);

console.log(findout);

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
let letter = "i love karahi and sheermal and chocolate cake";

function Clearingvowel(word) {
  let words = String(word).toLowerCase();
  words = words.split("");
  let nonVowel = "bcdfghjklmnpqrstvwxyz";
  nonVowel = nonVowel.split("");

  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (nonVowel.includes(words[i]) || words[i] === " ") {
      result += words[i];
    }
  }
  console.log(result);
}

Clearingvowel(letter);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.

let sentence = "Pleases read this application and give me gratuity";

function calculateVowels(word) {
  let words = String(word).toLowerCase();
  let count = 0;
  let find = [];
  for (let i = 0; i < words.length - 1; i++) {
    let pair = words[i] + words[i + 1];
    switch (pair) {
      case "ea":
      case "ei":
      case "io":
      case "ui":
      case "eo":
      case "ue":
      case "ai":
      case "ao":
      case "au":
      case "ou":
      case "oo":
      case "aa":
      case "ee":
      case "ii":
      case "uu":
        count++;
        find.push(pair);
        break;
    }
  }
  console.log(count);
  console.log(find);
}
calculateVowels(sentence);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
let kilo = 15;

function convertDistance(sum) {
  let sums = Number(sum);
  function calculateMeters(sums) {
    let meter = Math.round(sums * 1000);
    return meter;
  }
  function calculateFeet(sums) {
    let Feet = Math.round(sums * 3280.84);
    return Feet;
  }
  function calculateInches(sums) {
    let Inches = Math.round(sums * 39370);
    return Inches;
  }
  function calculateCentimeter(sums) {
    let centimeters = Math.round(sums * 100000);
    return centimeters;
  }
  console.log(calculateCentimeter(sums));
  console.log(calculateFeet(sums));
  console.log(calculateInches(sums));
  console.log(calculateMeters(sums));
}
convertDistance(kilo);

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calculateTimeout(sum) {
  let overtime = sum - 40;
  let result = 0;
  if (overtime > 0) {
    result = overtime * 12;
  }
  console.log(result);
}
let Workedtime = 70;
calculateTimeout(Workedtime);

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

let cashier = Number(prompt("Enter the amount to withdrawal"));

function calculateNotes(sum) {
  let cash = Number(sum);
  if (isNaN(cash)) {
    alert("Enter in Number");
  }

  let hundred = Math.floor(cash / 100);
  let remain1 = cash - hundred * 100;
  let fifty = Math.floor(remain1 / 50);
  let remain2 = remain1 - fifty * 50;
  let Tens = Math.floor(remain2 / 10);

  alert(
    `You will give the ${hundred} hundreds and ${fifty} fifty and ${Tens} Tens`,
  );
}

calculateNotes(cashier);
