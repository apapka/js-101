const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const rlSync = require('readline-sync');
const ROUNDS_TO_WIN = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  console.log(`You must win ${ROUNDS_TO_WIN} games to win the match.`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};
  for (let sq = 1; sq <= 9; sq++) {
    board[String(sq)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(string) {
  console.log(`=> ${string}`);
}
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}
function playerChoosesSquare(board) {
  let square = "";
  //valid square choices are the keys with values that are spaces (empty)
  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = rlSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}
function computerChoosesSquare(board) {
  let opportunity = findOpportunity(board);
  if (opportunity > 0) {
    board[opportunity] = COMPUTER_MARKER;
  } else {
    let threat = findThreat(board);
    if (threat > 0) {
      board[threat] = COMPUTER_MARKER;
    } else if (emptySquares(board).includes('5')) {
      board[5] = COMPUTER_MARKER;
    } else {
      let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
      let square = emptySquares(board)[randomIndex];
      board[square] = COMPUTER_MARKER;
    }
  }

}

function findThreat(board) {
  for (let array of WINNING_LINES) {
    let boardLine = array.map(element => board[element]);
    let threat = findThreatInLine(boardLine);
    if (threat >= 0) {
      return array[threat];
    }
  }
  return 0;
}

function findThreatInLine(line) {
  let zero = (line [0] === 'X');
  let one = (line [1] === 'X');
  let two = (line [2] === 'X');
  if (zero && one && line[2] === ' ') {
    return 2;
  } else if (zero && two && line[1] === ' ') {
    return 1;
  } else if (one && two && line [0] === ' ') {
    return 0;
  } else {
    return -1;
  }
}

function findOpportunity(board) {
  for (let winningLine of WINNING_LINES) {
    let boardLine = winningLine.map(element => board[element]);
    let opportunity = findOpportunityInLine(boardLine);
    if (opportunity >= 0) {
      return winningLine[opportunity];
    }
  }
  return 0;
}

function findOpportunityInLine(line) {
  let zero = (line [0] === 'O');
  let one = (line [1] === 'O');
  let two = (line [2] === 'O');
  if (zero && one && line[2] === ' ') {
    return 2;
  } else if (zero && two && line[1] === ' ') {
    return 1;
  } else if (one && two && line [0] === ' ') {
    return 0;
  } else {
    return -1;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}
function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}
function joinOr(array, delimiter = ', ', word = 'or') {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return String(array[0]);
  } else if (array.length === 2) {
    return `${array[0]} ${word} ${array[1]}`;
  }
  let returnString = "";

  for (let idx = 0; idx < array.length - 1; idx++) {
    returnString += array[idx] + delimiter;
  }
  returnString += word + " " + array [array.length - 1];
  return returnString;
}

function startMatch() {
  let playerScore = 0;
  let computerScore = 0;
  while (true) {
    let board = initializeBoard();
    playGame(board);
    displayBoard(board);
    declareWinner(board);
    if (detectWinner(board) === 'Player') {
      playerScore += 1;
    } else if (detectWinner(board) === 'Computer') {
      computerScore += 1;
    }
    if (playerScore === ROUNDS_TO_WIN) {
      prompt(`Player won! Final score ${playerScore} to ${computerScore}`);
      break;
    } else if (computerScore === ROUNDS_TO_WIN) {
      prompt(`Computer won! Final score ${computerScore} to ${playerScore}`);
      break;
    }
    printCurrentScores(playerScore, computerScore);
    prompt("Continue? Y or N");
    let answer = rlSync.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }

  prompt("Thanks for playing Tic Tac Toe!");
}
function playGame(board) {
  while (true) {
    displayBoard(board);
    console.log("Starting new game.");

    playerChoosesSquare(board);
    if (boardFull(board) || someoneWon(board)) break;

    computerChoosesSquare(board);
    if (boardFull(board) || someoneWon(board)) break;
  }
}
function declareWinner(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}
function printCurrentScores(playerScore, computerScore) {
  prompt(`Current score:`);
  prompt(`Player: ${playerScore}`);
  prompt(`Computer: ${computerScore}`);
  prompt(`First to ${ROUNDS_TO_WIN} wins the match!`);
}

while (true) {
  startMatch();
  prompt('Play another match? Y or N');
  let answer = rlSync.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

