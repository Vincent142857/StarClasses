// A. Shopping Cart API
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
          <div class="d-flex flex-row flex-grow-1 col-12 col-md-8 mx-2">
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

          <div class="d-flex flex-row col-12 col-md-4 p-2">
            <div class="col-4 pt-2">
              <b class="text-success">$${v.price}</b>
              <small class="text-danger">
                <del>$${v.priceOld}</del>
              </small>
            </div>
            <div class="col-7">
              <div class="form-outline">
                <input type="number" class="col-auto text-center item-count form-control" min="1"
                data-name="${v.name}" 
                data-id="${v.id}" 
                value="${v.count}" style="background-color: #FFF3E0; border: none; color: #3B71CA;">
                <label class="form-label my-auto">Qty:</label>
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



//*********************************** */
// B. Sign in/Sign up API
// ************************************************

var dataUser = (function () {

  user = [];
  userCurrent = [];


  // Constructor
  function Item(email, phone, name, pwd) {
    this.email = email;
    this.phone = phone;
    this.name = name;
    this.pwd = pwd;

  }

  // Save user information
  function saveUser() {
    localStorage.setItem('dataUser', JSON.stringify(user));
  }
  // Load user information
  function loadUser() {
    user = JSON.parse(localStorage.getItem('dataUser'));
  }
  if (localStorage.getItem("dataUser") != null) {
    loadUser();
  }

  //save userCurrent
  function saveUserCurrent(u) {
    sessionStorage.setItem("infoUserCurrent", JSON.stringify(u));
  }

  //load userCurrent
  function loadUserCurrent() {
    userCurrent = JSON.parse(sessionStorage.getItem("infoUserCurrent"));
  }
  if (sessionStorage.getItem("infoUserCurrent") != null) {
    loadUserCurrent();
  }

  var object = {};


  // Add to dataUser, (localStorage)
  object.addItemToUser = function (email, phone, name, pwd) {
    for (var i in user) {
      if (user[i].email === email) {
        displaySignUpError(email);
        return;
      }
    }
    var item = new Item(email, phone, name, pwd);
    user.push(item);
    saveUser();
    displaySignUpSuccess(name);
  }


  // Check information of user-current
  object.checkSignIn = function (email, pwd) {

    let emailUser = user.filter(i => i.email == email)
    if (emailUser.length == 0) {
      displaySignInErrorEmail();
      return;
    }

    let signIn = false;
    for (var i in user) {
      if (user[i].email === email && user[i].pwd === pwd) {
        saveUserCurrent(user[i]);
        signIn = true;
      }
    }
    if (signIn === true) {
      displaySignInSuccess();

    } else {
      displaySignInError()
    }
  }
  

  return object;
})();

// *****************************************
// Triggers / Events
// ***************************************** 

// Add item
$(".add-to-user").click(function (e) {
  e.preventDefault();
  var email = $("#Email").val();
  var phone = $("#Phone").val();
  var name = $("#FullName").val();
  var pwd = $("#Password").val();

  dataUser.addItemToUser(email, phone, name, pwd);
  // displayUser();
});


// Check your account;
$('.check-user').click(function (e) {
  e.preventDefault();

  var emailCurrent = $("#EmailCurrent").val();
  var pwdCurrent = $("#PwdCurrent").val();

  dataUser.checkSignIn(emailCurrent, pwdCurrent);
  // displayUser();
});


if (sessionStorage.getItem("infoUserCurrent") != null) {
  displayUser();
}

//** Check sign in before go to the check out page */
$(".check-out").click(function () {
  if (sessionStorage.getItem("infoUserCurrent") == null) {

    alert("Please sign in first. Thanks!");
    $('a.check-out').attr('href', './SignIn.html');
  } else {
    $('a.check-out').attr('href', './CheckOut.html');
  }
});

// console.log(sessionStorage.getItem("infoUserCurrent"));

// display button userCurrent name in navbar-menu
function displayUser() {

  var userA = userCurrent;
  
  let string = userA.name.indexOf(" ") === -1 ? userA.name : userA.name.slice(0, userA.name.indexOf(" "));

  let btnSignIn =
    `<div class="nav-link dropdown col-12 mx-auto my-auto" style="right:1">
      <a class="btn btn-light dropdown-toggle font-weight-bold" href="#" role="button" id="dropdownMenuLink"
        data-mdb-toggle="dropdown" aria-expanded="false">
        ${string}
      </a>
      <div class="dropdown-menu mt-0" aria-labelledby="dropdownMenuLink"
      style="border-top-left-radius: 0;
            border-top-right-radius: 40px;">

        <div class="list-group list-group-flush">
          <a class="list-group-item list-group-item-action" href="../Profiles.html">
            <i class="fas fa-user me-2"></i>My Account
          </a>
        
          <a class="list-group-item log-out" href="../index.html" type="button">
            <i class="fas fa-sign-out-alt"></i>
            Log out
          </a>
        </div>

      </div>
    </div>`;

    let btnSignIn1 =
    `<div class="nav-link dropdown col-12 mx-auto my-auto" style="right:1">
      <a class="btn btn-light dropdown-toggle font-weight-bold" href="#" role="button" id="dropdownMenuLink"
        data-mdb-toggle="dropdown" aria-expanded="false">
        ${string}
      </a>
      <div class="dropdown-menu mt-0" aria-labelledby="dropdownMenuLink"
      style="border-top-left-radius: 0;
            border-top-right-radius: 40px;">

        <div class="list-group list-group-flush">
          <a class="list-group-item profile"
          data-menu="1" href="./Profiles.html" type="button">
            <i class="fas fa-user me-2"></i>My Account
          </a>
        
          <a class="list-group-item log-out" 
          data-menu="1" href="./index.html" type="button">
            <i class="fas fa-sign-out-alt"></i>
            Log out
          </a>
        </div>

      </div>
    </div>`;

  $(".user-name-1").html(btnSignIn1);
  $(".user-name").html(btnSignIn);
  $(".profile-name").html(userCurrent.name);
  $(".profile-email").html(userCurrent.email);
  $(".profile-phone").html(userCurrent.phone);
  $(".profile-phone").html(userCurrent.phone);

}

//*** Logout ***
$(".log-out").click(function (e) {
  e.preventDefault();
  sessionStorage.removeItem("infoUserCurrent");
  // location.reload();

  let menu = Number($(this).data("menu"));
  if (menu === 1) {
    location.href = "./index.html";
  } else {
    location.href = "../index.html";
  }
});


// *** display messenger in Sign in page ***
function displaySignInSuccess() {
  let string =
    `<div class="modal-body text-start text-black p-0">

      <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png"
          width="50%" alt="Star Classes">
      </p>

      <h4 class="mb-3 text-warning text-center">You are successfully logged in</h4>

      <h2 class="mb-1 text-warning text-center">Welcome to Star Classes </h2>
      
    </div>
    
    <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
      <a href="./index.html" type="button" class="btn btn-warning btn-lg mb-1">
        Let's enjoy our courses now!
      </a>
    </div>`;

  $(".str-sign-in").html(string);
  // $('a.signIn').attr('href','./index.html');
}
// *** Error Email
function displaySignInErrorEmail() {

  let messenger =
    `<div class="modal-body text-start text-black p-0">
      <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png"
          width="50%" alt="Star Classes">
      </p>

      <h4 class="mb-1 text-danger text-center">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
        There was a problem
      </h4>
      <h5 class="mb-5 text-center">We cannot find an account with that email address!</h5>
      
    </div>
    <div class="modal-footer d-flex justify-content-center border-top-0 py-3">
      <a href="./SignUp.html" type="button" class="btn btn-warning btn-lg mb-1">
        Create account
      </a>
    </div>`;

  $(".str-sign-in").html(messenger);

}
//** Error password */
function displaySignInError() {
  let messenger =
    `<div class="modal-body text-start text-black p-0">
      <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png"
          width="50%" alt="Star Classes">
      </p>

      <h4 class="mb-5 text-danger text-center">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
        Your password is incorrect!
      </h4>
      
    </div>`;

  $(".str-sign-in").html(messenger);
}

//*** Display message  in Sign-up page  */
function displaySignUpSuccess(name) {

  let message =
    `<div class="modal-body text-start text-black p-0">
    <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png" width="50%" alt="Star Classes"></p>

    <h4 class="mb-3 text-warning text-center">Your account has been created</h4>
  
    <h2 class="mb-1 text-warning text-center">Welcome ${name} to Star Classes </h2>
    
  </div>

  <div class="modal-footer d-flex justify-content-center border-top-0 py-3">
    <a href="./SignIn.html" type="button" class="btn btn-warning btn-lg mb-1">
      Sign in to enjoy our courses now!
    </a>

  </div>`

  $(".str-sign-up").html(message);
}

function displaySignUpError(email) {
  let message =
    `<div class="modal-body text-start text-black p-0">

    <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png" width="50%" alt="Star Classes"></p>

    <div class="mb-5 p-3 text-center">
      <h4 class="text-danger">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
        Email address already in use
      <h4>
      <p>You indicated you're a new customer, but an account already exists with the email address <u>${email}</u>.</p>
    </div>
    
  </div>

  <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
    <a href="./SignIn.html" type="button" class="btn btn-warning btn-lg mb-1">
      Sign in now!
    </a>

  </div>`

  $(".str-sign-up").html(message);
}



//***************************************** */
//  C. History Cart
//***************************************** */

var historyCart = [];
$(".check-out").click(function(){
  historyCart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  saveHistoryCart();
});

function saveHistoryCart(){
  localStorage.setItem("dataCart", JSON.stringify(historyCart));
}

// Load history cart
function loadHistoryCart() {
  historyCart = JSON.parse(localStorage.getItem('dataCart'));
}

if (localStorage.getItem("dataCart") != null) {
  loadHistoryCart();
}


displayHistoryCart();
function displayHistoryCart() {
  var Array = historyCart;
  var output = ``;

  $.each(Array, function (k, v) {
    output += `
      <div class="col-12 m-1 p-1">
        <div class="d-md-flex flex-column flex-md-row p-1 note note-warning">

          <div class="d-flex flex-row flex-grow-1 col-12 col-md-8 mx-2">
            
            <div class="img-course col-4 pt-1">
              <img class="border" src="./img/imgcourses/${v.img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
            </div>

            <div class="col-8 p-2">
              <a class="text-reset" href="./Courses/${v.detail}">
                <strong class="title-course">${v.name}</strong> </a> <br>
                <small class="name-gv">Created by: ${v.teacher}</small>
            </div>

          </div>

          <div class="d-flex flex-row col-12 col-md-4 p-2">
            <div class="col-12 px-2">
              <b class="text-success mx-2">$${v.price}</b>

              <small class="text-danger">
                <del>$${v.priceOld}</del>
              </small>
            </div>
           
          </div>
        </div>
      </div>`;
  });

  $('.show-history-cart').html(output);
  

}
