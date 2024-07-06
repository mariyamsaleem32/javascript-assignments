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


// Step a: Take three subjects' names from the user
let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter second subject name:");
let subject3 = prompt("Enter third subject name:");

// Step b: Total marks for each subject (assuming 100 for each subject)
const totalMarksPerSubject = 100;

// Step c: Take obtained marks for the first subject from the user
let obtainedMarksSubject1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));

// Step d: Take obtained marks for the remaining two subjects from the user
let obtainedMarksSubject2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
let obtainedMarksSubject3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

// Step e: Calculate total marks and percentage
let totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
let percentage = (totalObtainedMarks / (3 * totalMarksPerSubject)) * 100;

// Display the result in a table format
document.write(`
    <h2>Result:</h2>
    <table border="1">
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarksSubject1}</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarksSubject2}</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${totalMarksPerSubject}</td>
            <td>${obtainedMarksSubject3}</td>
        </tr>
    </table>
    <br>
    <p>Total Marks Obtained: ${totalObtainedMarks}</p>
    <p>Percentage: ${percentage.toFixed(2)}%</p>
`);












