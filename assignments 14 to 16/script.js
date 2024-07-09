/* 1. Declare an empty array using JS literal notation to store
student names in future. */
// var studentNames = [];

/* 2. Declare an empty array using JS object notation to store
student names in future. */
// var studentNames = [];

/* 3. Declare and initialize a strings array. */
// var fruitName = ["apple", "banana", "cherry", "date"];
// console.log(fruitName);

/* 4. Declare and initialize a numbers array. */
// var evenNumbers = [2,4,6,8,10,12,14,16,18];
// console.log(evenNumbers);

/* 5. Declare and initialize a boolean array. */
// var questions = [true,false];
// console.log(questions);

/* 6. Declare and initialize a mixed array.  */
// var arr = [true,"mariyam",5, 9, "amna"];
// console.log(arr);

/* 7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */
// var qualificationsInPakistan = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
// for (let i = 0; i < qualificationsInPakistan.length; i++) {
//     console.log(qualificationsInPakistan[i]);
// }

/* 8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */
// var totalMarks = 500;
// var studen_names = ["dau","zuber","talha"];
// var studen_score = [487,202,345];
// var percentage1 = studen_score[0] / totalMarks * 100;
// var percentage2 = studen_score[1] / totalMarks * 100;
// var percentage3 = studen_score[2] / totalMarks * 100;
// document.write("<table border='1px'><tr><td>Name</td><td>Total marks </td><td> obtained marks</td><td>percentage</td></tr>");
// document.write("<tr><td>"+studen_names[0]+"</td>"+"<td>"+totalMarks+"</td>"+"<td>"+studen_score[0]+"</td>"+"<td>"+percentage1+"%"+"</td></tr>");
// document.write("<tr><td>"+studen_names[1]+"</td>"+"<td>"+totalMarks+"</td>"+"<td>"+studen_score[1]+"</td>"+"<td>"+percentage2+"%"+"</td></tr>");
// document.write("<tr><td>"+studen_names[2]+"</td>"+"<td>"+totalMarks+"</td>"+"<td>"+studen_score[2]+"</td>"+"<td>"+percentage3+"%"+"</td></tr></table>");

/* 9. Initialize an array with color names. Display the array
elements in your browser. */
// var colorNames = ["red","blue","green"];
// console.log(colorNames);

/* a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */
// var adding = prompt("what color you want to add to the beginning of the array");
// colorNames.unshift(adding)
// console.log(colorNames);

/* b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser. */
// var adding = prompt("what color you want to add to the end of the array");
// colorNames.push(adding)
// console.log(colorNames);

/* c. Add two more color to the beginning of the array.
Display the updated array in your browser. */
// var adding = prompt(" Enter a color and I will add this to the beginning of the array");
// colorNames.unshift(adding)
// var adding = prompt(" Enter a color and I will add this to the beginning of the array");
// colorNames.unshift(adding)
// console.log(colorNames);

/* d. Delete the first color in the array. Display the updated
array in your browser. */
// colorNames.shift()
// console.log(colorNames);

/* e. Delete the last color in the array. Display the updated
array in your browser. */
// colorNames.pop()
// console.log(colorNames);

/* f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */
// var index = +prompt("Enter the index where you want to add the color:");
// var color = prompt("Enter the color name you want to add:");
// colorNames.splice(index,0,color);
// console.log(colorNames);

/* g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */
// var deleteIndex = parseInt(prompt("Enter the index where you want to delete color(s):"));
// var deleteCount = parseInt(prompt("Enter how many colors you want to delete:"));
// colorNames.splice(deleteIndex,deleteCount);
// console.log(colorNames);

/*10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */
// var studenScores = [320,230,480,120];
// document.write("score of students:"+" "+studenScores+"</br>");
// document.write("orderd score of students:"+" "+studenScores[3]+" "+studenScores[1]+" "+studenScores[0]+" "+studenScores[2]);

/* 11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */
// var cityNames = ["karachi","lahore","islamabaad","pishawar","multan"];
// document.write("cities list:"+" "+cityNames+"</br>");
// document.write("selected cities list:"+" "+cityNames[2]+" "+cityNames[0]+"</br>");

/* 12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */
// var arr = ["This","is","my","cat"];
// console.log(arr);
// console.log(arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3]);

/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */
var arr = [];
arr.push("monitor"); // add monitor
arr.push("printer"); // add printer
arr.push("mouse");  //  add mouse
arr.push("keyboard"); // add keyboard
console.log(arr);
arr.shift();       // remove monitor
arr.shift();      //  remove printer
arr.shift();     //   remove mouse
arr.shift();    //    remove keyboard
console.log(arr); // answer emprty arry

/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out) */
var newArr = [];
newArr.unshift("monitor"); // add monitor
newArr.unshift("printer"); // add printer
newArr.unshift("mouse");  //  add mouse
newArr.unshift("keyboard"); // add keyboard
console.log(newArr);
newArr.pop();       // remove monitor
newArr.pop();      //  remove printer
newArr.pop();     //   remove mouse
newArr.pop();    //    remove keyboard
console.log(newArr); // answer emprty arry
/* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='phoneManufacturers'>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
