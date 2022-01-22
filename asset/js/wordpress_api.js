const url = "http://localhost:8888/Rainydays/wp-json/wc/v3/products?consumer_key=ck_2033473ba81a504e4513c59ba2d445f0d6b2fc7c&consumer_secret=cs_24958633d825fc108cf4f3d255ce35e4b01bc3a1"
const productsHtml = document.querySelector("#products")


async function getProducts() {
    const response = await fetch(url, {
        method: "GET",
        withCredentials: true,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "X-Auth-Token": "cs_0ed2af43e4a6faa53cb8436ec0ffab991a496653",
            "Content-Type": "application/json"
        }

    });
    const products = await response.json();
    console.log(products)

    for (let i = 0; i < products.length; i++) {
        productsHtml.innerHTML += `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
               <div class="product__item">
                  <div class="product__image">
                     <a href="#">
                        <img class="img-fluid" src="${products[0].images[0].src}" alt="">
                     </a>
                  </div>
                  <div class="product__content">
                     <div class="row align-items-center">
                        <div class="col-xl-7 col-lg-6">
                           <div class="product__info">
                              <h5>${products[0].name}</h5>
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

