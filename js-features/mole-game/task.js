const hole = document.querySelector('.hole-game');
const deadHole = document.getElementById('dead')
const lostHole = document.getElementById('lost')

function clickHole () {
  deadHole.textContent++
  if (deadHole.textContent === '10') {
    alert('Вы победили!')
    location.reload()
  }
}

function clickLostHole () { 
  lostHole.textContent++;
  if (lostHole.textContent === '5') {
    alert('Вы проиграли')
    location.reload()
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