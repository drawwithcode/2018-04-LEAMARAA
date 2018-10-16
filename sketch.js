var myBubble;
let bubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);

    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(0);
  // myBubble.display();
  // myBubble.move();
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  fill(0);
  stroke(255, 0, 160);
  textSize(40);
  text('Caresses the bubbles', 100, 100)
}

function mouseDragged() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].click();
  }
}

function Bubble(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = 0;

  //methods

  this.click = function() {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.r) {
      // console.log(2);
      this.color = random(255);
    }
  }

  this.move = function() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }

  this.display = function() {
    fill(this.color);
    strokeWeight(2);
    stroke(255);
    ellipse(this.x, this.y, this.r);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
