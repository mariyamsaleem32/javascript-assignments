/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */
// var city = prompt("Enter your city");
// if (city === "karachi") {
//     console.log("welcome to city of light");
// }
// else{
//     console.log("welcome to"+" "+city);
// }

/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */
// var gender = prompt("Enter your gender");
// if (gender === "male") {
//     console.log("good morning sir");
// }
// else if(gender === "female"){
//     console.log("Good Morning Ma'am");
// }
// else{
//     console.log("good morning"+" "+gender);
// }

/*3. Write a program to take input color of road traffic signal
from the user & show the message according to this table: */
// var colorOfTraffic = prompt("Enter a color");
// if (colorOfTraffic === "red") {
//     console.log("must stop");
// }
// else if(colorOfTraffic === "yellow"){
//     console.log("ready to move");
// }
// else if(colorOfTraffic === "green"){
//     console.log("move now");
// }
// else{
//     console.log("It's not traffic color");
// }

/*4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car” 
*/
// var remainingFuelInCar = prompt("Enter how much litrres fuel remaining in your car");
// if (remainingFuelInCar >=  "4.25litres") {
//         console.log("your car is full of fuel");
//     }
//     else if(remainingFuelInCar <= "0.25litres"){
//         console.log("Please refill the fuel in your car");
//     }
//     else{
//         console.log("you are everage");
//     }

/*
5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.*/
// a.
// var a = 4;
// if (++a === 5){
// alert("a is true");
// }
// else{
// alert("a is false");
// }
// // b.
// var b = 82;
// if (b++ === 83){
// alert("b is true");
// }
// else{
// alert("b is false");
// }
// // c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if (c === 14){
// alert("condition 4 is true");
// }
// // d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// // e.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// // f.
// if ("car" < "cat"){
// alert("car is smaller than cat");
// }

/*
6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: */
// var totalMarksOfAllSubject = 300;
// var subjectOne = +prompt("Enter your obtained marks of first subject");
// var subjectTwo = +prompt("Enter your obtained marks of second subject");
// var subjectThree = +prompt("Enter your obtained marks of third subject");
// var ObtainedMarksOftotalSubjects = subjectOne+subjectTwo+subjectThree;
// var percentage = ObtainedMarksOftotalSubjects/totalMarksOfAllSubject*100;
// document.write("<table border='2px'><tr><td>Total marks</td><td>Marks obtained</td><td>Percentage%</td><td>Grade</td><td>Remarks</td></tr>");
// if (ObtainedMarksOftotalSubjects >= 280) {
// document.write("<tr><td>"+totalMarksOfAllSubject+"<td>"+ObtainedMarksOftotalSubjects+"<td>"+percentage+"</td><td>A-1</td><td>Excellent</td></tr></table>");
// }
// else  if (ObtainedMarksOftotalSubjects = 260) {
// document.write("<tr><td>"+percentage+"</td><td>A</td><td>Good</td></tr></table>");
// }
// else if (ObtainedMarksOftotalSubjects <= 250) {
// document.write("<tr><td>"+percentage+"</td><td>B</td><td>Not bed</td></tr></table>");
// }
// else if (ObtainedMarksOftotalSubjects <= 200) {
// document.write("<tr><td>"+percentage+"</td><td>C</td><td>you need to improve</td></tr></table>");
// }
// else if (ObtainedMarksOftotalSubjects <= 180) {
// document.write("<tr><td>"+percentage+"</td><td>fail</td><td>Better luck net time</td></tr></table>");
// }

/*
7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/
// var secretNumber = 3; 
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber - 1 || userGuess === secretNumber + 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The secret number was " + secretNumber);
// }

/*
8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */
// var number = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
// if (number % 3 === 0 ) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }

/*
9. Write a program that checks whether the given input is an
even number or an odd number. */
// var number = parseInt(prompt("Enter a number to check if it's even or odd:"));
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else if (number % 2 !== 0) {
//     alert(number + " is an odd number.");
// }

/*10. Write a program that takes temperature as input and
shows a message based on following criteria
*/
// var temperature = +prompt("Enter today temperature");
// if (temperature > 40) {
//     alert("It is too hot outside");
// }
// else if (temperature > 30) {
//     alert("The Weather today is Normal");
// }
// else if (temperature > 20) {
//     alert("Today’s Weather is cool");
// }
// else if (temperature > 10 || temperature <= 10 ) {
//     alert("“OMG! Today's weather is so Cool");
// }

/*11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/
var First_Number = +prompt("Enter a first number");
var Second_Number = +prompt("Enter a second number");
var operators = prompt("Enter a operators (+, -, *, /, %)");
 if (operators === "+") {
     alert(First_Number + Second_Number);
 }
 else if (operators === "-") {
    alert(First_Number - Second_Number);
}
else if (operators === "*") {
    alert(First_Number * Second_Number);
}
else if (operators === "/") {
    alert(First_Number / Second_Number);
}
else if (operators === "%") {
    alert(First_Number % Second_Number);
}
else{
    alert("It's not on the list");
}