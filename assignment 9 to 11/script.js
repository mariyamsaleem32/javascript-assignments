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
var remainingFuelInCar = +prompt("Enter how much litrres fuel remaining in your car");
if (remainingFuelInCar ===  "4.25litres") {
        console.log("your car is full of fuel");
    }
    else if(remainingFuelInCar <= "0.25litres"){
        console.log("Please refill the fuel in your car");
    }
    else{
        console.log("you are everage");
    }