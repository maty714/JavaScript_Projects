function getReceipt(){

    var text1 = "<h3>You Ordered:</h3>"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    
    for (var i = 0; i < sizeArray.length; i++){

        if(sizeArray[i].checked){
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>"
        }
    }

    if (selectedSize ==="Personal Pizza") {
        sizeTotal = 6
    }
    if (selectedSize ==="Small Pizza") {
        sizeTotal = 8
    }
    if (selectedSize ==="Medium Pizza") {
        sizeTotal = 10
    }
    if (selectedSize ==="Large Pizza") {
        sizeTotal = 14
    }
    if (selectedSize ==="Extra Large Pizza") {
        sizeTotal = 16
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00")
    getTopping(runningTotal,text1)
}

function getTopping(runningTotal,text1){
    
    var toppingTotal = 0;
    var Veg_selectedTopping = [];
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings")
    var Veg_toppingArray = document.getElementsByClassName("VegTopping")

    for (var j = 0; j < toppingArray.length; j++){
        
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ") ");
            text1 += toppingArray[j].value + "<br>";
        }
    }

    for (var k = 0; k < Veg_toppingArray.length; k++){
        
        if (Veg_toppingArray[k].checked){
            Veg_selectedTopping.push(Veg_toppingArray[k].value); //Will add the vegatables in the topping section
            console.log("selected topping item: (" + Veg_toppingArray[k].value + ") ");
            text1 += Veg_toppingArray[k].value + "<br>";
        }
    }
     
   
    //Counts the amount of meats selected and determines the extra cost
    var toppingCount = selectedTopping.length;
    if(toppingCount > 1){
        toppingTotal = (toppingCount - 1);
    }
    else{
        toppingTotal = 0
    }

    //Counts the amount of Vegetables selected and determines the extra cost
    var Veg_toppingCount = Veg_selectedTopping.length;
    if(Veg_toppingCount > 1){
        Veg_toppingCount = (Veg_toppingCount - 1);
    }
    else{
        Veg_toppingCount = 0
    }

    runningTotal = (runningTotal + toppingTotal + Veg_toppingCount);
    console.log("total selected meat items: " + toppingCount);
    console.log("total selected vegatable items" + Veg_toppingCount)
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log(Veg_toppingCount + " Vegatable topping - 1 free topping = " + "$" + Veg_toppingCount + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}



