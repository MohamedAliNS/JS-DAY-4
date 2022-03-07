// // Task 1: Simple Programs todo for variables
// // 1. Declare four variables without assigning values and print them in console
let a;
let b;
let c;
let d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// // 2. How to get value of the variable myvar as output
var myvar = 10;
console.log(myvar);
// // 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
    let student = {
    firstName: "Mohamed",
    lastName: "Ali",
    maritalStatus: "Married",
    country: "India",
    age: 34
};
for (i in student) 
console.log(student[i]);
//    // 4. Declare variables to store your first name, last name, marital status, country and age in a single line
let array = [firstName = "Mohamed", lastName = "Ali", maritalStatus = "Married", country = "India", age = 34];
console.log(array.join(" "));
// 5. Declare variables and assign string, boolean, undefined and null data types
var myAge = "I am 25 years old";
var yourAge = "You are 30 years old";
console.log(myAge);
console.log(yourAge);
var myAge = true;
if (myAge) {
    console.log("I am 25 years old");
}
else {
    console.log("false");
}
var yourAge = true;
if (yourAge) {
    console.log("You are 30 years old");
}
else {
    console.log("false");
}
var undefinedAge;
console.log(undefinedAge);
var nullAge = null;
console.log(nullAge);
// 6. Convert the string to integer
// parseInt()
let str  = "Mohamed";
let int = parseInt(str);
console.log(typeof int);
// Number()
let stg  = "Mohamed";
let num = Number(stg);
console.log(typeof num);
// Plus sign(+)
let stn  = +"Mohamed";
console.log(typeof stn);
// 7. Write 6 statement which provide truthy & falsey values.
console.log(10 == 10);
console.log(10 == "10");
console.log(10 == [10]);
console.log(!10 == "10");
console.log(!10 == [10]);
console.log(!"10" == [10]);
// Task 2: Simple Programs todo for Operators
// 1.Square of a number
let square = Math.pow(5,2);
console.log(square);
// 2.Swapping 2 numbers
let number1 = 5;
let number2 = 10;
[number1, number2] = [number2, number1];
console.log(`The value of number1 after swapping: ${number1}`);
console.log(`The value of number2 after swapping: ${number2}`);
// 3.Addition of 3 numbers
let sum = [1, 2, 3];
let res = sum.reduce((result, element) => {
    return result + element;
})
console.log(res);
// 4.Celsius to Fahrenheit conversion
let celsius = 37;
let Fahrenheit = celsius * 1.8 + 32;
console.log(Fahrenheit);
// 5.Meter to miles
let meter = 100;
let miles = meter * 0.00062137;
console.log(miles);
// 6.Pounds to kg
let pound = 100;
let kilogram = pound * 0.453592;
console.log(kilogram);
// 7.Calculate Batting Average
let runs = 10000;
let matches = 150;
let notOut = 35;
let battingAverage = runs / (matches - notOut);
console.log(battingAverage);
// 8.Calculate five test scores and print their average
let test1 = 120;
let test2 = 80;
let test3 = 50;
let test4 = 50;
let test5 = 210;
let testAverage = (test1+test2+test3+test4+test5)/5;
console.log(testAverage);
// 9.Power of any number x ^ y.
let x = Math.pow(10, 3);
console.log(x);
// 10.Calculate Simple Interest
let principal = 100000;
let rate = 5;
let time = 1;
let simpleInterest = (principal*rate*time)/100;
console.log(simpleInterest);
// 11.Calculate area of an equilateral triangle
let side = 5;
let area = 0.43*Math.pow(side, 2);
console.log(area);
// 12.Area Of Isosceles Triangle
let a1 = 20;
let b1 = 10;
let a1square = Math.pow(a1, 2);
let b1square = Math.pow(b1, 2);
let b2 = b1square/4;
let sq = a1square - b2;
let sqrt = Math.sqrt(sq);
let iso = 0.5 * b1 * sqrt; 
console.log(iso);
// 13.Volume Of Sphere
let radius = 10;
let vs = 1.33 * 3.14 * Math.pow(side, 3);
console.log(vs);
// 14.Volume Of Prism
let bas = 10;
let ht = 20;
let vp = bas * ht;
console.log(vp);
// 15.Find area of a triangle
let base = 10;
let height = 20;
let ar = 0.5 * base * height;
console.log(ar);
// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let ac = 100;
let sc = 90;
let dis = ac - sc;
console.log(dis);
// 17. Given their radius of a circle and find its diameter, circumference and area.
let rad = 4;
let dia = 2*rad;
console.log(dia);
let cir = 2 * 3.14 * rad;
console.log(cir);
let aoc = 3.14 * Math.pow(rad, 2);
console.log(aoc);


