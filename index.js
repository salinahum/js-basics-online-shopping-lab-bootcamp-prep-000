var cart = new Array()

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(wantedItem) {
  var price = Math.floor(Math.random() * 100)

  cart.push({[wantedItem]: price})

  console.log(`${wantedItem} has been added to your cart.`)

  return cart
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`)
  }

  else {
    var itemAtPrice = [] //lists out all of the items and their prices in "item at price" format

    //need a loop so that everything happens for each item in the cart
    for (var i = 0; i < cart.length; i++) {
      //gets one key from the cart, stores it in cart2
      var cart2 = cart[i]
      var item = Object.keys(cart2)[0]
      var price = cart2[item]

      //make an array, put items/prices in "item at price" format
      itemAtPrice.push(`${item} at \$${price}`)
    }

    console.log(`In your cart, you have ${itemAtPrice.join(', ')}.`)
  }
}

function removeFromCart(removeItem) {
  var itemInCart = false

  for (var i = 0; i < cart.length; i++) {
    var cart3 = cart[i] //cart3 equals one object at a time from cart

    if (cart3.hasOwnProperty(removeItem)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      return cart
    }
  }

  if (itemInCart === false) {
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(ccNumber) {
  if (ccNumber === undefined) {
    console.log(`We don't have a credit card on file for you to place your order.`)
  }

  console.log(`Your total cost is \$${total()}, which will be charged to the card ${ccNumber}.`)

  cart = []
}
