// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multidimensional = [];


// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
let multi = document.querySelector(".multi-arr");
let element ;
for (let i = 0; i < matrix.length; i++) {
    element = matrix[i];
    
    multi.innerHTML+=`<p> ${element}</p><br>`;
}



// 3. Write a program to print numeric counting from 1 to 10.
    
    let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let combine;
    for (let i = 0; i < number.length; i++) {
        combine = number[i];
        multi.innerHTML+=`<p> ${combine}</p>`;
    
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let table;

let Num ; 
let multiply ;
let answer = document.querySelector(".ans")
let lines;
let heading;
 document.getElementById("submit").onclick = function(){

heading = document.getElementById("heading")
table = Number(document.getElementById("table").value)
lines = Number(document.getElementById("length").value)

for (let i = 1; i <= lines ; i++) {
        multiply= table * i ;
        heading.innerHTML=`<h2>Table of ${table}<h2> <br> <h2>Length of ${lines}<h2> `;

        answer.innerHTML += `<p> ${table} X ${i} = ${multiply}</p> <br>`
    
}};



// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
let Name ;
let show = document.querySelector(".fruit");

for (let i = 0; i < fruits.length ; i++) {
    show.innerHTML += `<p>${fruits[i]}</p><br>`
};
for (let i = 0; i < fruits.length ; i++) {
    Name = fruits[i]
    show.innerHTML += `<p> Element at the index of ${i} is ${Name}</p><br>`
};

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

let Counting=[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let ReverseCounting=[ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let Even=[ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let Odd =[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let Series =[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

let count = document.querySelector(".count");
count.innerHTML = `
<h2>Counting</h2>
<p>${Counting.join(", ")}</p>
<h2>ReverseCounting</h2>
<p>${ReverseCounting.join(", ")}}</p>
<h2>Even</h2>
<p>${Even.join(", ")}}</p>
<h2>Odd</h2>
<p>${Odd.join(", ")}}</p>
<h2>Series</h2>
`;
for (let i = 0; i < Series.length; i++) {
    count.innerHTML +=`<p style="display:inline;" >${Series[i]}K </p>`;
};

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let items =["cake", "apple pie", "cookie", "chips", "patties"] ;


document.querySelector(".search-btn").onclick = function () {
  let userInput = document.getElementById("search").value.toLowerCase();

  if (items.map(item => item.toLowerCase()).includes(userInput)) {
    alert(`Yes! ${userInput} is available.`);
  } else {
    alert(`Sorry! ${userInput} is not available.`);
  }
};

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

let arr1 =[24, 53, 78, 91, 12];
let largest = arr1[0];
let arr2 = document.querySelector(".arr1");

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        largest = arr1[i]
    };
    arr2.innerHTML=`<p>${largest} is largest number in the array</p>`;
};

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


let arr3 =[24, 53, 78, 91, 12];
let arr4 = document.querySelector(".arr2");
let smallest = arr3[0];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < smallest) {
         smallest = arr3[i]
    };
    arr4.innerHTML=`<p>${smallest} is smallest number in the array</p>`;
};




// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

let multiples = 5 ;

let tabular = document.querySelector(".tabular") ;


for (let i = 1; i <= 20 ; i++) {

tabular.innerHTML += `<p style="display:inline;"> ${ multiples * i} </p>`
    
};


