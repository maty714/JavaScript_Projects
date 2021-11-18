let activePlayer = 'X';

let selectedSquares = [];


function placeXorO(squareNumber){

    if(!selectedSquares.some(element=>element.includes(squareNumber))){

        let select = document.getElementById(squareNumber);
        
        if (activePlayer ==='X'){
            select.style.backgroundImage = 'url("./Images/x.png")';
        }
        else {
            select.style.backgroundImage = 'url("./Images/0.png")';
        }
    }

    selectedSquares.push(squareNumber + activePlayer);

    checkWinConditions();

    if (activePlayer === 'X'){

        activePlayer = 'O';
    }
    else{
        activePlayer = 'X';
    }

    audio('./Media/place.mp3');
    
    
    if (activePlayer === 'O'){
        /*This function disables clicking for computer choice */
        disableClick();
    } 
    /*This function waits 1 second before computer places image and enables click */
    setTimeout(function(){computersTurn(); }, 1000);
    
    /*Returning True is needed for the computersTurn() to work */
    return true;
}

function computersTurn(){
    
    let success = false;
    let pickASquare;

    while(!success){

        pickASquare = String(Math.floor(math.random() * 9));

        if (placeXorO(pickASquare)){

            placeXorO(pickASquare);
            success= true;
        }
    }
}

function checkWinConditions(){

    if (arrayIncludes('0X','1X', '2X')){
        drawWinLine(50,100,558,100)
    }
    else if (arrayIncludes('0X','1X', '2X')){
        

    }

}

function arrayIncludes(squareA, squareB, squareC){


    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c  = selectedSquares.includes(squareC)

    if (a===true && b === true && c===true){

        return true;
    }
}



