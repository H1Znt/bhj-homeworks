const signin = document.querySelector('.signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');


if (localStorage.getItem('userId')) {
  welcomeUser(localStorage.getItem('userId'));
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();

  form.reset();

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', 'demo', 'demo');
  xhr.responseType = 'json';
  xhr.send(formData);

  xhr.addEventListener('load', () => {
    console.log(xhr)
    responseText(xhr.response);
  });
})

function responseText (response) {
  if (response.success === true) {
    localStorage.setItem('userId', response.user_id.toString())
    welcomeUser(response.user_id);
  } else {
    alert('Неверные логин/пароль')
  }
};

function welcomeUser(id) {
  signin.classList.remove('signin_active');
  userId.textContent = id;
  welcome.classList.add('welcome_active');
}
