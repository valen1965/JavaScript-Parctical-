
let player = {
  name: 'Vlad',
  chips: 145
}
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('.sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');

playerEl.textContent = player.name + ': $ ' + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandonNumber();
  let secondCard = getRandonNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  cardsEl.textContent = 'Cards:  ' + [...cards].join('   ');
  renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards:  ' + [...cards].join('   ');
    sumEl.textContent = 'Sum: ' + sum;

    if (sum <= 20) {
      message = "Do you want to draw a new card ? 😃";
      
    } else if  (sum === 21) {
      message = "Wohoo! You've got Blackjack  😆";
      hasBlackjack = true;
      
    } else {
      message = "You're out of the game! 😝";
      isAlive = false;
    }
    messageEl.textContent = message;
}

function drawNewCard() {
    if(isAlive === true && hasBlackjack === false) {
      let newCard = getRandonNumber();
      cards.push(newCard);
      sum += newCard;
    } 
        
    renderGame();
}

function getRandonNumber() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
      return 10;
    } else if (randomNumber === 1) {
      return 11;
    } else {
      return randomNumber;
    }
}



