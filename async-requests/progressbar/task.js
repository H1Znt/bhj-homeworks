const progress = document.getElementById('progress');
const file = document.getElementById('file');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', e => {
    progress.value = (e.loaded / e.total);
  })

  xhr.addEventListener('load', () => {
    console.log(`Запрос отправлен`)
  })

  xhr.addEventListener('error', () => {
    console.log(`Ошибка запроса: ${xhr.status}`)
  })

  xhr.send(formData)
})