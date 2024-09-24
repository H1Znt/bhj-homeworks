
// --------------- Не удалось выполнить задание ----------
// Ипользовал те же методы что и в лекциях, но без результатов 
// Стоит ли использовать обработчик событий с собтыием Progress? (xhr.upload.addEventListener('progress'))


const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE) {
      progress.value = 1;
    } else if (xhr.readyState === xhr.OPENED ) {
      progress.value = 0.2;
    } else if (xhr.readyState === xhr.LOADING  ) {
      progress.value = 0.7;
    } 

    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      form.reset()
      progress.value = 0;
      document.querySelector('.input__wrapper-desc').innerHTML = "Имя файла...";
    }
  })

  xhr.open('POST', '/form/');

  const formData = new FormData(form);

  xhr.send(formData);
})
