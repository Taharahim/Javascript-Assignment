// 1. Declare 3 variables in one statement.
let variable1, variable2, variable3;
// 2. Declare 5 legal & 5 illegal variable names.

// 5 legal variable names.
// var username  legal variable names
// var Username  legal variable names
// var user_name  legal variable names
// var userName  legal variable names
// var username1  legal variable names

// 5 illegal variable names.
// var user-name  illegal variable names
// var 5477pa  illegal variable names
// var @names  illegal variable names
// var 2username illegal variable names
// var pass-word illegal variable names

// 3. Display this in your browser

document.getElementById("msg").innerHTML =
  "Variable names can only contain $name,_name ,name and user12";
document.getElementById("msg2").innerHTML =
  " Variables must begin with a $my_1stVariable, User_Name_2 or birth_year .";
document.getElementById("msg3").innerHTML = "Variable names are case-sensitive";
document.getElementById("msg4").innerHTML =
  "Variable names should not be JS reserved keywords.";
