function myFunction(){
    
    age = document.getElementById("age").value;
        
    if (age >= 18){

       Vote = "You are old enough to vote!";
        }
        else{

        Vote = "You are not old enough to vote!";

        }
        document.getElementById("result").innerHTML = Vote;
        
}




