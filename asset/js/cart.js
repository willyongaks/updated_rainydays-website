<script>
    /* Set rates + misc */
    var taxRate = 0.05;
    var shippingRate = 15.00;
    var fadeTime = 300;


$(async function() {
        getCartData()
    })

function getCartData() {
        $(".product").remove();
  const localCart = localStorage.getItem("cart")
  const cartItems = JSON.parse(localCart);
  console.log({cartItems});

  if(cartItems && cartItems.length > 0) {
    for (const item of cartItems) {
        console.log({ item });
      const product = `<div class="product">
        <div class="product-image">
            <img src="${item.image}">
                </div>
            <div class="product-details">
                <div class="product-title">${item.name}</div>
            </div>
            <div class="product-price">${item.price} kr</div>
            <div class="product-quantity">
                <input id="${item.id}" type="number" value="${item.quantity}" min="1">
                </div>
                <div class="product-removal">
                    <button type="button" id="${item.id}" class="remove-product">
                        Remove
                </button>
                </div>
                <div class="product-line-price">${item.total} kr</div>
            </div>`
      $(".shopping-cart").append(product);
    }
    recalculateCart();
  }
}
$(function() {
                $('body').on('change', '.product-quantity input', function () {
                    var value = $(this).val();
                    var id = this.id;
                    changeQty(id, value);
                })
                // $('.product-quantity input').change( function() {

                // });
            })

$(function() {
                $('body').on('click', '.remove-product', function () {
                    var id = parseInt(this.id);
                    const cartString = localStorage.getItem("cart")
                    let cartItems = JSON.parse(cartString);

                    const filtered = cartItems.findIndex((item) => item.id === id)

                    cartItems.splice(filtered, 1);

                    const data = JSON.stringify(cartItems)
                    localStorage.setItem("cart", data)
                    getCartData();
                })
            })

async function changeQty(productId, value) {
                console.log({ productId });
  const id = parseInt(productId);
  const val = parseInt(value)
  const cartString = localStorage.getItem("cart")
  let cartItems = await JSON.parse(cartString);
  cartItems.length > 0 && cartItems.map(item => {
    if(item.id === id) {
                item.quantity = val;
      item.total = item.quantity * item.price;
      return item;
    }
  })
  console.log({cartItems})
  const data = JSON.stringify(cartItems);
  console.log({data})
  localStorage.setItem("cart", data);

  getCartData();
  // const newData = localStorage.getItem("cart");
  // console.log({newData});
}
/* Assign actions */
$('.product-quantity input').change( function() {
                console.log(this);
  updateQuantity(this);

});

$('.product-removal button').click( function() {
                console.log(this);
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
 console.log({subtotal});
  /* Sum up row totals */
  $('.product').each(function () {
                subtotal += parseFloat($(this).children('.product-line-price').text());
  });

  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
                $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
                $('.checkout').fadeOut(fadeTime);
    }else{
                $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
                console.log({ quantityInput });
  /* Calculate line price */
  // var productRow = $(quantityInput).parent().parent();
  // var price = parseFloat(productRow.children('.product-price').text());
  // var quantity = $(quantityInput).val();
  // var linePrice = price * quantity;

  // /* Update line price display and recalc cart totals */
  // productRow.children('.product-line-price').each(function () {
                //   $(this).fadeOut(fadeTime, function() {
                //     $(this).text(linePrice.toFixed(2));
                //     recalculateCart();
                //     $(this).fadeIn(fadeTime);
                //   });
                // });  
            }


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
                productRow.remove();
    recalculateCart();
  });
}
</script>