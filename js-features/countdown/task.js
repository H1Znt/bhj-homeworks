const element = document.getElementById('timer')
const timerId = setInterval(() => {
  element.textContent--

  if (element.textContent==='0') {
    clearInterval(timerId)
    alert('Вы победили в конкурсе!')
  }
}, 1000)