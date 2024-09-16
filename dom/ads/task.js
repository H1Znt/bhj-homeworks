const rotatorCase = [...document.querySelectorAll('.rotator__case')];
const rotator = [...document.querySelector('.rotator').children]

let currentIndex = 0;

function changeText () {
  document.querySelector('.rotator__case_active').classList.remove('rotator__case_active')
  rotator[currentIndex++ % rotator.length].classList.add('rotator__case_active')
}

setInterval(changeText, 1000)