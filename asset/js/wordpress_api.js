const url = "https://willyongaks.com/Rainydays//wp-json/wc/store/products"
const productsHtml = document.querySelector("#products")


async function getProducts() {
    const response = await fetch(url)
    const products = await response.json();
    console.log(products)

    for (let i = 0; i < products.length; i++) {
        productsHtml.innerHTML += `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
               <div class="product__item">
                  <div class="product__image">
                     <a href="#">
                        <img class="img-fluid" src="${products[i].images[0].src}" alt="">
                     </a>
                  </div>
                  <div class="product__content">
                     <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-6">
                           <div class="product__info">
                              <h5>${products[i].name}</h5>
                              <p>${products[0].price} kr </p>
                           </div>
                        </div>
                        <div class="col-xl-5 col-lg-6">
                           <div class="product__add__cart text-end">
                              <a href="#">ADD TO CART</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>`
    }

}

getProducts();

