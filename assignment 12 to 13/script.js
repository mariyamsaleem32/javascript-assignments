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
var integerOne = +prompt("Enter a integer number");
var integerTwo = +prompt("Enter a second integer number");
if (integerOne === integerTwo) {
    alert("both integers are eual");
} 
else if (integerOne > integerTwo ) {
    alert("It's largest integer");
}else {
    alert("both integers are not eual");
}

/*
3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */


/*
4. Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise */