export const item = product => {
  return `
    <li class="product__item item">
      <div class="product__block js_product glass glass-m" id="${product.id}">

      <div class="product__img-box">
      <img src="${product.image}" alt="" class="product__block-img">
      
      </div>
   
      <div class="product__block--inner">
      <div class="product__btn-block">
      <a href="product-page.html?id=${
        product.id
      }" id="btn-1" class="product__btn hero__btn first" style="margin: ${
    product.type == 'ring' || product.type == 'clothing' ? 'auto' : ''
  }">details <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -6639.000000)" fill="#000000">
          <g id="icons" transform="translate(56.000000, 160.000000)">
              <path d="M134,6479 L132.565,6480.393 L140.172,6488 L124,6488 L124,6490 L140.172,6490 L132.586,6497.586 L134,6499 C137.661,6495.339 140.496,6492.504 144,6489 L134,6479" id="arrow_right-[#349]">

</path>
          </g>
      </g>
  </g>
</svg></a>
      ${
        product.type == 'ring' || product.type == 'clothing'
          ? ''
          : '<button id="btn-2" class="hero__btn product__btn second js_add-to-cart">buy <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-180.000000, -6639.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M134,6479 L132.565,6480.393 L140.172,6488 L124,6488 L124,6490 L140.172,6490 L132.586,6497.586 L134,6499 C137.661,6495.339 140.496,6492.504 144,6489 L134,6479" id="arrow_right-[#349]"></path></g></g></g></svg></button>'
      }
     </div>
      <span class="product__price">$${product.price.toFixed(2)}</span>
      <p class="product__name js_product-name">${product.name}</p> 
      ${
        product.description[0].text.length > 0
          ? '<p class="text product__desc">' +
            product.description[0].text.slice(0, 100) +
            '...' +
            '</p>'
          : ''
      }
      


      </div>
     </div>
   </li>
    `;
};
