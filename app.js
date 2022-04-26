// import functions and grab DOM elements

//all shells

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

//all buttons 

const button1 = document.getElementById('shell-button-1');
const button2 = document.getElementById('shell-button-2');
const button3 = document.getElementById('shell-button-3');

//all totals 

const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

// let state

let wins = 0;
let losses = 0;



// set event listeners to listen for clicks on button 1

button1.addEventListener('click', () => {
  //reset all shells on click
    chick1.classList.add('chick');
    chick2.classList.add('chick');
    chick3.classList.add('chick');
//randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
//validate 
    console.log(randomShell);
//decide which shell chick is under 
    if (randomShell === 1) {
        chick1.classList.remove('chick');
        wins++;
    } else if (randomShell === 2) {
        chick2.classList.remove('chick');
        losses++;
    } else {
        chick3.classList.remove('chick');
        losses++;
    }
//update the wins/ loss/ totals
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

//set event listeners to listen for clicks on button 2

button2.addEventListener('click', () => {
    //reset all shells on click
    chick1.classList.add('chick');
    chick2.classList.add('chick');
    chick3.classList.add('chick');
  //randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
    console.log(randomShell);
  //decide which shell chick is under 
    if (randomShell === 2) {
        chick2.classList.remove('chick');
        wins++;
    } else if (randomShell === 1) {
        chick1.classList.remove('chick');
        losses++;
    } else {
        chick3.classList.remove('chick');
        losses++;
    }
  //update the wins/ loss/ totals
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});

//set event listeners to listed for clicks on button 3
button3.addEventListener('click', () => {
    //reset all shells on click
    chick1.classList.add('chick');
    chick2.classList.add('chick');
    chick3.classList.add('chick');
  //randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
  //decide which shell chick is under 
    if (randomShell === 3) {
        chick3.classList.remove('chick');
        wins++;
    } else if (randomShell === 2) {
        chick2.classList.remove('chick');
        losses++;
    } else {
        chick1.classList.remove('chick');
        losses++;
    }
  //update the wins/ loss/ totals
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});