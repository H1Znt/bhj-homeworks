const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function getCookie (status) {
  const value = "; " + document.cookie;
  let parts = value.split("; " + status + "=" );
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

if (getCookie('status-modal') != 'modal-Close') {
  modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active') 
  document.cookie = 'status-modal=modal-Close';
})
