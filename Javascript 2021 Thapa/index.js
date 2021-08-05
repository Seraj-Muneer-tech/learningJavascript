/**variable (1st section) */
// var name = "value";

/** challege 1 */
// var _myName = "seraj muneer faridy";
// var 1myName = "seraj muneer faridy";
// var $myName = "seraj muneer faridy";

// console.log(_myName)
// console.log(1myName)
// console.log($myName)


/** Data Types (2nd section) */ 
//undefined
//boolean
//number
//string
//bigInt
//Symbol

// var myName = "seraj muneer faridy";
// console.log(myName);
// console.log(typeof(myName));
// var myAge = 15;
// console.log(myAge);
// console.log(typeof(myAge));
// var amiSeraj = true;

// console.log(amiSeraj);
// console.log(typeof(amiSeraj));

// var amiMaaz = false;
// console.log(amiMaaz);
// console.log(typeof(amiMaaz));
// console.log(typeof(myAge));

/** challenge time */

// console.log(10 + "20");
// console.log(9 - "5");//bug no.1
// console.log("java" + "script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log("seraj" - "muneer");
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log(9 - "9");
//true = 1
//false = 0


// interview question 1
// differnce between null and undifined
// var iAmMaaz = null;
// console.log(iAmMaaz);
// console.log(typeof(iAmMaaz));//bug no.2

// var iAmStandby;
// console.log(iAmStandby);

//myAges in not defined
// console.log(typeof(myAges));//should be undefined

//isNaN()- NaN = Not a Number
// var myPhoneNumber = 9876543210;
// var myName = "seraj muneer faridy";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myPhoneNumber)){
//     console.log("please enter a valid phone number");
// }

//NaN practice
// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

/** Expressions and Operaters (3rd section) */
/**
 * 1. assignment operators
 * 2. arithmetic operators
 * 3. comparison operators
 * 4. logical operators
 * 5. string operators
 * 6. conditional (ternary) operators
 */


//1. assignment operator (=)
// var x = 5;
// var y = 5;

// console.log('are x and y both equal' + x == y);

// console.log(`Are x and y both equal: ${x == y}`);


//2. arithmetic operator
// console.log(8+6);
// console.log(24-7);
// console.log(10*10);
// console.log(25/5);

//modulus operator
// console.log("Remainder Operator: " + 100%30);//should be 10

// var myName = 'seraj muneer faridy';
// var myName = 'maaz ayan faridy';
// console.log(myName)

//increment operator (x++ version)
// var Num = 100;
// var newNum = Num++ + 5;
// console.log(Num);
// console.log(newNum);

//increment operator (++x version)
// var Num2 = 500;
// var newNum2 = ++Num2 + 5;
// console.log(Num2);
// console.log(newNum2);

//decrement operator (x-- version)
// var Num3 = 10;
// var newNum3 = Num3-- + 5;
// console.log(Num3);
// console.log(newNum3);

//decrement operator (--x version)
// var Num4 = 20;
// var newNum4 = --Num4 + 10;
// console.log(Num4);
// console.log(newNum4);

//comparison operators

// var a = 10;
// var b = 50;

//equal(==)
// console.log(a == b);

//not equal (!=)
// console.log(a != b);

//greater than (>)
// console.log(a > b);

//greater than or equal (>=)
// console.log(a >= b);

//less than (<)
// console.log(a < b);

//less than or equal to (<=)
// console.log(a <= b);


//logical operators

// var a = 20;
// var b = -20;

//logical AND (&&)
// console.log(a > b && b > -10 && b < 0);

//logical OR (||)
// console.log((a < b) || (b < 0) || (b < -50))

//logical NOT (!)
// console.log(!true);
// console.log(!((a > 0) || (b < 0)));

//string operators

//concatenation operator
// console.log("hello world");
// console.log("hello " + "world");

// var myName = "seraj";

// console.log(myName + " muneer");
// console.log(myName + " faridy");
// console.log(myName + " muneer faridy");

//challenge 

//exponentiation operator (**)
// console.log(3**3);//3*3*3

// console.log(6 + "seraj");

// var a = 5;
// var b = 10;
// var c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

// var a = 5;
// var b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

//interview question;
// var num1 = 5;
// var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 == num2);

// var num1 = 5;
// var num2 = "5";
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 === num2);

// var num1 = 5;
// var num2 = "5";
// console.log(num1 - num2);

/**Control statement and loops */

// var tomr = "cloudy";

// if (tomr == "rain"){
//     console.log("take a raincoat");
// }
// else {
//     console.log("No need to take a raincoat");
// }

//challenge 
// var year = 2100;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year %  400 === 0) {
//             console.log(year + " is a leap year.");
//         }else {
//             console.log(year + " is not a leap year.");
//         }
//     }else {
//         console.log(year + " is a leap year.");
//     }
// }else {
//     console.log(year + " is not a leap year.");
// }

//falsy values in javascript
//0, "", null, undefined, NaN, false** is false anyway.

// if (score = 0) {
//     console.log("Yay! we won the game.");
// }else {
//     console.log("no, we lost the game.");
// }


// condition (teranry) operator
// it is the only operator that takes three operands
// var age = 19;
// if (age >= 18) {
//     console.log("You can vote.");
// }else {
//     console.log("You can't vote.");
// }
// if...else shorthand
// var age = 19; 
// console.log((age >= 18) ? "You can vote." : "You can't vote.");

//switch statement
// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;
// if (area == "circle") {
//     console.log("the area of the circle is: " + PI * r ** 2);
// }
// else if (area == "triangle") {
//     console.log("the area of a triangle is: " + (l * b) / 2);
// }
// else if (area == "rectangle") {
//     console.log("the area of a rectangle is: "+ l * b);
// }
// else {
//     console.log("please enter valid data...");
// }


//switch
// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;
// switch (area) {
//     case 'circle':
//         console.log("the area of a circle is: " + (PI * r**2));
//         break
//     case 'triangle':
//         console.log("the area of a triangle is: " + ((l * b) / 2));
//         break
//     case 'rectangle':
//         console.log("the area of a rectangle is: " + (l * b));
//         break
//     default:
//         console.log("please enter valid data...");
// }

//while loop 
//while loop checks the condition first then executes the block scope
// var num = 10;
// while (num <= 10) {
//     console.log(num);//infinite loop
// }


//do not repeat the following
// var num = 0;
//block scope
// while (num <= 100000) {
//     console.log(num);
//     num++;
// }

//do-while loop
//do-while loop executes the program first then checks if the condition is true or not and returns at least one output

//in the following code 'while loop' shoud have returned no output but do-while loop returns one value minimum even if the statement is falsy

// var num = 20;
// do{
//     debugger;
//     console.log(num);
//     num++;
// }while(num <= 30);

//for loop

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }

//challenge time
// for(var num = 8, num2= 1; num2 <= 10; num2++){
//     console.log(num + " * " + num2 + " = "  + num * num2);
// }
//solution
// for(var num = 1; num <= 10; num++){
//     var tableOf = 8;
//     console.log(tableOf + " * " + num + " = " + (tableOf * num));
// }

/**functions in javascript */
/**
 * function functionName(){
 *  statement
 * }
 */
// function definition 
// function sum(){
//     var a = 5, b = 10;
//     var total = a + b;
//     console.log(total);
// }
// sum();

// Function parameters vs Function arguments

// function sum(a, b){
//     var total = a + b;
//     console.log(total);
// }
// sum(20, 30);
// sum(10, 14);

// Function Expression 
// function sum(a, b){
//     var total = a + b;
//     console.log(total);
// }

// var funExp = sum(20, 50);


// Return Keyword
// function sum(a, b){
//     return total = a + b;
// }
// var funExp = sum(50, 30);
// console.log(funExp);

// Anonymous Function
// var funExp = function(a, b){
//     return total = a + b;
// }
// console.log("The sum of two numbers is " + funExp(30, 70));


//**************************************************************************************************************

// ECMAScript 2015
// let and const

// var myName = "Seraj Muneer Faridy";
// console.log(myName);

// myName = "Muneer Seraj Faridy";
// console.log(myName);

// Let
// let myName = "Seraj Muneer Faridy";
// console.log(myName);

// myName = "Muneer Seraj Faridy";
// console.log(myName);

// Const

// const myName = "Seraj Muneer Faridy";
// console.log(myName);
// // this will throw an error because you can not reassign a const var again.
// myName = "Muneer Seraj Faridy";
// console.log(myName);

// var - function scope;
// let and const - block scope;

// function biodata(){
//     var myFirstName = "Seraj";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Faridy";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
//     console.log("outer " + myLastName);

// }
// biodata()

// function biodata(){
//     let myFirstName = "Seraj";
//     console.log(myFirstName);

//     if(true){
//         let myLastName = "Faridy";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
// // this code will throw an error because let is block scope and it can not be used outside the curly braises in which it was defined.
//     console.log("outer " + myLastName);
// }
// // this will also throw an error because of the use of let which is block scope.
// console.log("outer outer " + myFirstName);
// biodata()

// function biodata(){
//     const myFirstName = "Seraj";
//     console.log(myFirstName);

//     if(true){
//         const myLastName = "Faridy";
//         console.log("inner " + myLastName);
//         console.log("inner " + myFirstName);
//     }
// // this code will throw an error because const is block scope and it can not be used outside the curly braises in which it was defined.
//     console.log("outer " + myLastName);
// }
// // this will also throw an error because of the use of const which is block scope.
// console.log("outer outer " + myFirstName);
// biodata()


// time = 4 hours 5 minutes


