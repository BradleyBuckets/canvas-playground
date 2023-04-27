let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.cursor = "default";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let fillSquare = (x, y, width, height, color) => {
  c.fillStyle = color;
  c.fillRect(x, y, width, height);
};

let strokeSquare = (x, y, width, height, color) => {
  c.strokeStyle = color;
  c.strokeRect(x, y, width, height);
};

let fillCircle = (x, y, radius, color) => {
  c.beginPath();
  c.fillStyle = color;
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.fill();
};

let strokeCircle = (x, y, radius, color) => {
  c.beginPath();
  c.strokeStyle = color;
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.stroke();
};

let randomNumber = (min, max) => {
  return Math.floor(Math.random() * max + min);
};

let createFillSquares = (amount, color) => {
  for (let i = 0; i < amount; i++) {
    let side = randomNumber(0, 100);
    let x = randomNumber(0, window.innerWidth - side * 2);
    let y = randomNumber(0, window.innerHeight - side * 2);
    fillSquare(x, y, side, side, color);
  }
};

let clearScreen = () => {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
};

let x = 50;
let dx = 1;
let y = 50;
let dy = 1;

// let animate = () => {
//   requestAnimationFrame(animate);
//   clearScreen();
//   strokeCircle(x, y, 25, "black");
//   x += 1;
// };

// animate();

class Circle {
  constructor(color) {
    this.radius = randomNumber(2, 10);
    this.x = randomNumber(0 + this.radius, window.innerWidth - this.radius * 2);
    this.dx = randomNumber(1, 5);
    this.y = randomNumber(
      0 + this.radius,
      window.innerHeight - this.radius * 2
    );
    this.dy = randomNumber(1, 5);
    this.color = color;
  }

  strokeCircle() {
    c.beginPath();
    c.strokeStyle = this.color;
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.stroke();
  }
  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

let myCircle = new Circle(50, 2, 50, 2, 25, "black");

circles = [];
for (let i = 0; i < 100; i++) {
  circle = new Circle("black");
  circles.push(circle);
}

let animate = () => {
  requestAnimationFrame(animate);
  clearScreen();
  circles.map((item) => {
    item.strokeCircle();
    item.update();
  });
};

animate();
