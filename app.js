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

//sets page to ball hidden 

shell1.classList.remove('reveal');
shell2.classList.remove('reveal');
shell3.classList.remove('reveal');

// set event listeners to listen for clicks on button 1

button1.addEventListener('click', () => {
  //reset all shells on click
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
//randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
//validate 
    console.log(randomShell);
//decide which shell chick is under 
    if (randomShell === 1) {
        shell1.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
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
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
  //randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
  //validate 
    console.log(randomShell);
  //decide which shell chick is under 
    if (randomShell === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else if (randomShell === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
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
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
  //randomizes number to choose shell 
    const randomShell = Math.ceil(Math.random() * 3);
  //validate 
    console.log(randomShell);
  //decide which shell chick is under 
    if (randomShell === 3) {
        shell3.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell1.classList.add('reveal');
        losses++;
    }
  //update the wins/ loss/ totals "display results function"
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
});