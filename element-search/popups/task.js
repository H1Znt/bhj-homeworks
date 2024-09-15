const modalMain = document.getElementById('modal_main');
const modalrClose = [...document.querySelectorAll('.modal__close')]
modalMain.classList.add('modal_active')

modalMain.addEventListener('click', e => {
  if (e.target.classList.contains('show-success')) {
    modalMain.classList.remove('modal_active');
    document.getElementById('modal_success').classList.add('modal_active')
  }
})

modalrClose.forEach((item) => {
  item.addEventListener('click', e => {
    const modal = e.target.closest('.modal');
    modal.classList.remove('modal_active')
  })
})