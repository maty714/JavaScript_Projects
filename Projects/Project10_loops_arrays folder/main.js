

//function 1 
function while_loop(){
  var output = "";
  var i = 1;
  while(i < 11){
    output += "<br>" + i;
    i++;
    }

  document.getElementById("while").innerhtml = output;
}

//Function 2 from step 198 of javascript course
function count_to_ten(){
  var Digit = "";
  var X = 1;
  while(X < 11){
    Digit += "<br>" + X;
    X++;
    }

document.getElementById("Counting_to_Ten").innerHTML = Digit;

}








//let house = {

//Levels: "3",
//location: "Washington D.C.",
//Color: "White",
//Has_Garage: "Yes",
//description: function() {
//  return this.Color //+ ", has " + this.Levels + " levels, and is located in " + this.location;
//  }
///

//};

  
//document.getElementById("desc").innerHTML = house.description();


