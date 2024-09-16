const fontSize = [...document.querySelectorAll('.font-size')];
const bookContent = document.querySelector('.book__content');

document.querySelector('.book__controls').addEventListener('click', e => {
  if (e.target.classList.contains('font-size')) {
    e.preventDefault();
    let fontSelect = fontSize.indexOf(e.target);
    fontSize.forEach(item => item.classList.remove('font-size_active'));
    fontSize[fontSelect].classList.add('font-size_active')
    console.log(fontSelect)

    bookContent.classList.remove('book_fs-big', 'book_fs-small')
    if (fontSelect === 0) {
      bookContent.classList.add('book_fs-small')
    }
    if (fontSelect === 2) {
      bookContent.classList.add('book_fs-big')
    }
  }
})
