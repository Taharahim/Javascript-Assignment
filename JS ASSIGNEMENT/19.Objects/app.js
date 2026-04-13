// ##1
// Suppose you have an array of object js
// var itemsArray = [
//   {name:"juice", price:"50", quantity:"3"},
//   {name:"cookie", price:"30", quantity:"9"},
//   {name:"shirt", price:"880", quantity:"1"},
//   {name:"pen", price:"100", quantity:"2"}
// ];
// // Calculate total price of each item and all items.


 var itemsArray = [
  {name:"juice", price:"50", quantity:"3"},
  {name:"cookie", price:"30", quantity:"9"},
  {name:"shirt", price:"880", quantity:"1"},
  {name:"pen", price:"100", quantity:"2"}
];
let totalPrice = 0;
for (let i = 0; i < itemsArray.length; i++) {
   let Price =Number(itemsArray[i].price );
   let quantity =  Number( itemsArray[i].quantity);
    let  totalitem = Price * quantity;
     console.log(itemsArray[i].name + 'Total' + totalitem);
    totalPrice+=totalitem 
     
    }
console.log('Total Amount:'+ totalPrice);

// ### 2.
//Create an object with properties name, email, password, age, gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
function properties(firstname,lastname, email, password, age, gender, city, country) {
    this.firstName = firstname,
    this.lastName = lastname,
    this.email = email,
    this.password = password,
    this.age = age,
    this.gender= gender,
    this.city = city,
    this.country = country    
}
let proper = new properties (
    'Taha','rahim','email211@gmail.com','password','32','male','lahore','pakistan'
)

if (
    "firstName" in proper &&
    "lastName" in proper &&
    "age" in proper &&
    "country" in proper) {
    console.log('It is here');
    
}else{
    console.log('Sorry! It is not there ');    
}
// ### 3.
// Create a constructor function with some properties. Now create multiple records using the constructor.
function creatingConstructor(firstname,lastname, email, password, age, gender, city, country) {
    this.firstName = firstname,
    this.lastName = lastname,
    this.email = email,
    this.password = password,
    this.age = age,
    this.gender= gender,
    this.city = city,
    this.country = country    
}
let properA = new creatingConstructor (
    'Taha','rahim','email211@gmail.com','password','32','male','lahore','pakistan'
)
let properB = new creatingConstructor (
    'rasekh','ali','email211@gmail.com','password32','25','male','lahore','pakistan'
)
let properC = new creatingConstructor (
    'Hooria','Tanveer','email211@gmail.com','password34','28','female','lahore','pakistan'
)
// ### 4.
// Suppose you want to check population of your area, their educations and professions.
// Create a constructor function which holds following properties:
// Name, gender, address, education, profession.
// Enter all records one by one.
function creatingPopulation(name,gender,address, education, profession) {
    this.Name = name,
    this.gender = gender,
    this.address = address,
    this.education = education,
    this.profession = profession
}

let properD = new creatingPopulation (
    'Hooria','female','lahore','BS.SE',"SOFTWARE.ENGG"
)
