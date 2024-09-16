const reveal = [...document.querySelectorAll('.reveal')];

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  for (let item of reveal) {
    if (isVisible(item)) {
      item.classList.add('reveal_active')
    }
  }
}

window.addEventListener('scroll', showVisible);
showVisible();
