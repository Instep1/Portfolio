const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

const counters = document.querySelectorAll('.skills__item_score-info-percent'),
      lines = document.querySelectorAll('.skills__item_score-bar .skills__item_score-bar-fill');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})