// React Poker

// GOAL
// When the application is launched, show five face down cards, and a button that
// reads "Deal a new hand". Each time the "deal a new hand" button is clicked, show
// five random, unique playing cards.

// HINTS
// - The initial state of the state object is already set for you.
// - You can create an array of JSX elements and add them to the return of the render() function in
// - one line. The framework for doing this is already there.
// - Add an element to an array by using the .push() function
// - Grab the few n elements of an array by using the .splice() function, e.g. myArray.splice(0, n)
// - The card images follow this convention: http://golearntocode.com/images/cards/8_of_diamonds.png
// - Calling shuffledDeck() will give you an array of 52 strings, representing the rank and suit of
//   each card, in random order
// - Start by getting the five face down cards to show, then use the React developer tools in Chrome
//   to manipulate state manually, then write an event handler function and corresponding button.
import React, { Component } from 'react';
import shuffledDeck from './ShuffledDeck';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hand: ["face_down", "face_down", "face_down", "face_down", "face_down"]
    }
  }

//Function selects cards and modifies the state when button is clicked
    dealHand() {
      let fullDeck = shuffledDeck();
      let newCards = fullDeck.splice(0,5)
      this.setState ({
        hand: [newCards[0], newCards[1], newCards[2], newCards[3], newCards[4]]
      })
    }

    render() {
//Creates array of image locations.
      let cards = [];
      for (var i = 0; i < 5; i++) {
        let image = "http://golearntocode.com/images/cards/"+this.state.hand[i]+".png"
        cards.push(<img src = {image} />)
      };
//Returns array of images and changes array when button is clicked.
      return (
        <div className="App">
          <h1>
            {cards}
          </h1>
          <p><button onClick={() => this.dealHand()}>Deal a hand</button></p>
        </div>
      );

  }
}

export default App;
