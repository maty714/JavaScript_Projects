function color(){

    let inp = document.getElementById("color_input").value;
    let Sentence = " is your favorite color"


    switch(inp){
        case "Black":
            document.getElementById("favorite_color").innerHTML = inp + Sentence;
        break;
        case "Orange":
            document.getElementById("favorite_color").innerHTML = inp + Sentence;
        break;
        case "Green":
            document.getElementById("favorite_color").innerHTML = inp + Sentence;
        break;
        case "Yellow":
            document.getElementById("favorite_color").innerHTML = inp + Sentence;
        break;
        case "Blue":
            document.getElementById("favorite_color").innerHTML = inp + Sentence;
        break;
        default:
            document.getElementById("favorite_color").innerHTML = "You did not select a valid color";
    }

}