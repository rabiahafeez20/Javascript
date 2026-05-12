// 1. Declare 3 variables in one statement. 

var x=1, y=2, z=3;
    document.write("Q1: Declare 3 variables in one statement <br>");
    document.write("var x = 1, y = 2, z = 3 " + "<br>");
    document.write("the value of x is: " + x + "<br>")
    document.write("the value of y is: " + y + "<br>")
    document.write("the value of z is: " + z + "<br>")

    
    // 2. Declare 5 legal & 5 illegal variable names.
    // Legal variables

    var userName;
    var $userName;
    var _userName;
    var userName1;
    var my_1stVariable;

    // Illegal variables
    // var 1user_Name;
    // var user-Name;
    // var user name;
    // var alert;
    // var array;

// 3. Display this in your browser
// a
document.write("<h1>Rules for naming JS variables</h1> <br>");

// b
document.write("Variable names can only contain letters, $, _, number in middle or at the end of a variable name. ");
 document.write("For example $my_1stVariable <br>");


// c
  document.write("Variables must begin with a letter, $ or _. ");
  document.write("For example $name, _name or name <br>");
//   d
document.write(" Variable names are case sensitive <br>");

// e
document.write("Variable names should not be JS keywords")


