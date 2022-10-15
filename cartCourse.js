//** Shopping cart **/

var shoppingCart = (function () {
  cart = [];

  function Item(img, name, price, count){
    this.img = img;
    this.name = name;
    this.price = price;
    this.count = count;
  }

  //save cart
  function saveCart(){
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  //Load cart
  function loadCart() {
    cart = sessionStorage.getItem('shoppingCart');
  }
  if (sessionStorage.getItem('shoppingCart') != null) {
    loadCart();
  }

  //Add to cart
  Object.addItemToCart = function (item, name, price, count){
    for (var i in cart) {
      if (cart[i].name === name){
        cart[i].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(img, name, price, count);
    cart.push(item);
    saveCart();
  }
  //ser count form item
  Object.seCountForItem = function (name, count){
    for (var i in cart) {
      if (cart[i].name === name){
        cart[i].count += count;
        break;
      }
    }
  }
  //remove item from cart
  Object.removeItemFromCart = function (name){
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count --;
        if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
        break;
      }
    }
    saveCart();
  }
  //Remove all item from cart
  Object.removeItemsFromCartAll = function (name){
    for (var i in cart) {
      if (cart[i].name === name) {
        cart.splice(i, 1);
        break;
      }
    }
    saveCart();
  }
  //clear cart
  Object.clearCart = function () {
    cart = [];
    saveCart();
  }
  //Count cart
  Object.totalCount = function () {
    var totalCount = 0;
    for (var i in cart) {
      totalCount += cart[i].count;
    }
    return totalCount;
  }
  //total cart
  Object.totalCart = function () {
    var totalCart = 0;
    for (var i in cart) {
      totalCart += cart[i].price * cart[i].count;
    }
    return Number(totalCart);
  }
  //list cart;
  Object.listCart = function () {
    var cartCopy = [];
    for (var i in cart) {
      var item = cart[i];
      var itemCopy = {};
      for (var p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  }
  return Object;
})();

//*********************** */
//Event
//************************ */

// Add item
$(".add-to-cart").click(function (event){
  event.preventDefault();
  var img = $(this).data('img');
  var name = $(this).data('name');
  var price = Number($(this).data('price-new'));
  shoppingCart.addItemToCart(img, name, price, 1);
  displayCart();
});
//clear items
$(".clear-cart").click(function (){
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = ``;
  $.each(cartArray, function (k, v) {
    output += `<div class="col-12 m-1 p-1 border">
                <a class="d-md-flex flex-column flex-md-row text-reset p-1" href="./Courses/{v.detail}" target="new">
                  <div class="d-flex flex-row flex-grow-1 col-12 col-sm-8 mx-2">

                    <div class="Exit py-4 col-1">
                      <input class="delete-item" type="checkbox" checked>
                    </div>

                    <div class="img-course col-4">
                      <img class="border" src="./img/imgcourses/${v.img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
                    </div>

                    <div class="col-7 p-2">
                      <strong class="title-course">${v.name}</strong> <br>
                      <small class="name-gv">Created by: {v.teacher}</small>
                    </div>
                  </div>

                  <div class="d-flex flex-row c ol-12 col-sm-3 p-2 text-right">
                    <div class="col-6">
                      <b class="text-success">$${v.price}</b>
                      <small class="text-danger">
                        <del>{v.priceOld}</del>
                      </small>
                    </div>
                    <div class="col-6">
                      <span class="text-right">Qty: ${v.count} </span>
                    </div>
                  </div>
                </a>
              </div>`
  });
  $('.show-cart').html(output);
  $('.total-cart').html("$ " + shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  console.log(output);
  console.log(shoppingCart.totalCount());
  console.log(shoppingCart.totalCart());
} 

displayCart();
