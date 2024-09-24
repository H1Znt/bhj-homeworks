const items = document.getElementById('items')
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

function createElement (chatCode, value) {
  return `
  <div class="item">
    <div class="item__code">
        ${chatCode}
    </div>
    <div class="item__value">
        ${value}
    </div>
    <div class="item__currency">
        руб.
    </div>
  </div>
  `;
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState != 4) return

  if (xhr.status == 200) {
    document.getElementById('loader').classList.remove('loader_active');
    var json = JSON.parse(xhr.responseText);
    let valute = json.response.Valute;

    for (var key in valute) {
      let objectValue = valute[key]; 
      let chatCode = objectValue.CharCode;
      let value = objectValue.Value;

      items.insertAdjacentHTML('beforeend', createElement(chatCode, value))
    }
  }
})

xhr.send();