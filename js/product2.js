'use strict';

const main = () => {
  const productsData = [
    {
      image: '/images/product-2/image-25@2x.png',
      name: 'Chuck 70 Converse Rbbon',
      price1: '48,45',
      price2: '64,59'
    },
    {
      image: '/images/product-2/image-25-1@2x.png',
      name: 'Chuck 70 De Luxe Squared',
      price1: '48,45',
      price2: '64,59'
    },
    {
      image: '/images/product-2/image-25-2@2x.png',
      name: 'Chuck 70 Plus',
      price1: '48,45',
      price2: '64,59'
    },
    {
      image: '/images/product-2/image-25-3@2x.png',
      name: 'Chuck 70 Hacked Heel',
      price1: '48,45',
      price2: '64,59'
    },
  ]
  const fixProduct2 = () => {
    const addProduct = ({ image, name, price1, price2 }) => {
      const div = document.createElement('div')
      price1 = price1.split(',')
      price2 = price2.split(',')
      div.className = 'image-25-parent'
      div.innerHTML = `
      <img class="image-25-icon" loading="lazy" alt="" src="${image}" />
      <div class="chuck-de-luxe-squared">
        <div class="divider"></div>
        <div class="chuck-70-converse-container">
          <span>
            <p class="chuck-70-converse-rbbon">
              <span>
                <span>${name}</span>
              </span>
            </p>
            <p class="p1">
              <span>
                <span class="span4"> $${price1[0]},</span>
              </span>
              <span class="span5">
                <span class="span6">${price1[1]} - </span>
                <span class="span7">$${price2[0]},</span>
                <span class="span8">${price2[1]}</span>
              </span>
            </p>
          </span>
        </div>
      </div>`
      products2.appendChild(div)
    }

    // ---------------------------------------------
    const products2 = document.querySelector('.products-2')
    products2.innerHTML = ''
    productsData.forEach(addProduct)
  }
  // -------------------------
  fixProduct2()
}

main()
