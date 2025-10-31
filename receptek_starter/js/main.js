
// Közös funkciók: mobilmenü toggle, segéd függvények
export const $ = (sel, root=document) => root.querySelector(sel);
export const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
if (menuBtn && nav){
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
}
