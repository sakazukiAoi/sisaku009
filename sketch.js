let font;
let points = [];
let particles = [];

function preload() {
  font = loadFont('ZenAntiqueSoft-Regular.ttf');
}

function setup() {
  createCanvas(800, 400);
  textSize(200);
  textAlign(CENTER, CENTER);
  
  // テキストのアウトラインを取得
  points = font.textToPoints('Hello', 100, 250, 200, {
    sampleFactor: 0.1
  });
  
  // 各アウトラインポイントに対応する粒子を生成
  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    particles.push(new Particle(pt.x, pt.y));
  }
}

function draw() {
  background(255);
  
  // 粒子を更新して描画
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}

// 粒子クラス
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);   // 初期位置
    this.vel = p5.Vector.random2D(); // ランダムな方向への速度
    this.vel.mult(random(1, 3));     // 拡散速度
    this.alpha = 255;                // 透明度
  }
  
  update() {
    // 速度に基づいて位置を更新
    this.pos.add(this.vel);
    //this.alpha -= 5; // 徐々に透明になる
  }
  
  show() {
    noStroke();
    fill(0, this.alpha);
    ellipse(this.pos.x, this.pos.y, 4); // 粒子を円で描画
  }
}
