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
  
  // 静的な粒子を描画
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
  }
}

// 粒子クラス
class Particle {
  constructor(x, y) {
    // ランダムな範囲で初期位置を少しだけずらして配置
    this.pos = createVector(
      x + random(-5, 5), // x方向に-5から5ピクセルずらす
      y + random(-5, 5)  // y方向に-5から5ピクセルずらす
    );
  }
  
  show() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 4); // 粒子を円で描画
  }
}
