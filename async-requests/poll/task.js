const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState != 4) return

  if (xhr.status == 200) {
    var json = JSON.parse(xhr.responseText);
    let data = json.data;
    let title = data.title;
    let answers = data.answers;
    
    pollTitle.innerHTML = title;

    answers.forEach((e) => {
      let btn = document.createElement('button');
      btn.classList.add('poll__answer')
      btn.innerHTML = e;
      btn.addEventListener('click', () => {
        alert ("Спасибо, ваш голос засчитан!")
        location.reload();
      })
      pollAnswers.append(btn)
    })
  }
})

xhr.send();