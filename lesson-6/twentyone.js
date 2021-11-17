const CARD_SUITS = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
const CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const rlSync = require('readline-sync');
const WINNING_VALUE = 21;
const DEALER_STAY_VALUE = 17;

function initalizeDeck() {
  let deck = [];

  for (let a = 0; a < CARD_SUITS.length; a++) {
    let suit = CARD_SUITS[a];

    for (let b = 0; b < CARD_VALUES.length; b++) {
      let value = CARD_VALUES[b];
      deck.push([suit, value]);
    }
  }
  shuffleDeck(deck);
  return deck;
}

function shuffleDeck(deck) {
  for (let a = 0; a < deck.length; a++) {
    let randomIndex = Math.floor(Math.random() * deck.length);
    let temp = deck[randomIndex];
    deck[randomIndex] = deck[a];
    deck[a] = temp;
  }
  return deck;
}

function total(hand) {
  let sum = 0;
  let cardValues = hand.map(card => card[1]);
  for (let value of cardValues) {
    if (value === 'J' || value === 'Q' || value === 'K') {
      sum += 10;
    } else if (value === 'A') {
      sum += 11;
    } else {
      sum += Number(value);
    }
  }
  cardValues.filter(value => value === 'A').forEach(_ => {
    if (sum > WINNING_VALUE) sum -= 10;
  });
  return sum;
}

function busted(hand) {
  return total(hand) > WINNING_VALUE;
}
function prompt(string) {
  console.log(`=> ${string}`);
}
function deal(deck, playersHand, dealersHand) {
  dealersHand.push(deck.shift());
  playersHand.push(deck.shift());
  dealersHand.push(deck.shift());
  playersHand.push(deck.shift());
}
function hit(deck, hand) {
  let newCard = deck.shift();
  hand.push(newCard);
  prompt(`${cardToString(newCard)} was dealt.`);

}
function cardToString(card) {
  return `${card[1]} of ${card[0]}`;
}
function handToString(hand) {
  return hand.map(card => cardToString(card)).join(", ");
}

function playersTurn(deck, playersHand, dealersHand) {
  while (true) {
    console.log(`----------------------------------------`);
    prompt("Dealer has " + cardToString(dealersHand[0]) + " and unknown card");
    prompt("You have " + handToString(playersHand));
    let answer;
    while (true) {
      prompt('hit or stay?');
      answer = rlSync.question().trim().toLowerCase();
      if (['hit', 'stay'].includes(answer)) break;
      prompt("Sorry, you must enter 'hit' or 'stay.'");
    }
    if (answer === 'stay') break;
    console.log(`----------------------------------------`);
    hit(deck, playersHand);
    prompt(`Your cards are now ${handToString(playersHand)}`);
    if (busted(playersHand)) {
      prompt("You BUSTED! Dealer wins.");
      break;
    }
  }
}
function dealersTurn(deck, dealersHand) {
  while (total(dealersHand) < DEALER_STAY_VALUE) {
    prompt('Dealer hits!');
    hit(deck, dealersHand);
    prompt(`Dealer's cards are now ${handToString(dealersHand)}`);
  }
  console.log(`----------------------------------------`);
  if (busted(dealersHand)) {
    prompt("Dealer BUSTED! Player wins.");
  } else {
    prompt('Dealer stayed.');
    prompt(`Dealer's hand: ${handToString(dealersHand)}`);
  }
}
function determineWinner(playerScore, dealerScore) {
  if (playerScore > dealerScore) {
    return 'Player';
  } else if (dealerScore > playerScore) {
    return 'Dealer';
  } else {
    return " ";
  }
}
function declareWinner(hand1, hand2) {
  let playerScore = total(hand1);
  let dealerScore = total(hand2);
  let winner = determineWinner(playerScore, dealerScore);
  console.log(`----------------------------------------`);
  prompt(`Dealer's hand: ${handToString(hand2)}`);
  prompt(`Your hand: ${handToString(hand1)}`);
  if (winner !== " ") {
    prompt(`${winner} wins! Final score of ${playerScore} to ${dealerScore}.`);
  } else {
    prompt(`Tied game. Final score of ${playerScore} to ${dealerScore}`);
  }
  return winner;
}

let playerRoundsWon = 0;
let dealerRoundsWon = 0;
while (true) {
  console.clear();
  prompt('Welcome to 21! Best of 5 wins!');
  prompt(`Current score: \n Player: ${playerRoundsWon} \n Dealer: ${dealerRoundsWon}`);
  let deck = initalizeDeck();
  let playersHand = [];
  let dealersHand = [];
  deal(deck, playersHand, dealersHand);
  playersTurn(deck, playersHand, dealersHand);
  if (!busted(playersHand)) {
    console.log(`----------------------------------------`);
    prompt("You stayed. Now it is the dealer's turn.");
    prompt(`Dealers hand: ${handToString(dealersHand)}`);
    dealersTurn(deck, dealersHand);
    if (!busted(dealersHand)) {
      let winner = declareWinner(playersHand, dealersHand);
      if (winner === 'Player') {
        playerRoundsWon += 1;
      } else if (winner === 'Dealer') {
        dealerRoundsWon += 1;
      }
    } else {
      playerRoundsWon += 1;
    }
  } else {
    dealerRoundsWon += 1;
  }
  if (playerRoundsWon === 3) {
    prompt("Player won best of 5!");
    break;
  } else if (dealerRoundsWon === 3) {
    prompt("Dealer won best of 5!");
    break;
  }
  prompt(`Current score: \ndealer: ${dealerRoundsWon} \nyou: ${playerRoundsWon} `);
  prompt("Continue for best of 5? Y or N");
  let answer;
  while (true) {
    answer = rlSync.question().toLowerCase()[0];
    if (['y', 'n'].includes(answer)) break;
    prompt("Must answer yes or no.")
  }
  if (answer !== 'y') break;
}
prompt("Thanks for playing 21!");
