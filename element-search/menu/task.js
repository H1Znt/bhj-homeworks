const links = [...document.querySelectorAll('.menu__link')]

links.forEach(link => {
  link.addEventListener('click', e => {
    
    e.preventDefault();

    const menuItem = link.closest('.menu__item');
    const menuSub = menuItem.querySelector('.menu_sub');

    if (!menuSub) {
      return
    }

    menuSub.classList.toggle('menu_active')

  })
})
