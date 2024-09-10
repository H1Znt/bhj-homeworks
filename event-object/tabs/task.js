const tabNavigation = Array.from(document.querySelectorAll('.tab'))
const tabContent = Array.from(document.querySelectorAll('.tab__content'))

document.querySelector('.tab__navigation').addEventListener('click', e => {
  console.log(tabNavigation.indexOf(e.target))
  console.log(e.target)
  console.log(tabNavigation)
  if (e.target.classList.contains('tab')) {
    let tabSelect = tabNavigation.indexOf(e.target);
    tabNavigation.map(item => item.classList.remove('tab_active'));
    tabNavigation[tabSelect].classList.add('tab_active')

    tabContent.map(content => content.classList.remove('tab__content_active'));
    tabContent[tabSelect].classList.add('tab__content_active')
  }
})
