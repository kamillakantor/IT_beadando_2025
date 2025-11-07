const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

// Retina támogatás
const dpr = window.devicePixelRatio || 1;
const logicalWidth = canvas.width;
const logicalHeight = canvas.height;
canvas.width = logicalWidth * dpr;
canvas.height = logicalHeight * dpr;
ctx.scale(dpr, dpr);

// Alapértékek
const layerHeight = 30;
let layers = [];
let currentLayer = null;
let speed = 2.5;
let direction = 1;
let gameState = "playing";
let targetY = 0;
let dropSpeed = 8;
let score = 0;

const cakeColors = [
  "#ffe4e1",
  "#ffeaa7",
  "#baffc9",
  "#a0e9ff",
  "#d4bfff",
  "#ffb3c6"
];

// <<< ÚJ: kamera eltolás számítása >>>
function getCameraOffsetY() {
  if (!currentLayer) return 0;
  const currentCenterY = currentLayer.y + currentLayer.height / 2;
  const screenCenterY = logicalHeight / 2;
  return screenCenterY - currentCenterY;
}

function createBase() {
  layers = [];
  const baseWidth = 260;
  const baseX = (logicalWidth - baseWidth) / 2;
  const baseY = logicalHeight - 60;

  layers.push({
    x: baseX,
    y: baseY,
    width: baseWidth,
    height: layerHeight,
    color: "#f8c291"
  });
}

function spawnNewLayer() {
  const prev = layers[layers.length - 1];
  const width = prev.width;
  const fromLeft = Math.random() < 0.5;

  const startX = fromLeft ? -width : logicalWidth;
  const y = prev.y - layerHeight;

  const color = cakeColors[(layers.length - 1) % cakeColors.length];

  currentLayer = {
    x: startX,
    y: y,
    width: width,
    height: layerHeight,
    color: color
  };

  direction = fromLeft ? 1 : -1;
  gameState = "playing";
}

function resetGame() {
  score = 0;
  scoreEl.textContent = score;
  speed = 2.5;
  gameState = "playing";
  createBase();
  spawnNewLayer();
}

function roundedRect(x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawPlate() {
  const plateY = logicalHeight - 20;
  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = "rgba(0,0,0,0.15)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 2;
  roundedRect(logicalWidth / 2 - 120, plateY, 240, 10, 10);
  ctx.fill();
  ctx.restore();
}

function drawBackground() {
  ctx.clearRect(0, 0, logicalWidth, logicalHeight);

  const offsetY = getCameraOffsetY();
  ctx.save();
  ctx.translate(0, offsetY);

  // konfetti
  for (let i = 0; i < 10; i++) {
    const x = (i * 37) % logicalWidth;
    const y = (i * 73) % (logicalHeight / 2);
    ctx.globalAlpha = 0.12;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = cakeColors[i % cakeColors.length];
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  drawPlate();
  ctx.restore();
}

function drawLayers() {
  const offsetY = getCameraOffsetY();
  ctx.save();
  ctx.translate(0, offsetY);

  layers.forEach((layer, index) => {
    ctx.save();
    ctx.fillStyle = layer.color;
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;
    roundedRect(layer.x, layer.y, layer.width, layer.height, 10);
    ctx.fill();

    if (index > 0) {
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = "#fff5f5";
      roundedRect(
        layer.x + 6,
        layer.y + layer.height - 8,
        layer.width - 12,
        6,
        4
      );
      ctx.fill();
    }
    ctx.restore();
  });

  if (currentLayer) {
    ctx.save();
    ctx.fillStyle = currentLayer.color;
    ctx.shadowColor = "rgba(0,0,0,0.15)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 4;
    roundedRect(
      currentLayer.x,
      currentLayer.y,
      currentLayer.width,
      currentLayer.height,
      10
    );
    ctx.fill();

    ctx.globalAlpha = 0.85;
    ctx.fillStyle = "#fff5f5";
    roundedRect(
      currentLayer.x + 6,
      currentLayer.y + currentLayer.height - 8,
      currentLayer.width - 12,
      6,
      4
    );
    ctx.fill();
    ctx.restore();
  }

  ctx.restore();
}

function update() {
  if (gameState === "playing" && currentLayer) {
    currentLayer.x += direction * speed;

    if (currentLayer.x + currentLayer.width > logicalWidth) {
      currentLayer.x = logicalWidth - currentLayer.width;
      direction = -1;
    } else if (currentLayer.x < 0) {
      currentLayer.x = 0;
      direction = 1;
    }
  } else if (gameState === "dropping" && currentLayer) {
    currentLayer.y += dropSpeed;
    if (currentLayer.y >= targetY) {
      currentLayer.y = targetY;
      handleLanding();
    }
  }

  drawBackground();
  drawLayers();

  if (gameState === "gameover") drawGameOver();

  requestAnimationFrame(update);
}

function drawGameOver() {
  // FONTOS: itt NINCS kamera-eltolás, hogy mindig a képernyő közepén legyen
  ctx.save();
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillRect(0, 0, logicalWidth, logicalHeight);

  ctx.fillStyle = "#ffffff";
  roundedRect(
    logicalWidth / 2 - 110,
    logicalHeight / 2 - 70,
    220,
    120,
    16
  );
  ctx.fill();

  ctx.fillStyle = "#333";
  ctx.textAlign = "center";
  ctx.font = "18px system-ui";
  ctx.fillText("Vége a játéknak!", logicalWidth / 2, logicalHeight / 2 - 20);
  ctx.font = "14px system-ui";
  ctx.fillText("Elért szint: " + score, logicalWidth / 2, logicalHeight / 2 + 5);
  ctx.fillText(
    "Kattints az Újrakezdésre!",
    logicalWidth / 2,
    logicalHeight / 2 + 30
  );
  ctx.restore();
}

function handleLanding() {
  const prev = layers[layers.length - 1];
  const curr = currentLayer;

  const left = Math.max(curr.x, prev.x);
  const right = Math.min(curr.x + curr.width, prev.x + prev.width);
  const overlap = right - left;

  if (overlap <= 0) {
    gameState = "gameover";
    return;
  }

  curr.x = left;
  curr.width = overlap;
  layers.push(curr);
  score = layers.length - 1;
  scoreEl.textContent = score;
  speed += 0.15;

  spawnNewLayer();
}

function dropLayer() {
  if (gameState !== "playing" || !currentLayer) return;
  gameState = "dropping";
  const prev = layers[layers.length - 1];
  targetY = prev.y - layerHeight;
}

// Események
canvas.addEventListener("click", () => {
  if (gameState === "gameover") return;
  dropLayer();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    if (gameState === "gameover") return;
    dropLayer();
  }
});

restartBtn.addEventListener("click", resetGame);

// Indítás
resetGame();
update();
