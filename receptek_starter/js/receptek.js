
import { RECIPES } from './data/recipes.js';
import { $, $$ } from './main.js';

export function createRecipeCard(r){
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <img src="${r.image}" alt="${r.title}">
    <div class="card__body">
      <h3 class="card__title">${r.title}</h3>
      <div class="card__meta">${r.category} • ${r.time} perc • ${r.difficulty}</div>
      <p>${r.description}</p>
      <div class="card__actions">
        <a class="btn" href="recept.html?id=${encodeURIComponent(r.id)}">Részletek</a>
        <a class="btn btn--secondary" href="lista.html?add=${encodeURIComponent(r.id)}">Hozzávalók listához</a>
      </div>
    </div>
  `;
  return card;
}

export function initRecipeList(){
  const grid = $('#recipeGrid');
  const form = $('#filterForm');

  function apply(){
    const data = new FormData(form);
    const cat = data.get('category') || '';
    const diff = data.get('difficulty') || '';
    const time = Number(data.get('time')||0);
    const q = (data.get('q')||'').toLowerCase();

    grid.innerHTML='';
    let list = RECIPES.slice();

    if (cat) list = list.filter(r => r.category === cat);
    if (diff) list = list.filter(r => r.difficulty === diff);
    if (time) list = list.filter(r => r.time <= time);
    if (q)   list = list.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.name.toLowerCase().includes(q))
    );

    for (const r of list){
      grid.appendChild(createRecipeCard(r));
    }

    if (!list.length){
      const empty = document.createElement('p');
      empty.textContent = 'Nincs találat a szűrők alapján.';
      grid.appendChild(empty);
    }
  }

  form.addEventListener('input', apply);
  apply();
}
