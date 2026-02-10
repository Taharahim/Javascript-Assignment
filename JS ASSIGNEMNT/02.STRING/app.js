// 1. Declare a variable called username.
let username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
let myName = "MUHAMMAD TAHA RAHIM KHAN";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

let message = "Hello World! ";

window.alert(message);

let student = "Ibrahim";
let student_age = "21 years old";
let student_course = "Web & app development";
window.alert(student);
window.alert(student_age);
window.alert(student_course);

// 5. Write a script to display the following alert using one JS
// variable:
let pizza = "PIZZA \nPIZZ  \nPIZ \nPI \nP";
window.alert(pizza);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

let email = "taharahim@9211gmail.com";

window.alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

let book = "A smarter way to learn JavaScript";

window.alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS

let msg = document.getElementById("msg");
msg.innerHTML = "YAH! I can write HTML through JAVASCRIPT ";

// 9. Store following string in a variable and show in alert and
// browser through JS
let sign = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

window.alert(sign);
let signs = (document.getElementById("signs").innerHTML = sign);
