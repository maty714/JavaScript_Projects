function dictionary(){

    var car = {
        make: "pontiac",
        model: "GrandAm",
        year: 2005,
        miles: 50000
    };

    document.getElementById("dictionaries").innerHTML = car.make;
    delete car.miles;
    document.getElementById("dictionaries").innerHTML = car.miles;
   
}