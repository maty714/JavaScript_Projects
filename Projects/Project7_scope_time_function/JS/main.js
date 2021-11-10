function myFunction(){
    
    Age = document.getElementById("Age").value;
        
    if (Age >= 18){

    Vote = "You are old enough to vote!";
    }
    else{

    Vote = "You are not old enough to vote!";

    }
    
    document.getElementById("result").innerHTML = Vote;
        
}




