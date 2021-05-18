let location1 = 3;
let location2 = 4;
let location3 = 5;
let currentGuess = 'guess';
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk !== true) {
    currentGuess = prompt('Ready, aim, fire! (enter a number from 0-6)');
    // compare com algo...
    if(currentGuess < 0 || currentGuess > 6){
        alert('Error! Try again.');
    } else if(currentGuess == null){
        alert('End game...');
        isSunk = true;
    } else if(isNaN(currentGuess)){
        alert('Error! Try again.');
    }
    else{
        guesses++
        if(currentGuess == location1 || currentGuess == location2 || currentGuess == location3){
            alert('HIT!'); 
            hits++
            if(hits == 3){
                isSunk = true;
                alert('You sank my battleship!');
            }
        }else{
           alert('MISS!'); 
        }

    }
}

const stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3/guesses*100}%`
const span = document.createElement('span');
const textSpan = document.createTextNode(stats);
span.appendChild(textSpan);
document.querySelector('.statsContent').appendChild(span);