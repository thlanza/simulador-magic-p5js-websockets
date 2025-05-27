console.log("CARD");

export class Card {
    constructor(p, data, x, y, faceUp = true) {
        this.p = p;
        this.name = data.name;
        this.type = data.type;
        this.imagePath = data.image;
        this.faceUp = faceUp
        this.backImagePath = 'assets/card_back.jpeg';
        this.img = null;
        this.backImg = null;
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 90;
        this.tapped = false;
    }

    preload() {
        this.img = this.p.loadImage(this.imagePath);
        this.backImg = this.p.loadImage(this.backImagePath);
    };
    
    render() {
        if (this.img) {
            this.p.push();
            if (this.faceUp) {   
                if (this.tapped) {
                    this.p.translate(this.x + this.width / 2, this.y + this.height / 2);
                    this.p.rotate(HALF_PI);
                    this.p.image(this.img, -this.height / 2, -this.width / 2, this.height, this.width);
                } else {
                    this.p.image(this.img, this.x, this.y, this.width, this.height);
                }
            } else {
                this.p.image(this.backImg, this.x, this.y, this.width, this.height);
            }
            this.p.pop();
        }
    }

    wasClicked(mx, my) {
        return mx > this.x && mx < this.x + this.width &&
               my > this.y && my < this.y + this.height;
    }
}