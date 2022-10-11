//** Count Visitor ** 
function countVisitor() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.countV) {
      localStorage.countV = Number(localStorage.countV) + 1;
    } else {
      localStorage.countV = 1;
    }
    document.getElementById("visitor").innerHTML = localStorage.countV;
  } else {
    document.getElementById("visitor").innerHTML = 0;
  }
}

//** Reading form JSON file **

$.getJSON("informationSubject.json", function (items) {
  data = items.informationSubject;
  displayCourse(data);
  displayShopping(data);
});

// event search
$("#formSearch").submit(function (e) {
  e.preventDefault();

  let search = $("#search").val();
  let re = new RegExp(search, "ig");
  let subData = data.filter(item => item.Intro.search(re) >= 0);

  displayCourse(subData);
});

//lap trinh su kien xem chi tiet san pham
// $(".detailImage").click(function(){
//     alert("detailImage");
//     let id = $(this).data('id');
//     alert("test + " + id);
//     location.href = "product_" + id+  ".html";
// });

function showProduct(pid) {
  let products = data.filter(ele => ele.id == pid);
  let product = products[0];
  let x = `
          <div class="col-md-6">
              <div><img src="image/${product.pic}" alt="" class="flowerImage"></div>
          </div>
          <div class="col-md-6">
              <h3>${product.name.toUpperCase()}</h3>
              <h1>Price: ${product.price}</h1>
              <div>
                  <p>${product.description}</p>
              </div>
              <a href="#" data-name="${product.name}" data-price="${product.price}" class="add-to-cart btn btn-primary">Add to cart</a>
          </div>         
      `;
  $("#productDetail").html(x);
}



// Filter by Checkbox Subject
let subData = [];
$("input[type=checkbox]").click(function () {

  // var cats =
  //     $('input:checkbox[name="cat"]:checked')
  //         .map(function () {
  //             return $(this).val();
  //         }).get();

  // cats = cats.toString().trim();
  //alert("checkbox");

  let cats = $(".chk-subject:checked").map(function () { return $(this).val() }).toArray().toString();

  subData = (cats.length == 0) ? data : data.filter(item => cats.search(item.Subject) >= 0);

  console.log(subData.length);
  displayCourse(subData);
});

//Filter by check radio Star
$("input[type=radio]").click(function () {
  let stars = $(".chk-star:checked").map(function () { return $(this).val() }).toArray();
  let RatingData = [];
  

  if (stars.length == 0) {
    RatingData = data;
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Rating >= stars[0]) {
        RatingData.push(data[i]);
      }
    }
  }
  console.log(RatingData.length);
  displayCourse(RatingData);
});


//** Display 
function displayCourse(items) {
  let array = ``;
  $.each(items, function (k, v) {
    array += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto p-3 border-bottom d-flex flex-column justify-content-around">
                <a class="d-flex flex-column text-reset" href="./Courses/${v.Detail}" target="new">
                  <div class="col-12 text-center">
                    <img src="${v.Img}" width="100%" height="auto" alt="course">
                  </div>
                  <div class="col-12 px-4">
                    <b style="text-align: justify;">${v.NameCourse}</b>
                    <div class="d-flex row">
                      <div class="d-flex">
                        <small class="mr-auto"><i>${v.Teacher}</i></small>
                        <span class="ml-auto">
                          ${v.Rating} <i class="fa fa-star text-warning"></i>
                        </span>
                      </div>
                      <div class="d-flex">
                        <span class="text-left mr-auto">
                          <i class="fas fa-user-graduate"></i> ${v.QtyStudent}
                        </span>
                        <span class="ml-auto">
                          <strong class="text-success">${v.PriceNew}</strong>
                          <small class="text-danger">
                            <del>${v.PriceOld}</del>
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" data-name="${v.NameCourse}" data-price="${v.PriceNew}" class="add-to-cart btn btn-success col-12 mt-auto">Add to cart</a>
              </div>
              <div class="w-100 d-sm-none"></div>
            `;
  });

  $("#gallery").html(array);
  $("#index-cart").html(array);

}

function displayShopping(items) {
  let sp = ``;
  $.each(items, function (k, v) {
    sp += `
              <div class="col-12 m-1 p-1 border">
              <a class="d-md-flex flex-column flex-md-row text-reset p-1" href="./Courses/${v.Detail}" target="new">

                <div class="d-flex flex-row flex-grow-1 col-12 col-sm-8 mx-2">
                  <div class="Exit py-4 col-1">
                    <input ng-click="removeItem($index)" type="checkbox" checked>
                  </div>
                  <div class="img-course col-4">
                    <img class="border" src="${v.Img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
                  </div>
                  
                  <div class="col-7 p-2">
                    <strong class="title-course">${v.NameCourse}</strong> <br>
                    <small class="name-gv">Created by: ${v.Teacher}</small>
                  </div>
                </div>
                
                <div class="col-12 col-sm-2 p-2 text-right">
                  <b class="text-success">${v.PriceNew}</b>
                  <small class="text-danger">
                    <del>${v.PriceOld}</del>
                  </small>
                </div>
              </a>
            </div>`;
  });

  $("#shopping-cart").html(sp);
  
}