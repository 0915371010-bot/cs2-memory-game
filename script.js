console.log("Script started");
//variable to track guesses
let guesses = 0;

// var to track 1st card pick(empty to start)
let firstCardId = "";
let secondCardId = "";

function flipCard(cardId) {
    //prin click to console to test that click works
    console.log("click");
    //get html card
    let card = document.getElementById(cardId);
    // change color to flip card and reveal text
    card.style.color = "black";
    card.style.backgroundColor = "aqua";

    // check which pick it is
    if (firstCardId == "") {
        //store 1st card id
        firstCardId = cardId;
        console.log("first = " + firstCardId);
    }
    else {
        //store 2nd card id
        secondCardId = cardId;
        //checkForMatch();
        setTimeout(checkForMatch, 1000);
        console.log("second = " + secondCardId);
    }
   
}

function checkForMatch() {
    // Get the card elements
    let firstCard = document.getElementById(firstCardId);
    let secondCard = document.getElementById(secondCardId);
    //check if the text matches
    if (firstCard.innerText == secondCard.innerText) {
        // Green bg color to show match
        firstCard.style.backgroundColor = "green";
        secondCard.style.backgroundColor = "green";
      
    }
    else {
        // card dont match
        firstCard.style.color = "orange";
        firstCard.style.backgroundColor = "orange";
        secondCard.style.color = "orange";
        secondCard.style.backgroundColor = "orange";
    }

    // reset for next pick
    firstCardId = "";
    secondCardId = "";
}