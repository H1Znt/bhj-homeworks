const dValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list')
const arrList = Array.from(document.querySelectorAll('.dropdown__item'))

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')){
    dropdownList.classList.remove('dropdown__list_active')
  }
})

dValue.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown__list_active')
})

arrList.forEach((item) => {
  item.addEventListener('click', changeClass)
})

function changeClass (e) {
  if (e.target.closest('.dropdown__link')) {
    e.preventDefault();
  };

  if (e.target.closest('.dropdown__list_active')) {
    dValue.textContent = e.target.textContent;
    dropdownList.classList.remove('dropdown__list_active')
  }; 
}