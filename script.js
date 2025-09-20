document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{
  document.querySelector('.menu').classList.remove('open');
}));
