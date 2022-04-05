function concat(){

var one = "Hi";
var two = " my name is ";
var three = " Matt ";

var total = one.concat(two,three);

document.getElementById("result").innerHTML = total;

}


function slice(){

    var sen = "Hi, my name is Matt";
    var extract = sen.slice(0,2);

    document.getElementById("result2").innerHTML = extract;
}

function upper(){

    var sentence = document.getElementById("input").value; 
    document.getElementById("result3").innerHTML = sentence.toUpperCase();

}

function search(){

    var sentence = "Hello World";
    document.getElementById("result4").innerHTML = sentence.search("World");

}

function to_String(){

    var X = 10;
    document.getElementById("result5").innerHTML = X.toString();


}


function precision(){

    var x = 45.678;
    document.getElementById("result6").innerHTML = x.toPrecision(3);

}


function fixed(){

    var x = 45.678;
    document.getElementById("result7").innerHTML = x.toPrecision(2);

}

function Value_Of(){

    var x = "Hello World";
    document.getElementById("result8").innerHTML = x.valueOf();

}