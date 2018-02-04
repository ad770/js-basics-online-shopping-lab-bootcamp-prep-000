var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function rand(num){return Math.floor(Math.random()*num+1);}

function addToCart(item) {
  cart.push({[item]: rand(100)});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {

  if (cart.length < 1) {
    console.log('Your shopping cart is empty.');
  }else{
    var result = 'In your cart, you have';
    var key = [];
    for (var i = 0; i < cart.length; i++) {
      key = Object.keys(cart[i])[0]

      







      if(i < cart.length-1){
        if (cart.length = 2) {
          result +=` ${key} at $${cart[i][key]}`;
        }else{
          result +=` ${key} at $${cart[i][key]},`;
        }
      }else if(cart.length>1){
        result +=` and ${key} at $${cart[i][key]}.`;
      }else {
        result +=` ${key} at $${cart[i][key]}.`;
      }
    }
    console.log(result);
  }
}

// addToCart('bananos');
// addToCart('g');
// addToCart('j');
// addToCart('apples');
viewCart();

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here

}
