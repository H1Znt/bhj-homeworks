const applicantForm = document.getElementById('tasks__form')
const tasksList = document.getElementById('tasks__list');

function serializeForm(formNode) {
  const value = formNode.querySelector('input').value.trim()
  
  if (value) {
    createNode(value);
  }
  resetForm()

  addListener(tasksList.firstElementChild);
}

function addListener(node) {
  node.addEventListener('click', e => {
    if (e.target.classList.contains('task__remove')) {
      node.remove()
    }
  })
}

function resetForm () {
  applicantForm.reset()
}

function createNode (textContent) {
  tasksList.insertAdjacentHTML('afterbegin', `
    <div class="task">
      <div class="task__title">
        ${textContent}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div> 
  `)
}

function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
}

applicantForm.addEventListener('submit', handleFormSubmit)
