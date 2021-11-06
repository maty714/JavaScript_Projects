function add(){
    var num1 = 20;
    var num2 = 15;

    document.getElementById("Math").innerHTML = num1 * num2;
}

function subtract(){
    var num1 = 20;
    var num2 = 15;

    document.getElementById("subtract").innerHTML = num1 / num2;

}

function many(){
    var num1 = 15;
    var num2 = 20;
document.getElementById("many").innerHTML = -((num1/num2)+200);
}

function increment(){
    var x = 10;
    
    x++;
    document.getElementById("x").innerHTML = x;
    
}

function random(){
    x =  Math.floor(Math.random() * 100);
    document.getElementById("random").innerHTML = x;
}