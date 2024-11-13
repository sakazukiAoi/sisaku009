let font;
let points;

function preload() {
  // Google Fontsなどからダウンロードしたフォントファイルを使います
  font = loadFont('ZenAntiqueSoft-Regular.ttf');
}

function setup() {
  createCanvas(600, 300);
  textSize(200);
  
  // テキストのアウトラインを取得（座標の配列）
  points = font.textToPoints('Hello', 50, 200, 192, {
    sampleFactor: 0.1,  // 点の密度（値が小さいほど点が多くなる）
    simplifyThreshold: 0  // 簡略化の度合い
  });
  
  noFill();
}

function draw() {
  background(255);
  beginShape();
  
  // テキストの各ポイントにノイズをかけて変形
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let noiseFactor = 10;
    
    // ノイズの値を計算し、それに基づいて位置を変動させる
    let x = p.x + noise(p.x * 0.05, p.y * 0.05, frameCount * 0.02) * noiseFactor;
    let y = p.y + noise(p.y * 0.05, p.x * 0.05, frameCount * 0.02) * noiseFactor;
    
    vertex(x, y);
  }
  
  endShape(CLOSE);
}