// script.js — minimal JS for animations and smooth nav
document.addEventListener('DOMContentLoaded',function(){
  // reveal elements with .fade-up
  const faders = document.querySelectorAll('.fade-up');
  const reveal = (el) => { el.classList.add('fade-in'); }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        reveal(e.target);
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  faders.forEach(el => io.observe(el));

  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
