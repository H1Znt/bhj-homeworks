const hasTooltip = [...document.querySelectorAll(".has-tooltip")];

hasTooltip.forEach((el) => {
  createNode(el)
})

hasTooltip.forEach((item) => {
  item.addEventListener('click', e => {
    e.preventDefault();
    let arr = [...document.querySelectorAll('.tooltip')]
    for (let i = 0; i<arr.length; i++) {
      if (item.nextSibling === arr[i]) {
        arr[i].classList.toggle('tooltip_active')
    }
    }
  })
})

function createNode (el) {
  if (!el) return;

  let rect = el.getBoundingClientRect();
  let title = el.title;

  let newDiv = document.createElement("div")

  newDiv.textContent = `${title}`;
  newDiv.classList.add('tooltip');
  newDiv.style.left = rect.x + "px";
  newDiv.style.top = rect.y + rect.clientHeight + "px";

  el.insertAdjacentElement("afterend", newDiv)
}

