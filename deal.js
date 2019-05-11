// deal the deck, return two hands
function deal(givendeck) {
  let playerOneHand = "";
  let playerTwoHand = "";
  for (let i = 0; i < givendeck.length; i += 2) {
    playerOneHand += givendeck.slice(i, i + 1);
    playerTwoHand += givendeck.slice(i + 1, i + 2);
  }
  return { playerOneHand, playerTwoHand };
}

module.exports = deal;
