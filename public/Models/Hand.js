import { Card } from './Card.js';

export class Hand {
  constructor(p, deck, x, y, isPlayerView = true) {
    this.p = p;
    this.deck = deck;
    this.cards = [];
    this.x = x;
    this.y = y;
    this.isPlayerView = isPlayerView;
  }

  preload() {
    // Empty
  }

  generateHand() {
    const options = [
      { name: "Lightning Bolt", type: "Instant", image: "assets/Lightning_Bolt.jpg" },
      { name: "Mountain", type: "Land", image: "assets/Mountain.jpg" }
    ];
    for (let i = 0; i < 7; i++) {
      if (this.deck.drawCard()) {
        const data = options[Math.floor(Math.random() * options.length)];
        const card = new Card(this.p, data, this.x + i * 70, this.y, this.isPlayerView);
        card.preload();
        this.cards.push(card);
      }
    }
  }

  render() {
    for (let card of this.cards) {
      card.render();
    }
  }
}
