// 1.Write a program that displays current date and time in
// your browser.

// const current = new Date();

// let date = document.getElementById("date").textContent=current;

// 2. Write a program that alerts the current month in words.
// For example December.

// const monthnumber = current.getMonth()
// const monthname=  ["January", "February", "March", "April",
//   "May", "June", "July", "August",
//   "September", "October", "November", "December"];


// let month = monthname[monthnumber];

// alert(month);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// const Daynumber =current.getDay();
// const Dayname=  ["Sun", "Mon", "Tue", "Wed",
//     "Thu", "Fri", "Sat"];
    
// let Day = Dayname[Daynumber];

// alert(Day);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// if (Day === "Sat" || Day === "Sun" ){
//     alert("It's Fun day")
// };


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// const dates = current.getDate();

// if (dates <= 15){
//     alert("First fifteen days of the month")
// }else{
//         alert("Last days of the month")
// };


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let past = new Date() ;

// msecond = Math.round(past.getTime());
// minutes = Math.round(msecond/1000/60);

// let msdate = document.getElementById("msdate").innerHTML=`<p> since midnight, Jan. 1, 1970 in millisecond : ${msecond} </p> <br> 
// <p> since midnight, Jan. 1, 1970 in mintues : ${minutes}</p>`;

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

let present = new Date();

let time = present.getHours();

if(time < 12){
    alert("It's AM")
}else {
    alert("It's PM")
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

let laterDate = new Date(2020,11,31);
console.log(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let currentRamadan = new Date (2026,1,19);
let startRamadan = new Date (2015,5,18);
let differences = currentRamadan - startRamadan ;
let Ramadansecond = Math.floor(differences/1000/60/60/24);


alert(`The number of days past since 1st Ramadan is ${Ramadansecond}`)

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


let startdate = new Date (2015,0,1);
let pastdate  = new Date(1970,0,1)

console.log(pastdate);

let pastsecond = ( startdate-pastdate )/1000;

let begin = document.getElementById("pastdate").textContent= pastsecond;






// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.





/*

// 12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back?


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


*/