function addToCart(id, image, name, price) {
  let cart = localStorage.getItem("cart");
  let parseCart = cart ? JSON.parse(cart) : [];
  const checkCart = parseCart.filter(item => item.id === id);

  console.log({ checkCart });
  if (checkCart.length > 0) {
    parseCart.map(item => {
      if (id === item.id) {
        item.quantity = item.quantity + 1;
        item.total = item.quantity * item.price;
        return item
      }
    })
    console.log({ parseCart })
    const data = JSON.stringify(parseCart)
    localStorage.setItem("cart", data)
  } else {
    const product = {
      id: id,
      image: image,
      name: name,
      price: price,
      quantity: 1,
      total: price,
    }
    parseCart.push(product)
    const data = JSON.stringify(parseCart)
    console.log({ parseCart, data })
    localStorage.setItem("cart", data)
  }

}