function validateForm(){
    let x = document.forms["myform"]["fname"]
    let y = document.forms["myform"]["lname"]
    if(x == ''){
        alert("First name must be filled out")
        return false;
    }
    
    if(y == ''){
        alert("Last name must be filled out")
        return false;
    }
}

