// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
  
  cart = [];

  // Constructor
  function Item(img, name, teacher, price, priceOld, detail, count) {
    this.img = img;
    this.name = name;
    this.teacher = teacher;
    this.price = price;
    this.priceOld = priceOld;
    this.detail = detail;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }

  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  var obj = {};

  // Add to cart
  obj.addItemToCart = function (img, name, teacher, price, priceOld, detail, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(img, name, teacher, price, priceOld, detail, count);
    cart.push(item);
    saveCart();
  }

  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  }

  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count--;
        if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart.splice(i, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function () {
    var totalCount = 0;
    for (var i in cart) {
      totalCount += cart[i].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var i in cart) {
      totalCart += cart[i].price * cart[i].count;
    }
    return Number(totalCart);
  }

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      var item = cart[i];
      var itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// ***************************************** 

// Add item
$(".add-to-cart").click(function (e) {
  e.preventDefault();
  var id = $(this).data("id");
  var img = $(this).data("img");
  var name = $(this).data("name");
  var teacher = $(this).data("teacher");
  var price = Number($(this).data("price-new"));
  var priceOld = Number($(this).data("price-old"));
  var detail = $(this).data("detail");
  
  shoppingCart.addItemToCart(img, name, teacher, price, priceOld, detail, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function () {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
var cartArray = shoppingCart.listCart();
  var output = ``;

  $.each(cartArray, function (k, v) {
    output += `<div class="col-12 m-1 p-1 border">
                <div class="d-md-flex flex-column flex-md-row p-1">

                  <div class="d-flex flex-row flex-grow-1 col-12 col-sm-8 mx-2">
                    <div class="Exit col-1">
                      <input class="delete-item my-5" data-name="${v.name}" type="checkbox" checked>
                    </div>
                    <div class="img-course col-4">
                      <img class="border" src="./img/imgcourses/${v.img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
                    </div>
                    <div class="col-7 p-2">
                      <a class="text-reset" href="./Courses/${v.detail}" target="new">
                        <strong class="title-course">${v.name}</strong> </a> <br>
                        <small class="name-gv">Created by: ${v.teacher}</small>
                    </div>
                  </div>

                  <div class="d-flex flex-row col-12 col-sm-4 p-2">
                    <div class="col-3">
                      <b class="text-success">$${v.price}</b>
                      <small class="text-danger">
                        <del>$${v.priceOld}</del>
                      </small>
                    </div>
                    <div class="col-7 mx-1">
                      <div class="input-group">
                        <label class="my-auto mx-2">Qty:</label>
                        <input type='number' class='col-1 text-center item-count form-control' min="1" data-name="${v.name}" value="${v.count}">
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
  });
  
  $('.show-cart').html(output);
  $('.total-cart').html("$ " + shoppingCart.totalCart().toPrecision(5));
  $('.total-count').html(shoppingCart.totalCount());
}


// Delete item button
$('.show-cart').on("click", ".delete-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
  var name = $(this).data('name');
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();
