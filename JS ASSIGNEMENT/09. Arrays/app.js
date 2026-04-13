// 1. Declare an empty array using JS literal notation to store
// student names in future.

let Students = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

let studentName = [];

studentName.push({ name: "Javid" });

// 3. Declare and initialize a strings array.

let str = ["Apple", "Orange", "Peach", "Strawberry"];

// 4. Declare and initialize a numbers array.
let num = [67, 4, 75, 99];

// 5. Declare and initialize a boolean array.
let bool = [true, false];

// 6. Declare and initialize a mixed array.
let mixed = ["taha", 98, true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
let Qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  " PhD",
];

let show = document.querySelector(".qualification");
let element = 0;
for (let i = 0; i < Qualifications.length; i++) {
  element = Qualifications[i];

  show.innerHTML += `<li>${element}</li>`;
  show.style.listStyleType = "upper-roman";
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentname = ["Taha", "Rasekh", "Ibrahim"];
let studentMarks = [420, 350, 381];
let percentage = 0;
let result = document.querySelector(".result");
let Name;
let mark;
for (let i = 0; i < studentname.length; i++) {
  Name = studentname[i];
  for (let i = 0; i < studentMarks.length; i++) {
    mark = studentMarks[i];
    percentage = (mark / 500) * 100;
  }
  result.innerHTML += `Score of ${Name} is ${mark}. Percentage : ${percentage.toFixed(2)}% <br><br> `;
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.

// d. Delete the first color in the array. Display the updated
// array in your browser.

// e. Delete the last color in the array. Display the updated
// array in your browser.

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var color = ["red","pink","purple","yellow","green"]
// var start = prompt("Add any color in start of array");
// var begin = prompt("Add any color in 2 name at the start of array");
// color.splice(0,0,start , begin);

// var end = prompt("Add any color in end of array");
// color.push(end);
// color.shift(color);
// color.pop(color);

// var begin2 = prompt("Enter the index number where you wants to add a color")-1;
// var begin3 = prompt("Add any color in name at the start of array");

// var begin4 = prompt("Enter any index number if you color wants to delete it")-1;
// var begin5 = prompt(" delete many color name in number in the array");

// color.splice(begin2 , 0 , begin3)
// color.splice(begin4 , begin5 )

// let see = document.querySelector(".color")
// let elements

// for (let i = 0; i < color.length; i++) {
//     elements = color[i];

//     see.innerHTML+=`<p>${elements}<br></p>`

// }

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let Mark = [30, 55, 98, 23, 20, 55];

Mark.sort(function (a, b) {
  return a - b;
});

console.log(Mark);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city = ["karachi", "lahore", "islamabad", "Quetta", "peshawar"];

var selectedCities;

console.log(city);

var selectedCities = city.slice(0, 3);

console.log(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];

var arr = ["This ", " is ", " my ", " cat"];
var joinedArr = arr.join("");
console.log(joinedArr);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let stores = ["Keyboard", "mouse", "cpu", "monitor"];
let single = 0;

let out = document.getElementById("out");
let reverse = document.getElementById("reverse");

for (let i = 0; i < stores.length; i++) {
  single = stores[i];

  out.innerHTML += `<p> OUT: <br> ${single}</p>`;

  // 14. Create a new array. Store values one by one in such a way
  // that you can access the values in reverse order. (Last InFirst Out)
}
for (let i = stores.length - 1; i >= 0; i--) {
  single = stores[i];
  reverse.innerHTML += `<p> OUT: <br> ${single}</p>`;
}

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
//browser using document.write() method:

let manufacturers = ["Apple", "Samsung", "Motorola", " Nokia", "Haier", "Sony"];

let menu = document.getElementById("menu");
let items;
for (let i = 0; i < manufacturers.length; i++) {
  items = manufacturers[i];

  menu.innerHTML += `<option>${items}</option>`;
}
