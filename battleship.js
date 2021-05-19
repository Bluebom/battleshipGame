let location1 = (Math.random()*6).toFixed(0);
let location2 = location1;
while(location2 == location1){
    location2 = (Math.random()*6).toFixed(0);
};
let location3 = location2;
while (location3 == location2) {
    location3 = (Math.random()*6).toFixed(0);
    if(location3 == location1) {
        location3 = (Math.random()*6).toFixed(0);  
    }
};
let currentGuess = 'guess';
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk !== true) {
    currentGuess = prompt('Ready, aim, fire! (enter a number from 0-6)');
    // compare com algo...
    if(currentGuess < 0 || currentGuess > 6){
        alert('Please enter a valid cell number.');
    } else if(currentGuess == null){
        alert('End game...');
        guesses = 'você nem tentou';
        isSunk = true;
    } else if(isNaN(currentGuess)){
        alert('Please enter with a number. (like: 0 or 2)');
    }
    else{
        guesses++
        if(currentGuess == location1 || currentGuess == location2 || currentGuess == location3){
            alert('HIT!'); 
            hits++
            switch(currentGuess) {
                case location1:
                    location1 = 7;
                    break;
                case location2:
                    location2 = 7;
                    break;
                case location3:
                    location3 = 7;
                    break;
            } 
            if(hits == 3){
                isSunk = true;
                alert('You sank my battleship!');
            }
        }else{
           alert('MISS!'); 
        }

    }
}
let stats;
if(isNaN(guesses)){
    stats = `You took 0 guesses to sink the battleship, which means you not even tried to win. The locations were ${location1}, ${location2}, ${location3}`;

} else{
    stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${(3/guesses*100).toFixed(2)}%`;
}
const span = document.createElement('span');
const textSpan = document.createTextNode(stats);
span.appendChild(textSpan);
document.querySelector('.statsContent').appendChild(span);