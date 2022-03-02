// Task 1: Simple Programs todo for variables
// 1. Declare four variables without assigning values and print them in console
let a;
let b;
let c;
let d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// 2. How to get value of the variable myvar as output
var myvar = 10;
console.log(myvar);
// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
    let student = {
    firstName: "Mohamed",
    lastName: "Ali",
    maritalStatus: "Married",
    country: "India",
    age: 34
};
for (i in student) 
console.log(student[i]);
   // 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let array = [firstName = "Mohamed", lastName = "Ali", maritalStatus = "Married", country = "India", age = 34];
console.log(array.join(" "));
