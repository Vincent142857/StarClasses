// Shopping Cart API
// ************************************************

var dataUser = (function () {
  
  user = [];

  // Constructor
  function Item(email, phone, name, pwd) {
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.pwd = pwd;
    
  }

  // Save cart
  function saveUser() {
    sessionStorage.setItem('dataUser', JSON.stringify(user));
  }

  // Load cart
  function loadUser() {
    user = JSON.parse(sessionStorage.getItem('dataUser'));
  }

  if (sessionStorage.getItem("dataUser") != null) {
    loadUser();
  }

  var obj = {};

  // Add to cart
  obj.addItemToUser = function (email, phone, name, pwd) {
    for (var i in user) {
      if (user[i].email === email) {
        alert("Account has had")
        return;
      }
    }
    var item = new Item(email, phone, name, pwd);
    cart.push(item);
    saveUser();
  }

  // Remove item from cart
  obj.removeItemFromUser = function (email) {
    for (var i in user) {
      if (user[i].email === email) {
        user.splice(i, 1);
        break;
      }
    }
    saveUser();
  }

  // Remove all items from cart
  obj.checkSignIn = function (email, pwd) {
    for (var i in user) {
      if (user[i].email === email && user[i].pwd === pwd) {
        sessionStorage.setItem("infoUser", user[i]);
        var userNow = sessionStorage.getItem("infoUser");
        displayUser(userNow);
        return true;
      }
    }
    return false;
  }

  // List cart
  obj.listUser = function () {
    var userCopy = [];
    for (i in user) {
      var item = user[i];
      var itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
    }
    return userCopy;
  }

  return obj;
})();

// *****************************************
// Triggers / Events
// ***************************************** 

// Add item
$(".add-to-user").click(function (e) {
  e.preventDefault();
  var email = $(this).data("email");
  var phone = $(this).data("phone");
  var name = $(this).data("name");
  var pwd = $(this).data("pwd");
  
  dataUser.addItemToUser(email, phone, name, pwd);
  // displayUser();
});

// Clear items
$('.check-user').click(function () {
  var signIn = dataUser.checkSignIn();
  if (signIn === true) {
    alert("Welcome to Star Classes!");
  }else {
    alert("Sign in failed!");
  }
  
});


function displayUser() {
var cartArray = dataUser.listCart();
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
  $('.total-cart').html("$ " + dataUser.totalCart().toPrecision(5));
  $('.total-count').html(dataUser.totalCount());
}

