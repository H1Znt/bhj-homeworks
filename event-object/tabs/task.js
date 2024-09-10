const tabNavigation = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

document.querySelector('.tab__navigation').addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    let tabSelect = tabNavigation.indexOf(e.target);
    tabNavigation.forEach(item => item.classList.remove('tab_active'));
    tabNavigation[tabSelect].classList.add('tab_active')

    tabContent.forEach(content => content.classList.remove('tab__content_active'));
    tabContent[tabSelect].classList.add('tab__content_active')
  }
})
