const hole = document.querySelector('.hole-game');
const deadHole = document.getElementById('dead')
const lostHole = document.getElementById('lost')

function clickHole () {
  deadHole.textContent++
  if (deadHole.textContent === '10') {
    alert('Вы победили!')
    deadHole.textContent = '0'
    lostHole.textContent = '0'
  }
}

function clickLostHole () { 
  lostHole.textContent++;
  if (lostHole.textContent === '5') {
    alert('Вы проиграли')
    deadHole.textContent = '0'
    lostHole.textContent = '0'
  }
}

hole.addEventListener('click', function (event) {
  if (event.target.closest('.hole_has-mole')) {
    clickHole();
  }

  if(!event.target.closest('.hole_has-mole')){
    clickLostHole();
  }
})