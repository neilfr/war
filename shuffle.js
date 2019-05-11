// return a deck that swaps the position of two randomly selected cards from the given deck
function swapcards(givendeck) {
  const index1 = Math.floor(Math.random() * 52); //random number from 0 to 51
  const card1 = givendeck.slice(index1, index1 + 1);
  const index2 = Math.floor(Math.random() * 52); //random number from 0 to 51
  const card2 = givendeck.slice(index2, index2 + 1);
  const newdeckpartial =
    givendeck.slice(0, index1) +
    card2 +
    givendeck.slice(index1 + 1, givendeck.length);
  const newdeckcomplete =
    newdeckpartial.slice(0, index2) +
    card1 +
    newdeckpartial.slice(index2 + 1, newdeckpartial.length);
  return newdeckcomplete;
}

// shuffle the deck by swapping a pair of randomly selected cards... a thousand times
function shuffle(givendeck) {
  let newdeck = givendeck;
  for (let i = 0; i < 1000; i++) {
    newdeck = swapcards(newdeck);
  }
  return newdeck;
}

module.exports = shuffle;
