/*  1. Declare and initialize an empty multidimensional array.
(Array of arrays) */
var emptyMultiArray = [];
/* 2. Declare and initialize a multidimensional array
representing the following matrix: */
emptyMultiArray.push[[]];
emptyMultiArray.push[[]];
emptyMultiArray[0] = [1,2];
emptyMultiArray[1] = [3,4];
console.log(emptyMultiArray); // Output: [[1, 2], [3, 4]]
/* 3. Write a program to print numeric counting from 1 to 10. */
for (let i = 1; i < 11; i++) {
document.write(i+"<br>"); 
}

/* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */
var table = +prompt("Enter a number then I create it's table");
var number = +prompt("Enter a ending number of table and enter one exta number with ending number");
for (let i = table; i < number; i = i + table) {
        console.log(i);    
       }

/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);    
   }
   
/* 6. Generate the following series in your browser. See
example output.*/
document.write("a. Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("b. Reverse counting: ");
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("c. Even: ");
for (var i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("d. Odd: ");
for (var i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}
document.write("<br>");

document.write("e. series: ");
for (var i = 1; i <= 10; i++) {
    document.write((2 * i )+"k,");
}
document.write("<br>");


/* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */
var items = ["cake","apple pie", "cookie", "chips", "patties"];{
    var searching = prompt("Enter any bakery item");
if (searching === "cake") {
    console.log(items[0]);
} else if (searching === "apple pie") {
    console.log(items[1]);
} else if (searching === "cookie") {
    console.log(items[2]);
} else if (searching === "chips") {
    console.log(items[3]);
} else if (searching === "patties") {
    console.log(items[4]);
} else {
    console.log("This item is not on the list"); 
}}

/* 8. Write a program to identify the largest number in the
given array.*/
var numbers = [10, 5, 20, 8, 15];
var largest = numbers[0]; 
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest number in the array is: " + largest);


/* 9. Write a program to identify the smallest number in the
given array. */  
var numbers = [24, 53, 78, 91, 12]
var smallest = numbers[0]; 
for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("The smallest number in the array is: " + smallest);
/* 10. Write a program to print multiples of 5 ranging 1 to
100. */