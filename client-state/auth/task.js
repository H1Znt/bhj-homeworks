const signin = document.querySelector('.signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


if (localStorage.getItem('userId')) {
  signin.classList.remove('signin_active');
  userId.textContent = localStorage.getItem('userId');
  welcome.classList.add('welcome_active');
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  try {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
        responseText(JSON.parse(xhr.responseText));
      }
    });
  } catch (error) {
    null;
  }

  form.reset();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', 'demo', 'demo');
  xhr.send(formData)
})

function responseText (response) {
  if (response.success === true) {
    createUser(response.user_id);
  } else {
    alert('Неверные логин/пароль')
  }
};

function createUser(id) {
  localStorage.setItem('userId', id.toString())
  signin.classList.remove('signin_active');
  userId.textContent = id;
  welcome.classList.add('welcome_active');
}
