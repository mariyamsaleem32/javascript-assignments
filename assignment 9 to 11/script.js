/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */
var city = prompt("Enter your city");
if (city === "karachi") {
    console.log("welcome to city of light");
}
else{
    console.log("welcome to"+" "+city);
}