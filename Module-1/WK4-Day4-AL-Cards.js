// Using classes, generate a deck of cards and store them in an array
//     - cards are objects and should have a value, a face, a suit, a boolean of whether they are faceUp etc.
//     - there are 13 cards per suit, values should match what they are in BlackJack (or another game),
//             - Ace, by default is equal to 11,
//             - cards 2-10 share the same face and value
//             - Jack, Queen and King have a value of 10
// - Figure out how to shuffle the array and `console.log` the top card (Hint: google it)
// - Figure out how to compare the top and bottom card and `console.log` both cards and a message
//   that says which card is bigger (or a tie)
class Cards{
  constructor(){
  }

  generateValueCardsForAllSuits(){
  let deck = [];
  const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
  const values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    for(let i = 0; i < suits.length; i++){
      for(let x = 0; x < values.length; x++ ){
      let card = {
        Value: values[x],
        Suit: suits[i]
      }
      deck.push(card);
  }
}
  return deck;
}

  shuffleCards(deck){
  for(let i = deck.length - 1; i > 0; i--){
    let j = Math.floor(Math.random()*i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
  }

}//end of class

//instantiating an object for Cards class
const deckOfCards = new Cards();
//generate value cards for all suits
let genCards = deckOfCards.generateValueCardsForAllSuits();
//shuffle all cards
let shuffledCards = deckOfCards.shuffleCards(genCards);
//print shuffled cards
console.log(shuffledCards);

//this will extract the fields from each object, and get an array containing the values
//example - shuffledCards contain all 52 cards with Value and suit pairs. We want to just extract
//values of Value field and Suit value and put them in seperate arrays.
//the map command does that exactly and it returns you an array.

let seperateSuit = shuffledCards.map(b => b.Suit);
let seperateValue = shuffledCards.map(a => a.Value);

console.log(seperateValue);
console.log("Top most card is " + seperateValue[0] + " " + seperateSuit[0] + " and bottom most card is " + seperateValue[51]+ " " + seperateSuit[51]);

if(seperateValue[0] == "Ace"){
  seperateValue[0] = 11;
}
else if (seperateValue[51] == "Ace"){
  seperateValue[51] = 11;
}
else if(seperateValue[0] == "Jack" || seperateValue[0] == "King" || seperateValue[0] == "Queen"){
  seperateValue[0] = 10;
}
else if(seperateValue[51] == "Jack" || seperateValue[51] == "King" || seperateValue[51] == "Queen"){
  seperateValue[51] = 10;
}
console.log("The card values are: " + seperateValue[0] + " , " + seperateValue[51]);
 if(seperateValue[0] === seperateValue[51]){
   console.log("The top and bottom card have the same values");
 }
 else{
 console.log("The card with maximum value is: "+ Math.max(seperateValue[0],seperateValue[51]));
 }
