                                //variables for numbers
//question no:1
let age;
age = 17;
alert("I am"+" "+age+" "+"years old");
//question no:2
let visitor_count;
visitor_count = 15;
alert("you have visited this site"+" "+visitor_count+" "+"times");
//question no:3
let birthYear;
birthYear = 2006;
document.write("<b> my birth year is"+" "+birthYear + "</b> </br>");
//question no:4
let Visitor_name = "zuber ali";
let Product_title = "T-shits";
let order = 5;
let store_name = "hiniya Clothing.com";
document.write("<h1>"+Visitor_name+" "+"ordered"+" "+order+Product_title+" "+"from"+" "+store_name+ "</h1>");
 
                         //VARIABLE NAMES: LEGAL & ILLEGAL
//question no:1
//a.Declare 3 variables in one statement:
var variable1, variable2, variable3;

//question no:2
//b.Declare 5 legal & 5 illegal variable names:
let myVariable;
let $variable;
let _variable;
let variable123;
let my_Variable;
//Illegal Variable Names:
// let 123variable; //(cannot start with a number)
// let my Variable; //(cannot contain space)
// let my-variable; //(cannot contain hyphen)
// let var //(reserved keyword)
// let function; //(reserved keyword)

//question no:3
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.</p>");
document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name.</p>");
document.write("<p>Variable names are case-sensitive.</p>");
document.write("<p>Variable names should not be JS keywords.</p>");

                                                            //MATH EXPRESSIONS
//qustion no:1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Prompt the user to enter two numbers
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
// Add the two numbers
var sum = num1 + num2;
// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");

//qustion no:2.Repeat task1 for subtraction, multiplication, division & modulus.

//subtraction
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var sub = num1 - num2;
document.write("The subtracion of " + num1 + " and " + num2 + " is: " + sub +"<br>");

//multiplication
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var multip = num1 * num2;
document.write("The multiplication of " + num1 + " and " + num2 + " is: " + multip +"<br>");

//division
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var divide = num1 / num2;
document.write("The divition of " + num1 + " and " + num2 + " is: " + divide +"<br>");

//modulus
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var modulus = num1 % num2;
document.write("The modulus of " + num1 + " and " + num2 + " is: " + modulus +"<br>");

//question no:3. Do the following using JS Mathematic Expressions
// a. Declare a variable
var my_variable;

// b. Show the value of variable in your browser
document.write("Value after variable declaration is: " + my_variable + "<br>");

// c. Initialize the variable with some number
my_variable = 5;

// d. Show the value of variable in your browser
document.write("Initial value: " + my_variable + "<br>");

// e. Increment the variable
my_variable++;

// f. Show the value of variable in your browser
document.write("Value after increment is: " + my_variable + "<br>");

// g. Add 7 to the variable
my_variable += 7;

// h. Show the value of variable in your browser
document.write("Value after addition is: " + my_variable + "<br>");

// i. Decrement the variable
my_variable--;

// j. Show the value of variable in your browser
document.write("Value after decrement is: " + my_variable + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
var remainder = my_variable % 3;

// l. Output: “The remainder is: 0”
document.write("The remainder is: " + remainder + "<br>");

//question no:4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate
// the cost of buying 5 tickets to a movie.

// Store ticket price in a variable
var ticketPrice = 600;
// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;
// Display the result
document.write("The cost of buying 5 tickets to the movie is: " + totalCost + " PKR"+ "<br>");

//5. Write a script to display multiplication table of any number in your browser.

var table;
table = 4*1;
document.write("4*1="+table + "<br>");
table = 4*2;
document.write("4*2="+table + "<br>");
table = 4*3;
document.write( "4*3="+table + "<br>");
table = 4*4;
document.write("4*4="+table + "<br>");
table = 4*5;
document.write("4*5="+table + "<br>");
table = 4*6;
document.write("4*6="+table + "<br>");
table = 4*7;
document.write("4*7="+table + "<br>");
table = 4*8;
document.write("4*8="+table + "<br>");
table = 4*9;
document.write("4*9="+table + "<br>");
table = 4*10;
document.write("4*10="+table + "<br>");

//The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// Celsius temperature
var celsiusTemp = 25;

// Convert Celsius to Fahrenheit
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

// Output the result
console.log(celsiusTemp + "°C is " + fahrenheitTemp.toFixed(2) + "°F");

// Fahrenheit temperature
var fahrenheitTemp2 = 75;

// Convert Fahrenheit to Celsius
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

// Output the result
console.log(fahrenheitTemp2 + "°F is " + celsiusTemp2.toFixed(2) + "°C");

// question no:7 Write a program to implement checkout process of a shopping cart system for an e-commerce website.

// Store the prices and quantities of items
var priceItem1 = 25; // Price of item 1
var priceItem2 = 30; // Price of item 2
var quantityItem1 = 2; // Ordered quantity of item 1
var quantityItem2 = 1; // Ordered quantity of item 2
var shippingCharges = 5; // Shipping charges
// Calculate the total cost of each item
var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
// Calculate the subtotal (total cost of all items)
var subtotal = totalCostItem1 + totalCostItem2;
// Calculate the total cost including shipping charges
var totalCost = subtotal + shippingCharges;
// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of item 2: $" + priceItem2 + "</p>");
document.write("<p>Ordered quantity of item 1: " + quantityItem1 + "</p>");
document.write("<p>Ordered quantity of item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping charges: $" + shippingCharges + "</p>");
document.write("<hr>");
document.write("<p>Subtotal: $" + subtotal + "</p>");
document.write("<p>Total cost (including shipping charges): $" + totalCost + "</p> <br>");

//question no:8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
let marksObtained = 403;
let totalMarks = 850;
let percentage = (marksObtained / totalMarks)*100;
document.write("<h2>Result</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage+ "%</p>");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.

// Define the amounts in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;
// Define the exchange rates
var usdToPKR = 104.80;
var sarToPKR = 28;
var total_currency = (usDollars * usdToPKR)+(saudiRiyals*sarToPKR);
document.write("Total amount in Pakistani Rupees: " + total_currency + " PKR <br>");

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:

// Initialize a variable with some number
var initialNumber = 10;
// Perform arithmetic operations in a single expression
var result = (((initialNumber + 5) * 10) / 2);
// Display the result
console.log("The result is: " + result);

//11. The Age Calculator: Forgot how old someone is?
//Calculate it!

let current_year = 2024;
let birth_year = 2005;
let Age1 =  current_year - birth_year;
let Age2 = Age1 - 1;
document.write("she is either " + Age1 + " or " + Age2 + " years old.<br>");

//12. The Geometrizer: Calculate properties of a circle.

// Store the radius into a variable
var radius = 20; // You can replace this with the actual radius value
// Calculate the circumference
var circumference = 2 * Math.PI * radius;
// Calculate the area
var area = Math.PI * radius * radius;
// Output the results
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2) +"<br>");

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?

// Store your favorite snack into a variable
var favoriteSnack = "chocolate";
// Store your current age into a variable
var currentAge = 17; // For example, you can replace this with your actual age
// Store a maximum age into a variable
var maxAge = 50; // For example, you can replace this with your estimated maximum age
// Store an estimated amount per day (as a number)
var amountPerDay = 30; // For example, if you eat one chocolate bar per day
// Calculate how many snacks you would eat for the rest of your life
var yearsRemaining = maxAge - currentAge;
var snacksPerLifetime = yearsRemaining * 365 * amountPerDay;
// Output the result
document.write("You will need " + snacksPerLifetime + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

