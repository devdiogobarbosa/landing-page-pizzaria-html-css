const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // só vai animar 1 vez
    }
  });
}, {
  threshold: 0.1,
});

// Revela as seções com classe reveal
//Ver se faz sentido visualmente
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Revelar os cards do menu individualmente
document.querySelectorAll(".menu-list > li").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

window.onload = () => {
  window.scrollTo(0, 0);
};