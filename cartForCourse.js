// Shopping Cart API
// ************************************************

var shoppingCart = (function () {

  cart = [];

  // Constructor
  function Item(id, img, name, teacher, price, priceOld, detail, count) {
    this.id = id;
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
    // localStorage.setItem('shoppingCart', JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    // cart = JSON.parse(localStorage.getItem('shoppingCart'));
  }

  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  var obj = {};

  // Add to cart
  obj.addItemToCart = function (id, img, name, teacher, price, priceOld, detail, count) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, img, name, teacher, price, priceOld, detail, count);
    cart.push(item);
    saveCart();
  }

  // Set count from item
  obj.setCountForItem = function (id, count) {
    for (var i in cart) {
      if (cart[i].id === id) {
        cart[i].count = count;
        break;
      }
    }
    saveCart();
  }

  // Remove item from cart
  // obj.removeItemFromCart = function (id) {
  //   for (var i in cart) {
  //     if (cart[i].id === id) {
  //       cart[i].count--;
  //       if (cart[i].count === 0) {
  //         cart.splice(i, 1);
  //       }
  //       break;
  //     }
  //   }
  //   saveCart();
  // }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (id) {
    for (var i in cart) {
      if (cart[i].id === id) {
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

  shoppingCart.addItemToCart(id, img, name, teacher, price, priceOld, detail, 1);
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
    output += `
      <div class="col-12 m-1 p-1">
        <div class="d-md-flex flex-column flex-md-row p-1 note note-warning">
          <div class="d-flex flex-row flex-grow-1 col-12 col-sm-8 mx-2">
            <div class="Exit col-1 pt-1">
              <input class="delete-item my-5 form-check-input" data-id="${v.id}" type="checkbox" checked style="background-color: #FFAB00; border-color: #FFAB00">
            </div>
            <div class="img-course col-4 pt-1">
              <img class="border" src="./img/imgcourses/${v.img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
            </div>
            <div class="col-7 p-2">
              <a class="text-reset" href="./Courses/${v.detail}">
                <strong class="title-course">${v.name}</strong> </a> <br>
                <small class="name-gv">Created by: ${v.teacher}</small>
            </div>
          </div>

          <div class="d-flex flex-row col-12 col-sm-4 p-2">
            <div class="col-3 pt-2">
              <b class="text-success">$${v.price}</b>
              <small class="text-danger">
                <del>$${v.priceOld}</del>
              </small>
            </div>
            <div class="col-8">
              <div class="form-outline">
                <input type="number" class="col-auto text-center item-count form-control" min="1"
                data-name="${v.name}" 
                data-id="${v.id}" 
                value="${v.count}" style="background-color: #FFF3E0; border: none; color: #3B71CA;">
                <label class="form-label my-auto">Quantity:</label>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });

  $('.show-cart').html(output);
  $('.total-cart').html("$ " + shoppingCart.totalCart().toLocaleString('en-US'));
  $('.total-count').html(shoppingCart.totalCount());

}


// Delete item button
$('.show-cart').on("click", ".delete-item", function (event) {
  var id = $(this).data('id');
  shoppingCart.removeItemFromCartAll(id);
  displayCart();
})


// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
  var id = $(this).data('id');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(id, count);
  displayCart();
});

displayCart();
