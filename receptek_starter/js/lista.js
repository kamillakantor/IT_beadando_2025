
import { $, $$ } from './main.js';
import { RECIPES } from './data/recipes.js';

const STORE_KEY = 'shoppingList_v1';
const QUEUE_KEY = 'pendingAddIngredients';

function load(){
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; }
  catch { return []; }
}
function save(list){ localStorage.setItem(STORE_KEY, JSON.stringify(list)); }

function uid(){ return Math.random().toString(36).slice(2,9); }

function renderItem(item){
  const li = document.createElement('li');
  li.className = 'shopping__item' + (item.done ? ' done' : '');
  li.dataset.id = item.id;
  li.innerHTML = `
    <span class="drag" title="Fogd meg és húzd">↕</span>
    <input type="checkbox" class="chk" ${item.done ? 'checked' : ''} aria-label="Kész?">
    <span class="text">${item.text}</span>
    <button class="btn btn--secondary del" aria-label="Törlés">Törlés</button>
  `;
  return li;
}

export function initShoppingList(){
  const input = $('#itemText');
  const addBtn = $('#addBtn');
  const importBtn = $('#importBtn');
  const clearDoneBtn = $('#clearDoneBtn');
  const hideDone = $('#hideDone');
  const ul = $('#shoppingList');

  let list = load();

  function sync(){
    ul.innerHTML = '';
    const filtered = hideDone.checked ? list.filter(i => !i.done) : list;
    for (const it of filtered) ul.appendChild(renderItem(it));
    save(list);
  }

  function add(text){
    if (!text.trim()) return;
    list.push({ id: uid(), text: text.trim(), done: false, createdAt: Date.now() });
    input.value = '';
    sync();
  }

  // URL param import
  const u = new URL(location.href);
  const addId = u.searchParams.get('add');
  if (addId){
    const rec = RECIPES.find(r => r.id === addId);
    if (rec){
      for (const ing of rec.ingredients){
        add((ing.qty ? ing.qty + ' ' : '') + ing.name);
      }
    }
  }

  // Queue import from recept.html
  try {
    const queued = JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]');
    if (queued.length){
      for (const t of queued) add(t);
      localStorage.removeItem(QUEUE_KEY);
    }
  } catch {}

  addBtn.addEventListener('click', () => add(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter'){ e.preventDefault(); add(input.value); }});

  ul.addEventListener('click', e => {
    const li = e.target.closest('.shopping__item');
    if (!li) return;
    const id = li.dataset.id;
    if (e.target.classList.contains('del')){
      list = list.filter(i => i.id !== id);
      sync();
    } else if (e.target.classList.contains('chk')){
      const it = list.find(i => i.id === id);
      it.done = e.target.checked;
      sync();
    }
  });

  clearDoneBtn.addEventListener('click', () => {
    list = list.filter(i => !i.done);
    sync();
  });

  hideDone.addEventListener('change', sync);

  // nagyon egyszerű drag & drop (opcionális, csak vizuális)
  let dragEl = null;
  ul.addEventListener('dragstart', e => {
    if (e.target.classList.contains('shopping__item')){
      dragEl = e.target;
      e.dataTransfer.effectAllowed = 'move';
    }
  });
  ul.addEventListener('dragover', e => {
    e.preventDefault();
    const li = e.target.closest('.shopping__item');
    if (!li || li === dragEl) return;
    const rect = li.getBoundingClientRect();
    const next = (e.clientY - rect.top) / (rect.height) > .5;
    ul.insertBefore(dragEl, next ? li.nextSibling : li);
  });
  ul.addEventListener('drop', () => {
    // új sorrend mentése
    const ids = $$('.shopping__item', ul).map(li => li.dataset.id);
    list.sort((a,b) => ids.indexOf(a.id) - ids.indexOf(b.id));
    save(list);
  });

  // inicializálás
  sync();
}
