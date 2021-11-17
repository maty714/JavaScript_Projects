function Full_Name(){

var last = document.getElementById("fName").value;
var first = document.getElementById("lName").value;


document.getElementById("fNameValue").innerHTML = first + " ";
document.getElementById("lNameValue").innerHTML = last;


}

function validateForm(){

    let x = document.forms["myForm"]["fname"].value;
        if (x == "") {
            alert("First name must be filled out");
            return false;
        }
    let y = document.forms["myForm"]["lname"].value;
        if (y == "") {
            alert("Last name must be filled out");
            return false;
        }
}



