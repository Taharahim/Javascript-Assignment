// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: </p>
// <p class=”render”> Email : alexbank@example.com</p>Bank
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browse
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

let content = document.getElementById('main-content');
console.log(content.childNodes);
console.log(content.children);

let wordDiv = document.querySelector('.words');
wordDiv.textContent=content.innerHTML;
 document.getElementById('first-name').value ='Alex';
 document.getElementById('last-name').value='Bank';
 document.getElementById('email').value='alexbank@example.com';

 let render = document.querySelectorAll('.render')

 for (let i = 0; i < render.length; i++) {
    console.log(render[i].innerHTML);

}

    // 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”
let form = document.getElementById("form-content");
let last = document.getElementById("lastName");
let email = document.getElementById("email");

// iii (update child node)
last.childNodes[0].nodeValue = "Last Name: Rahim";

// iv
let firstChild = content.firstElementChild.innerHTML;
let lastChild = content.lastElementChild.innerHTML;

// v
let nextSibling = last.nextElementSibling.innerHTML;
let prevSibling = last.previousElementSibling.innerHTML;
wordDiv.innerHTML=`
<p>
Node type of form-content: ${form.nodeType} <br>
<br>  node type of last: ${last.nodeType} ,  Child node of last: ${last.childNodes[0].nodeType}<br>
${last.childNodes[0].nodeValue }
<br>First element Child of main- content: ${firstChild}
<br>First Child of main-content : ${firstChild}, Last Child of main-content: ${lastChild}
<br> First Child of next sibling: ${nextSibling}, previous sibling of last: ${prevSibling}
<br>Parent node of email: ${email.parentNode.id}, Node type of email: ${email.nodeType} </p>`;