const main = () => {
  const fixConverse = () => {
    const brandItem = document.querySelector('.brands .brands1')
    const convertEl = brandItem.querySelector('.c-nv-erse')
    convertEl.textContent = 'c   nv          erse'
  }
  const fixProduct2 = () => {
    const addProduct = ({ image, name, price1 }) => {
      const div = document.createElement('div')
      price1 = price1.split(',')
      div.className = 'product3 box'
      div.innerHTML = `
      <img class="product-child1" alt="" src="${image}">
        <div class="converse-chuck-taylor3">
          ${name}
        </div>
        <div class="div3 price">
          <span>$${price1[0]},</span>
          <span class="span3">${price1[1]}</span>
        </div>`
      products2.appendChild(div)
    }

    // ---------------------------------------------
    const products2 = document.querySelector('.products .all')
    productsData.forEach(addProduct)
  }
  // -------------------------------
  const productsData = [
    {
      image: '/images/index/i1.png',
      name: 'Chuck 70 Converse Rbbon',
      price1: '73,02',

    },
    {
      image: '/images/index/i2.png',
      name: 'Chuck Taylor All Star',
      price1: '62,58',
    },
    {
      image: '/images/index/i3.png',
      name: 'Run Star Motion CX',
      price1: '104,97',
    },
    {
      image: '/images/index/i4.png',
      name: 'Chuck 70 Plus',
      price1: '100,93',
    },
    {
      image: '/images/index/i5.png',
      name: 'Chuck Taylor All Star',
      price1: '62,58',
    },
    {
      image: '/images/index/i6.png',
      name: 'Chuck Taylor All Star',
      price1: '62,58',
    },
    {
      image: '/images/index/i7.png',
      name: 'Chuck Taylor All Star Lift',
      price1: '72,67',
    },
    {
      image: '/images/index/i8.png',
      name: 'Chuck Taylor All Star CX Explore Vintage Athletic',
      price1: '92,85',
    },
  ]
  fixProduct2()
  fixConverse()
}

main()
