// import functions and grab DOM elements

//all shells

const chick1 = document.getElementById('chick-1');
const chick2 = document.getElementById('chick-2');
const chick3 = document.getElementById('chick-3');

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

button1.addEventListener('click', () =>{
//validate 
console.log('clickkkkkkkkks!');
  //reset shells
const randomShell = Math.ceil(Math.random() * 3);
//validate 
console.log(randomShell);
//decide which shell chick is under 
if (randomShell === 1){
  chick1.classList.remove('chick');
  wins++;
}
//if random Shell = 1 then increment value of wins

//else increment the losses

//update the wins/ loss/ totals
winSpan.textContent = wins;
lossesSpan.textContent = losses;
totalSpan.textContent = wins + losses;
});




// set event listeners to listen for clicks on button 1


// set event listeners to listen for clicks on button 1






  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
