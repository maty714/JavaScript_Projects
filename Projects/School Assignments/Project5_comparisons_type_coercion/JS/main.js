document.write("10"+ " " +5);
document.write("<br>");
document.write(typeof "word");
document.write("<br>");
document.write(2E310);
document.write("<br>");
document.write(10>2);
document.write("<br>");
document.write(1>2);
document.write("<br>");
console.log(2+2); //outputs 4 in the browser console
console.log(2>5);
document.write("<br>");
function NAN(){

    document.getElementById("num").innerHTML = 0/0;

}

document.write("<br>");
function isn(){

    document.getElementById("tf").innerHTML = isNaN('word');

}

document.write("<br>");

var x = '10';
var y = 10;

document.write(x===y); //triple equal sign checks the whether the two conditions are of the same type and equal. This will output false as x is a string and y is a int

document.write("<br>");

document.write(10>5 || 5>6);
document.write("<br>");
document.write(!(10<5)); //not operator
document.write("<br>");
document.write(x==y);
document.write("<br>");
//note to self, operators are the same as C++

