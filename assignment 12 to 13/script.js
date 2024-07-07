// IF...ELSE & ELSE IF STATEMENT
// TESTING SET OF CONDITIONS

/*
1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/
var charCode = prompt("Enter a character (number or string)");

    if (charCode >= 48 && charCode <= 57) {
        console.log(charCode + " is a number");
    }
    else if (charCode >= 65 && charCode <= 90) {
        console.log(charCode + " is an uppercase letter");
    }
    else if (charCode >= 97 && charCode <= 122) {
        console.log(charCode + " is a lowercase letter");
    }
    else {
        console.log(charCode + " is not a number or a letter");
    }

