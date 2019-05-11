var shuffle = require("./shuffle");
var deal = require("./deal");

// initial deck
const deck = "abcdefghijklmabcdefghijklmabcdefghijklmabcdefghijklm";

const hands = deal(shuffle(deck));
console.log(hands);
