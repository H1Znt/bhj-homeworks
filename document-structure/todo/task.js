const applicantForm = document.getElementById('tasks__form')

function serializeForm(formNode) {
  const { elements } = formNode
  const data = Array.from(elements)
    .filter((item) => !!item.value)
    .map((element) => {
      const { localName, value } = element

      return { localName, value }
    })
  const element = data[0].value;

  if (element) {
    createNode(element);
  }

  resetForm()

  deleteNode(applicantForm.nextSibling)
}

function deleteNode(node) {
  node.addEventListener('click', e => {
    if (e.target.classList.contains('task__remove')) {
      node.remove()
    }
  })
}

function resetForm () {
  applicantForm.reset()
}

function createNode (data) {
  const parent = document.createElement("div");
  parent.classList.add('task');
  const child = document.createElement("div");
  const link = document.createElement("a");

  child.classList.add('task__title');
  child.innerHTML = `${data}`;

  link.href = "#";
  link.classList.add('task__remove');
  link.innerHTML = '&times';

  parent.append(child);
  parent.append(link);

  applicantForm.insertAdjacentElement('afterend',  parent)
}

function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
}

applicantForm.addEventListener('submit', handleFormSubmit)
