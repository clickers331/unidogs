const elementsToBeObserved = document.querySelectorAll('[data-anim="fade-in"]');
function callback(entries) {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.add('show');
      if (el.dataset.delay) el.style.transitionDelay = el.dataset.delay;
    } else {
    }
  });
}
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.75,
};

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(callback, options);
  Array.from(elementsToBeObserved).forEach((el) => observer.observe(el));
});
