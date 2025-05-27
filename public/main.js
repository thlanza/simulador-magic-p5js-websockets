import { Deck } from './Models/Deck.js';
import { Hand } from './Models/Hand.js';

let playerOneDeck, playerTwoDeck;
let playerOneHand, playerTwoHand;

const sketch = (p) => {
  let socket;

  p.preload = () => {
    playerOneDeck = new Deck(p, 50, 580); // Bottom
    playerTwoDeck = new Deck(p, 50, 30);  // Top
    playerOneDeck.preload();
    playerTwoDeck.preload();

    playerOneHand = new Hand(p, playerOneDeck, 300, 580, true); // Face up
    playerTwoHand = new Hand(p, playerTwoDeck, 300, 30, false); // Face down

    playerOneHand.generateHand();
    playerTwoHand.generateHand();
  }
  p.setup = () => {
    p.createCanvas(1800, 700);
    socket = new WebSocket(`ws://${window.location.host}`);

    socket.onopen = () => console.log('Connection opened');
    socket.onmessage = event => console.log(`Received: ${event.data}`);
    socket.onclose = () => console.log('Connection closed');
    socket.onerror = error => console.error(`Error: ${error}`);
  };

  p.draw = () => {
    p.background(34, 139, 34);

    playerOneDeck.render();
    playerTwoDeck.render();

    playerOneHand.render();
    playerTwoHand.render();
  };
};

new p5(sketch); // 