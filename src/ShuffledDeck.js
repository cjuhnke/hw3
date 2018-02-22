export default function() {
  // builds the deck, in order
  let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
  let suits = ["clubs", "diamonds", "hearts", "spades"];
  let deck = [];
  for (let x=0; x<ranks.length; x++) {
    for (let y=0; y<suits.length; y++) {
      deck.push(ranks[x] + "_of_" + suits[y]);
    }
  }
  // shuffles the deck
  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}
