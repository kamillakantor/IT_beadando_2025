
import { $, $$ } from './main.js';

export function initForm(){
  const form = $('#submitForm');
  const out = $('#servingsOut');
  const servings = $('#servings');

  servings.addEventListener('input', () => out.textContent = servings.value);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    let ok = true;

    // egyszerű szabályok
    const name = data.get('name').trim();
    if (name.length < 3){ ok = false; $('#err-name').textContent = 'A név legalább 3 karakter.'; } else { $('#err-name').textContent=''; }

    const email = data.get('email').trim();
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)){ ok = false; $('#err-email').textContent = 'Érvénytelen e-mail formátum.'; } else { $('#err-email').textContent=''; }

    const rname = data.get('recipeName').trim();
    if (rname.length < 3){ ok = false; $('#err-recipeName').textContent = 'Adj meg legalább 3 karaktert.'; } else { $('#err-recipeName').textContent=''; }

    const cat = data.get('category');
    if (!cat){ ok = false; $('#err-category').textContent = 'Válassz kategóriát.'; } else { $('#err-category').textContent=''; }

    const t = Number(data.get('time'));
    if (!(t >= 1 && t <= 240)){ ok = false; $('#err-time').textContent = '1 és 240 perc között.'; } else { $('#err-time').textContent=''; }

    const file = form.image.files[0];
    if (file){
      if (!file.type.startsWith('image/')){ ok = false; $('#err-image').textContent = 'Csak kép tölthető fel.'; }
      else if (file.size > 2*1024*1024){ ok = false; $('#err-image').textContent = 'Max. 2 MB.'; }
      else { $('#err-image').textContent=''; }
    } else {
      $('#err-image').textContent=''; // opcionális mező
    }

    const desc = data.get('desc').trim();
    if (desc.length < 50){ ok = false; $('#err-desc').textContent = 'Min. 50 karakter szükséges.'; } else { $('#err-desc').textContent=''; }

    const terms = form.terms.checked;
    if (!terms){ ok = false; $('#err-terms').textContent = 'El kell fogadni a feltételeket.'; } else { $('#err-terms').textContent=''; }

    if (ok){
      alert('Köszönjük! A beküldés demó üzemmódban sikeres.');
      form.reset();
      out.textContent = '4';
    }
  });
}
