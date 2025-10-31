
import { RECIPES } from './data/recipes.js';
import { $, $$ } from './main.js';

const SCORE_KEY = 'highscores_v1';

export function initGame(){
  const select = $('#recipeSelect');
  const startBtn = $('#startBtn');
  const arena = $('#arena');
  const timeEl = $('#time');
  const scoreEl = $('#score');
  const hsEl = $('#highscores');

  // feltöltjük a receptek listáját
  for (const r of RECIPES){
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.textContent = r.title;
    select.appendChild(opt);
  }

  function saveScore(name, score){
    const list = JSON.parse(localStorage.getItem(SCORE_KEY) || '[]');
    list.push({ name, score });
    list.sort((a,b) => b.score - a.score);
    const top5 = list.slice(0,5);
    localStorage.setItem(SCORE_KEY, JSON.stringify(top5));
  }

  function renderHS(){
    const list = JSON.parse(localStorage.getItem(SCORE_KEY) || '[]');
    hsEl.innerHTML = list.map(x => `<li>${x.name}: <strong>${x.score}</strong> pont</li>`).join('');
  }
  renderHS();

  let timer = null;
  let spawnTimer = null;
  let remaining = 30;
  let score = 0;
  let targetSet = new Set();

  function reset(){
    clearInterval(timer); clearInterval(spawnTimer);
    remaining = 30; score = 0;
    timeEl.textContent = String(remaining);
    scoreEl.textContent = String(score);
    arena.innerHTML = '';
  }

  function randomPos(el){
    const rect = arena.getBoundingClientRect();
    const x = Math.max(0, Math.random()*(rect.width - 100));
    const y = Math.max(0, Math.random()*(rect.height - 40));
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }

  function spawnItem(){
    const r = Math.random();
    let label = '';
    let isCorrect = false;

    if (r < 0.6){
      // 60% eséllyel helyes hozzávaló
      const arr = Array.from(targetSet);
      label = arr[Math.floor(Math.random()*arr.length)];
      isCorrect = true;
    } else {
      // random "zavaró" elem
      const distractors = ['cukor', 'citrom', 'kakó', 'olíva', 'oregánó', 'vaj', 'víz', 'bors', 'ketchup', 'mustár'];
      label = distractors[Math.floor(Math.random()*distractors.length)];
    }

    const tag = document.createElement('button');
    tag.type = 'button';
    tag.className = 'ingredient';
    tag.textContent = label;
    tag.addEventListener('click', () => {
      if (isCorrect){ score += 1; } else { score -= 1; }
      scoreEl.textContent = String(score);
      tag.remove();
    });
    randomPos(tag);
    arena.appendChild(tag);

    // eltűnik 2s után
    setTimeout(() => tag.remove(), 2000);
  }

  startBtn.addEventListener('click', () => {
    reset();
    const id = select.value;
    const rec = RECIPES.find(x => x.id === id) || RECIPES[0];
    targetSet = new Set(rec.ingredients.map(i => i.name.toLowerCase()));

    timer = setInterval(() => {
      remaining -= 1;
      timeEl.textContent = String(remaining);
      if (remaining <= 0){
        clearInterval(timer); clearInterval(spawnTimer);
        const name = prompt('Vége! Add meg a neved a toplistához:', 'Névtelen séf');
        if (name) saveScore(name, score);
        renderHS();
      }
    }, 1000);

    spawnTimer = setInterval(spawnItem, 800);
    spawnItem();
  });
}
