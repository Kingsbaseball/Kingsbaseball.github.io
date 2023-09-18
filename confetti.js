const AMOUNT = 30000;
const INTERVAL = 50;
const COLORS = [
  "#4579FF",
  "#29EAFC",
  "#FAB1C0",
  "#50E3C2",
  "#FFFC9D",
  "#1A04B3",
  "#F81C4D"
];
const confetti = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const wW = window.innerWidth;
const wH = window.innerHeight;

const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const confetties = [];

class Confetti {
  constructor(width, height, color, speed, x, y, rotation) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.rotation = rotation;
  }

  update() {
    const y = this.y < wH ? (this.y += this.speed) : -20;
    const x = this.x + Math.sin(this.y * (this.speed / 100));
    this.x = x > wW ? 0 : x;
    this.y = y;
    ctx.fillStyle = this.color;
    ctx.save();
    ctx.translate(x + this.width / 2, y + this.height / 2);
    ctx.rotate((y * this.speed * Math.PI) / 180);
    ctx.scale(Math.cos(y / 10), 1);
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}

canvas.width = wW;
canvas.height = wH;
let animationId;

const drawConfetti = () => {
  ctx.clearRect(0, 0, wW, wH);

  confetties.forEach((confetti) => {
    confetti.update();
  });

  animationId = requestAnimationFrame(drawConfetti);
};

const renderConfetti = () => {
  let count = 0;
  let stagger = setInterval(() => {
    if (count < AMOUNT) {
      const x = random(0, wW);
      const speed = random(1.0, 2.0);
      const width = 24 / speed;
      const height = 48 / speed;
      const color = COLORS[randomInt(0, COLORS.length)];
      const confetti = new Confetti(width, height, color, speed, x, -20, 0);
      confetties.push(confetti);
    } else {
      clearInterval(stagger);
    }
    count++;
  }, INTERVAL);

  drawConfetti();
};

renderConfetti();

function stop() {
  cancelAnimationFrame(animationId);
}

setTimeout(stop, 10000);

function stop() {
  document.getElementById("canvas").style.display = "none";
}


