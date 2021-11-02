function myFunction(){

 var str = "Hello World";
 var result = str.fontcolor("Green");  //Displays "Hello World" and changes it green

 document.getElementById("Function").innerHTML = result;

}

function concat() {
    var str = "Hello";
    str += "world";  //Adds "World" to "Hello"
    document.getElementById("demo").innerHTML = str; 
    }