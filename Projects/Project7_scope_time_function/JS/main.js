function myFunction(){
    
    var time = new Date().getHours();
    
    if (time < 12 && time > 0){

    Greeting = "It is Morning";
    }
    
    else if (time >= 12 && time < 18)
    {
        Greeting = "It is afternoon";

    }
    else{

    Greeting = "It is night";

    }

    
    document.getElementById("result").innerHTML = Greeting;
        
}




