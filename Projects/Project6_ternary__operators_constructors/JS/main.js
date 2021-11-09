function myFunction(){

    var Height, Ride;


    Height = document.getElementById("height").value;
    Ride = (Height < 52) ? "Not tall enough to ride": "Tall enough to ride";
    document.getElementById("ride").innerHTML = Ride;


}

document.write("<br>");

function old_Enough(){

    var Legal_Age, pass;


    Legal_Age = document.getElementById("age").value;
    pass = (Legal_Age >= 18) ? "Old enought to vote": "Not old enough to vote";
    document.getElementById("pass").innerHTML = pass;

}


function Vehicle(Make,Model,Year,Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawl", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Printo", 1971, "Mustard");

function myFunction() {

    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drive a " + Erik.Vehicle_Make + " " + Erik.Vehicle_Model + " and is the color "
    + Erik.Vehicle_Color
}

class Animals {

   
    Animals (type, noise){
        this.Species = type;
        this.sound = noise;
        
    }

    description(){
     
        console.log("The " + this.Species + " goes " + this.sound);

    }

}


var Animal1 = new Animals("Lion", "Roar");

