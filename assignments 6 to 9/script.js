                        //MATH EXPRESSIONS

/*1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/
// var num = 10;
// document.write("<h1>Result: </h1>");
// document.write("The value of num is:" , num +"</br>");
// document.write("</br>");

// document.write("The value of ++num is:" , ++num  +"</br>");
// document.write("Now the value of num is:" , num +"</br>");
// document.write("</br>");

// document.write("The value of num++ is:" , num++ +"</br>");
// document.write("Now the value of num is:" , num +"</br>");
// document.write("</br>");

// document.write("The value of --num is:" , --num +"</br>");
// document.write("Now the value of num is:" , num +"</br>");
// document.write("</br>");

// document.write("The value of num-- is:" , num-- +"</br>");
// document.write("Now the value of num is:" , num +"</br>");
// document.write("</br>");

/*2. What will be the output in variables a, b & result after
execution of the following script:*/
// let a = 2 , b = 1;
// document.write("The value of a is: 2 </br>");
// document.write("The value of b is: 1 </br>");
// document.write("The value of --a is: 1 </br>");
// document.write("The value of --b is: 0 <br>");
// document.write("The value of ++b is: 1 </br>");
// document.write("The value of b-- is: 1 </br>");
// let result = --a  - --b + ++b + b--;
// document.write("The result is:" , result +"</br>");

/*3. Write a program that takes input a name from user &
greet the user.*/
// var userName = prompt("Enter your name");
// if(userName != "" && userName != null){
//     alert("asslam o aaikum" +" " + userName + " " + "welcome to our website");
// }else{
//     alert("asslam o aaikum user welcome to our website");
// }

/*Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/
// var table = prompt("Enter any number");
// if(table != null && table != "")
//    {
// result = table*1;
// document.write(table +" "+"1*="+result+"<br>");
// result = table*2;
// document.write(table +" "+"2*="+result+"<br>");
// result = table*3;
// document.write(table +" "+"3*="+result+"<br>");
// result = table*4;
// document.write(table +" "+"4*="+result+"<br>");
// result = table*5;
// document.write(table +" "+"5*="+result+"<br>");
// result = table*6;
// document.write(table +" "+"6*="+result+"<br>");
// result = table*7;
// document.write(table +" "+"7*="+result+"<br>");
// result = table*8;
// document.write(table +" "+"8*="+result+"<br>");
// result = table*9;
// document.write(table +" "+"9*="+result+"<br>");
// result = table*10;
// document.write(table +" "+"10*="+result+"<br>");
//    }
// else{
//    var table;
// table = 5*1;
// document.write("5*1="+table + "<br>");
// table = 5*2;
// document.write("5*2="+table + "<br>");
// table = 5*3;
// document.write( "5*3="+table + "<br>");
// table = 5*4;
// document.write("5*4="+table + "<br>");
// table = 5*5;
// document.write("5*5="+table + "<br>");
// table = 5*6;
// document.write("5*6="+table + "<br>");
// table = 5*7;
// document.write("5*7="+table + "<br>");
// table = 5*8;
// document.write("5*8="+table + "<br>");
// table = 5*9;
// document.write("5*9="+table + "<br>");
// table = 5*10;
// document.write("5*10="+table + "<br>");
// }

/*Take
a) Take three subjects name from user and store them in 3
different variables.*/
document.write("subject" +" "+"total marks"+" "+"obtained mark" +" "+"percentage"+"<br");
var subject1 = prompt("Enter your first subject");
var subject2 = prompt("Enter your second subject");
var subject3 = prompt("Enter your third subject");

// b) Total marks for each subject is 100, store it in another variable.
var totalMarksOfSubject = 100;

// c) Take obtained marks for first subject from user and stored it in different variable.
var obtaindMarksOfFirstSubject = +prompt("Enter your obtained marks of first subject");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
var obtaindMarksOfSecondSubject = +prompt("Enter your obtained marks of second subject");
var obtaindMarksThirdSubject = +prompt("Enter your obtained marks of third subject");


// e) Now calculate total marks and percentage and show the result in browser.
var percentage1 = obtaindMarksOfFirstSubject / totalMarksOfSubject * 100;
var percentage2 = obtaindMarksOfSecondSubject / totalMarksOfSubject * 100;
var percentage3 = obtaindMarksThirdSubject / totalMarksOfSubject * 100;
document.write(subject1 + " " +totalMarksOfSubject+" "+obtaindMarksOfFirstSubject+ " " + percentage1+"</br>");
document.write(subject2 + " " +totalMarksOfSubject+" "+obtaindMarksOfSecondSubject+" " + percentage2+"</br>");
document.write(subject3 + " " +totalMarksOfSubject+" "+obtaindMarksThirdSubject+ " " + percentage3+"</br>");











