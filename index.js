var shuffle = require("./shuffle");
var deal = require("./deal");
let playerOneWins = 0;
let playerTwoWins = 0;

// initial deck
const deck = "abcdefghijklmabcdefghijklmabcdefghijklmabcdefghijklm";

const hands = deal(shuffle(deck));
console.log(hands);

let cardsOnTable = "";

//keep playing while somebody has cards in their hand
while (hands.playerOneHand.length > 0 && hands.playerTwoHand.length > 0) {
  console.log(hands.playerOneHand.charCodeAt(0));
  console.log(hands.playerTwoHand.charCodeAt(0));

  // each player plays a card

  // keep track of who played which card
  let playerOnePlayed = hands.playerOneHand.slice(0, 1);
  let playerTwoPlayed = hands.playerTwoHand.slice(0, 1);
  // keep track of the cards on the table
  cardsOnTable += playerOnePlayed + playerTwoPlayed;
  console.log(cardsOnTable);
  // remove the played cards from their hands
  hands.playerOneHand = hands.playerOneHand.slice(
    1,
    hands.playerOneHand.length
  );
  hands.playerTwoHand = hands.playerTwoHand.slice(
    1,
    hands.playerTwoHand.length
  );

  // let's see who wins

  //player one wins
  if (playerOnePlayed.charCodeAt(0) > playerTwoPlayed.charCodeAt(0)) {
    hands.playerOneHand += cardsOnTable;
    cardsOnTable = "";
    playerOneWins++;
  }
  //player two wins
  else if (playerOnePlayed.charCodeAt(0) < playerTwoPlayed.charCodeAt(0)) {
    hands.playerTwoHand += cardsOnTable;
    cardsOnTable = "";
    playerTwoWins++;
  }
  //players tie
  else {
    cardsOnTable += hands.playerOneHand.slice(0, 2);
    hands.playerOneHand = hands.playerOneHand.slice(
      2,
      hands.playerOneHand.length
    );
    cardsOnTable += hands.playerTwoHand.slice(0, 2);
    hands.playerTwoHand = hands.playerTwoHand.slice(
      2,
      hands.playerTwoHand.length
    );
  }
  console.log(cardsOnTable);
  console.log(hands);
}

console.log("Player One won this many rounds:" + playerOneWins);
console.log("Player Two won this many rounds:" + playerTwoWins);
console.log(hands.playerOneHand.length);
console.log(hands.playerTwoHand.length);
hands.playerOneHand.length > 0
  ? console.log("Player One won the game!")
  : console.log("Player Two won the game!");
console.log(hands);
