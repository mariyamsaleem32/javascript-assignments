// IF...ELSE & ELSE IF STATEMENT
// TESTING SET OF CONDITIONS

/*
1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/
// var charCode = prompt("Enter a character (number or string)");
//     if (charCode >= 48 && charCode <= 57) {
//         console.log(charCode + " is a number");
//     }
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log(charCode + " is an uppercase letter");
//     }
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log(charCode + " is a lowercase letter");
//     }
//     else {
//         console.log(charCode + " is not a number or a letter");
//     }

/*
2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */
// var integerOne = +prompt("Enter a integer number");
// var integerTwo = +prompt("Enter a second integer number");
// if (integerOne === integerTwo) {
//     alert("both integers are eual");
// } 
// else if (integerOne > integerTwo ) {
//     alert("It's largest integer");
// }else {
//     alert("both integers are not eual");
// }

/*
3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */
// var number = +prompt("Enter a number and I will check it is positive negative or zero");
// if (number < 0 ) {
//     alert("It is negative number");
// } 
// else if (number > 0 ) {
//     alert("It's positive number");
// }else {
//     alert("It's zero");
// }

/*
4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise */
// var char = prompt("Enter a character (single letter):");
// var lowerChar = char.toLowerCase();
// if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//     alert("The character '" + char + "' is a vowel.");
// } else {
//     alert("The character '" + char + "' is not a vowel.");
// }

/*
5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise. */
// var correctPassword = "password123";
// var userPassword = prompt("Enter your password");
// if (userPassword === null || userPassword === "") {
//     alert("Please enter your password");
// } 
// else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }

/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */
// this is correct code
// var greeting;
// var hour = 13;
// if (hour < 18) {
// alert(greeting = "Good day");
// }else{
// alert(greeting = "Good evening");
// }

/* 7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements */
var time = +prompt("Enter time in 24-hour clock format (e.g., 1900 for 7pm)");
if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2200) {
    alert("Good evening!");
} else if (time >= 2200 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time entered."); 
}
