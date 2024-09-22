const productsBtn = document.querySelectorAll('.product__add');
const cartProductsList = document.querySelector('.cart__products');
const productQuantityControlDec = document.querySelectorAll('.product__quantity-control_dec'); // -
const productQuantityControlInc = document.querySelectorAll('.product__quantity-control_inc'); // +

function generateCartProduct(img, value, id) {
  return `
    <div class="cart__product" data-id="${id}">
      <img class="cart__product-image" src="${img}">
      <div class="cart__product-count">${value}</div>
    </div> 
  `;
};

productQuantityControlDec.forEach(el => {
    el.addEventListener('click', e => {
      let self = e.currentTarget;
      let parent = self.closest('.product__quantity');
      let counter = parent.querySelector('.product__quantity-value').textContent;

      if (counter > 1) {
        counter--;
      }

      parent.querySelector('.product__quantity-value').textContent = counter;
    })
  })

productQuantityControlInc.forEach(el => {
  el.addEventListener('click', e => {
    let self = e.currentTarget;
    let parent = self.closest('.product__quantity');
    let counter = parent.querySelector('.product__quantity-value').textContent;

    if (counter >= 1) {
      counter++;
    }

    parent.querySelector('.product__quantity-value').textContent = counter;
    
  })
})

productsBtn.forEach(el => {
  el.addEventListener('click', e => {
    let self = e.currentTarget;
    let parent = self.closest('.product')
    let id = parent.dataset.id;
    let img = parent.querySelector('.product__image').getAttribute('src');
    let value = parent.querySelector('.product__quantity-value').textContent;

    const cards = [...document.querySelectorAll('.cart__product')].find(e => e.dataset.id === id);
    
    if (cards) {
      let counter = cards.querySelector('.cart__product-count').textContent;
      counter = Number(counter) + Number(value);
      cards.querySelector('.cart__product-count').textContent = counter;

    } else {
      cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, value, id))
    }
  })
})
