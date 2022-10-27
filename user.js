// Shopping Cart API
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
    // sessionStorage.setItem('dataUser', JSON.stringify(user));
    localStorage.setItem('dataUser', JSON.stringify(user));
  }
  // Load user information
  function loadUser() {
    // user = JSON.parse(sessionStorage.getItem('dataUser'));
    user = JSON.parse(localStorage.getItem('dataUser'));
  }
  // if (sessionStorage.getItem("dataUser") != null) {
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

  var obj = {};

  // Add to dataUser
  obj.addItemToUser = function (email, phone, name, pwd) {
    for (var i in user) {
      if (user[i].email === email) {
        alert("Your email had account! Please sign in with your account.")
        return;
      }
    }
    var item = new Item(email, phone, name, pwd);
    user.push(item); //save to array user
    saveUser(); //save to json dataUser

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

  // Check information of user-current
  obj.checkSignIn = function (email, pwd) {
    for (var i in user) {
      if (user[i].email === email && user[i].pwd === pwd) {
        saveUserCurrent(user[i]);
        return true;
      }
    }
    return false;
  }
  console.log(userCurrent.email);
  console.log(userCurrent.name);

  // List cart
  obj.listUser = function () {
    return userCurrent;
  }

  return obj;
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
  displayUser();
});


// Check your account;
$('.check-user').click(function () {
  var emailCurrent = $("#EmailCurrent").val();
  var pwdCurrent = $("#PwdCurrent").val();

  var signIn = dataUser.checkSignIn(emailCurrent, pwdCurrent);
  if (signIn === true) {
    alert("Welcome to Star Classes!");
    displayUser();
  }else {
    alert("Your email or your password is failed!");
  }
});


function displayUser() {
  var userArray = dataUser.listUser();
  console.log(userArray);

  var output = `<a class="nav-link text-center active rounded-circle btn btn-warning" href="#">
      <span class="user-name"></span>
    </a>`;

    $(".user-name").html(userCurrent.name);
  
  // $('.show-user').html(output);
  
}

displayUser();

