
import { RECIPES } from './data/recipes.js';
import { $ } from './main.js';

function getParam(name){
  const u = new URL(location.href);
  return u.searchParams.get(name);
}

export function initRecipeDetail(){
  const id = getParam('id');
  const host = $('#recipeDetail');
  const r = RECIPES.find(x => x.id === id) || RECIPES[0];

  host.innerHTML = `
    <header>
      <img id="recipe-img" src="${r.image}" alt="${r.title}">
      <h1>${r.title}</h1>
      <div class="meta">Kategória: <strong>${r.category}</strong> • Idő: <strong>${r.time} perc</strong> • Nehézség: <strong>${r.difficulty}</strong> • Adag: <strong>${r.servings}</strong></div>
      <p>${r.description}</p>
    </header>

    <section class="ingredients">
      <h2>Hozzávalók</h2>
      <ul>
        ${r.ingredients.map(i => `<li>${i.qty? i.qty+' ' : ''}${i.name}</li>`).join('')}
      </ul>
      <button class="btn" id="addToList">Hozzávalók hozzáadása a bevásárlólistához</button>
    </section>

    <section class="steps">
      <h2>Elkészítés</h2>
      <ol>
        ${r.steps.map(s => `<li>${s}</li>`).join('')}
      </ol>
    </section>
  `;

  $('#addToList').addEventListener('click', () => {
    const queueKey = 'pendingAddIngredients';
    const payload = r.ingredients.map(i => (i.qty ? `${i.qty} ` : '') + i.name);
    localStorage.setItem(queueKey, JSON.stringify(payload));
    location.href = 'lista.html';
  });
}
