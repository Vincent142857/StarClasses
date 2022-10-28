// Sign in/Sign up API
// ************************************************

var dataUser = (function () {
  
  user = [];
  userCurrent =[];


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
  function loadUserCurrent(){
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

  // Remove item from cart
  object.removeItemFromUser = function (email) {
    for (var i in user) {
      if (user[i].email === email) {
        user.splice(i, 1);
        break;
      }
    }
    saveUser();
  }
  

  // Check information of user-current
  object.checkSignIn = function (email, pwd) {

    let emailUser = user.filter(i => i.email == email) 
    if (emailUser.length == 0) {
      displaySignInErrorEmail(email);
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
    
    }else {
      displaySignInError()
    }
  }
  // console.log(userCurrent.email);
  // console.log(userCurrent.name);

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



if (sessionStorage.getItem("infoUserCurrent") != null){
  displayUser();
}
// console.log(sessionStorage.getItem("infoUserCurrent"));


function displayUser() {
  // var userA = dataUser.listUser();
  var userA = userCurrent;
  console.log(userA);

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
          <a class="list-group-item list-group-item-action" href="#">
            <i class="fas fa-user me-2"></i>My Account
          </a>
        
          <a class="list-group-item log-out" href="#" type="button">
            <i class="fas fa-sign-out-alt"></i>
            Log out
          </a>
        </div>

      </div>
    </div>`;

  $(".user-name").html(btnSignIn);
  
  
}
//*** Logout ***
$(".log-out").click(function (e) {
  e.preventDefault();
  
  sessionStorage.removeItem("infoUserCurrent");
  location.reload();
});

// displayUser();

// *** display messenger in Sign in page ***
function displaySignInSuccess(){
  let string = 
    `<div class="modal-body text-start text-black p-0">

      <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png"
          width="50%" alt="Star Classes">
      </p>

      <h4 class="mb-3 text-warning text-center">You are successfully logged in</h4>

      <h2 class="mb-1 text-warning text-center">Welcome to Star Classes </h2>
      
    </div>
    
    <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
      <a href="./index.html" type="button" class="btn btn-warning btn-lg mb-1 clear-cart signIn">
        Let's enjoy our courses now!
      </a>
    </div>`;

    $(".str-sign-in").html(string);
    // $('a.signIn').attr('href','./index.html');
}

function displaySignInErrorEmail(email) {

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
      
    </div>`;

  $(".str-sign-in").html(messenger);

}

function displaySignInError(){
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

  <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
    <a href="./SignIn.html" type="button" class="btn btn-warning btn-lg mb-1 clear-cart">
      Sign in to enjoy our courses now!
    </a>

  </div>`

  $(".str-sign-up").html(message);
}

function displaySignUpError(email) {
  let message =
  `<div class="modal-body text-start text-black p-0">

    <p class="modal-title mb-5 bg-dark p-2" id="ModalLabel"><img src="./img/star-classes-4.png" width="50%" alt="Star Classes"></p>

    <div class="mb-5 p-4">
      <h4 class="text-danger">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
        Email address already in use
      <h4>
      <p>You indicated you're a new customer, but an account already exists with the email address <u>${email}</u>.</p>
    </div>
    
  </div>

  <div class="modal-footer d-flex justify-content-center border-top-0 py-4">
    <a href="./SignIn.html" type="button" class="btn btn-warning btn-lg mb-1 clear-cart">
      Sign in now!
    </a>

  </div>` 

  $(".str-sign-up").html(message);
}

