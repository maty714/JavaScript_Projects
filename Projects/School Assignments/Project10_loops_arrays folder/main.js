

//function 1 
function while_loop(){
  var output = "";
  var i = 1;
  while(i < 11){
    output += "<br>" + i;
    i++;
    }

  document.getElementById("while").innerHTML = output;
}



function for_loop(){
  var output = "";
  var i;
  for (i = 0; i < 10; i++){

    output += "<br>" + i;


  }

  document.getElementById("for").innerHTML = output;
}



function myArray(){
  output = "";
  var arr = [1,2,3,4,5,6,7,8,9,10];
  var i;

  for (i = 0; i < arr.length; i++){

    output += "<br>" + arr[i];

  }

  document.getElementById("array").innerHTML = output;
}




let house = {

Levels: "3",
location: "Washington D.C.",
Color: "White",
Has_Garage: "Yes",
description: function() {
  return this.Color //+ ", has " + this.Levels + " levels, and is located in " + this.location;
  }


};
 
document.getElementById("desc").innerHTML = house.description();


