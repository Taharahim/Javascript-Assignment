// 1. Create a signup form and display form data in your web
// page on submission.
let form = document.getElementById("form");
form.addEventListener("submit" , (e)=>{

e.preventDefault();
let firstName = document.getElementById("first-name").value;
let lastName = document.getElementById("last-name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value
let repassword = document.getElementById("re-password").value

if (password !== repassword) {
    window.alert("Enter the correct password for confirmation")
    return
}

let bioData = {name: firstName , lastname: lastName , email: email ,}
localStorage.setItem("bioData" , JSON.stringify(bioData));

let inform = document.querySelector(".inform");
inform.innerHTML =`
<table border='1'>
<tr>      
<th>
First Name
</th>
<th>
Last Name
</th>
<th>
Email
</th>
</tr>
<tr>
<td>
${bioData.name}
</td>
<td>
${bioData.lastname}
</td>
<td>
${bioData.email}
</td>
</tr>
</table>
`;
});


// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


let read = document.getElementById("read")
let paragraph = "Additionally, signup forms are crucial for security and communication. They help prevent unauthorized access, protect sensitive information, and enforce privacy standards. At the same time, they give businesses a way to reach users through notifications, updates, or emails while maintaining consent. Beyond security, signup forms support user retention and engagement by creating a sense of ownership and accountability over the account. Overall, signup forms are not just a technical requirement—they are a foundational element that connects users to services while enabling safety, personalization, and communication.";
let see = document.getElementById("see-more")

read.addEventListener("click", (e)=>{
    if (see.textContent === "") {
        see.textContent= paragraph;
        read.textContent= "hide"
    }else{
        see.textContent="";
        read.textContent="Read More";
    }

});

// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row.

