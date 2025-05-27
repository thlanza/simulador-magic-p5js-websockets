import { Card } from './Card.js';

export class Deck {
  constructor(p, x, y, count = 60) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.count = count;
    this.backImg = null;
  }

  preload() {
    this.backImg = this.p.loadImage('assets/card_back.jpeg');
  }

  drawCard() {
    if (this.count > 0) {
      this.count--;
      return true;
    }
    return false;
  }

  render() {
    if (this.count > 0) {
      if (this.backImg) {
        this.p.image(this.backImg, this.x, this.y, 60, 90);
      }
    } else {
      this.p.fill(255);
      this.p.rect(this.x, this.y, 60, 90);
      this.p.fill(0);
      this.p.textAlign(this.p.CENTER, this.p.CENTER);
      this.p.text("Empty", this.x + 30, this.y + 45);
    }
  }
}
