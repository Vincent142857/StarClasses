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
var data = [];
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
  //window.open("GalleryCourse.html")
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


// show 4 course in index page

function showIndex() {

  $.getJSON("informationSubject.json", function (items) {
    data = items.informationSubject;
    var CoursesPt = data.filter(i => i.Subject == "SubjectPython");
    var CoursesEx = data.filter(i => i.Subject == "SubjectExcel");
    var CoursesWe = data.filter(i => i.Subject == "SubjectWebDevelopment");
    var CoursesDs = data.filter(i => i.Subject == "SubjectDataScience");
    var CoursesJs = data.filter(i => i.Subject == "SubjectJavascript");
    var CoursesAc = data.filter(i => i.Subject == "SubjectAWSCertification");
    var CoursesDr = data.filter(i => i.Subject == "SubjectDrawing");

    TopFour(CoursesPt, "SubjectPython");
    TopFour(CoursesEx, "SubjectExcel");
    TopFour(CoursesWe, "SubjectWebDevelopment");
    TopFour(CoursesDs, "SubjectDataScience");
    TopFour(CoursesJs, "SubjectJavascript");
    TopFour(CoursesAc, "SubjectAWSCertification");
    TopFour(CoursesDr, "SubjectDrawing");

    TopFour(sortQtyStudent(data), "sort-top-4-by-student");
    TopFour(sortRating(data), "sort-top-4-by-rating");

  });
}

function sortQtyStudent(array) {
  for (var i = 0; i + 1 < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].QtyStudent <= array[j].QtyStudent) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

function sortRating(array) {
  for (var i = 0; i + 1 < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].Rating <= array[j].Rating) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

function sortPriceNewZA(array) {
  for (var i = 0; i + 1 < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].PriceNew <= array[j].PriceNew) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

function sortPriceNewAZ(array) {
  for (var i = 0; i + 1 < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].PriceNew >= array[j].PriceNew) {
        let tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
      }
    }
  }
  return array;
}

// ** Display all courses on Index
function showByClass(items, className) {
  let sp = ``;
  $.each(items, function (k, v) {
    sp += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto p-3 border-bottom d-flex flex-column justify-content-around flex-grow-1" style="max-width: 300px">
          <a class="d-flex flex-column text-reset" href="./Courses/${v.Detail}" target="new">
            <div class="col-12 text-center">
              <img src="./img/imgcourses/${v.Img}" width="100%" height="200px" alt="course">
            </div>
            <div class="col-12 px-2">
              <b style="text-align: justify;">${v.NameCourse}</b>
              <div class="d-flex row">
                <div class="d-flex">
                  <small class="mr-auto"><i>${v.Teacher}</i></small>
                  <small class="ml-auto">
                    ${v.Rating} <i class="fa fa-star text-warning"></i>
                  </small>
                </div>
                <div class="d-flex">
                  <small class="text-left mr-auto">
                    <i class="fas fa-user-graduate"></i> ${v.QtyStudent}
                  </small>
                  <span class="ml-auto">
                    <strong class="text-success">$${v.PriceNew}</strong>
                    <small class="text-danger">
                      <del>$${v.PriceOld}</del>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="#" 
            data-img="${v.Img}" 
            data-name="${v.NameCourse}"  
            data-teacher="${v.Teacher}"  
            data-price-new="${v.PriceNew}"
            data-price-old="${v.PriceOld}" 
            class="add-to-cart btn btn-success col-12 mt-auto">
            Add to cart
          </a>
        </div>
        <div class="w-100 d-sm-none"></div>
      `;
  });

  //$("."+className).html(sp);
}

// ** Display Top 4 courses on Index
function TopFour(items, className) {
  let sp = ``;
  for (var i = 0; i < 4; i++) {
    sp += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto p-3 border-bottom d-flex flex-column justify-content-around flex-grow-1" style="max-width: 300px">
          <a class="d-flex flex-column text-reset" href="./Courses/${items[i].Detail}" target="new">
            <div class="col-12 text-center">
              <img src="./img/imgcourses/${items[i].Img}" width="100%" height="160px" alt="course">
            </div>
            <div class="col-12 px-2">
              <b style="text-align: justify;">${items[i].NameCourse}</b>
              <div class="d-flex row">
                <div class="d-flex">
                  <small class="mr-auto"><i>${items[i].Teacher}</i></small>
                  <small class="ml-auto">
                    ${items[i].Rating} <i class="fa fa-star text-warning"></i>
                  </small>
                </div>
                <div class="d-flex">
                  <small class="text-left mr-auto">
                    <i class="fas fa-user-graduate"></i> ${items[i].QtyStudent}
                  </small>
                  <span class="ml-auto">
                    <strong class="text-success">$${items[i].PriceNew}</strong>
                    <small class="text-danger">
                      <del>$${items[i].PriceOld}</del>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a href="#" 
            data-name="${items[i].NameCourse}" 
            data-price-new="${items[i].PriceNew}"
            data-price-old="${items[i].PriceOld}" 
            class="add-to-cart btn btn-success col-12 mt-auto">
            Add to cart
          </a>
        </div>
        <div class="w-100 d-sm-none"></div>
      `;
  }

  $("." + className).html(sp);
}


// Filter/Sort Multiple
$("input.chk").click(function () {
  let cats = $(".chk-subject:checked").map(function () { return $(this).val() }).toArray().toString();
  let level = $(".chk-level:checked").map(function () { return $(this).val() }).toArray().toString();
  let stars = $(".chk-star:checked").map(function () { return $(this).val() }).toArray();
  let sort = $(".chk-sort:checked").map(function () { return $(this).val() }).toArray().toString();


  subData = (cats.length == 0) ? data : data.filter(item => cats.search(item.Subject) >= 0);
  levelData = (level.length == 0) ? subData : subData.filter(item => level.search(item.Level) >= 0);
  let ratingData = [];

  if (stars.length == 0) {
    ratingData = levelData;
  } else {
    for (let i = 0; i < levelData.length; i++) {
      if (levelData[i].Rating >= stars[0]) {
        ratingData.push(levelData[i]);
      }
    }
  }
  //** sort ** *//
  if (sort == "AtoZ") {
    sortPriceNewAZ(ratingData);
  } else if (sort == "ZtoA") {
    sortPriceNewZA(ratingData);
  }

  displayCourse(ratingData);
});


//** Display on Gallery **
function displayCourse(items) {
  let array = ``;
  $.each(items, function (k, v) {
    array += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto p-3 border-bottom d-flex flex-column justify-content-around flex-grow-1" style="max-width: 300px">
                <a class="d-flex flex-column text-reset" href="./Courses/${v.Detail}" target="new">
                  <div class="col-12 text-center">
                    <img src="./img/imgcourses/${v.Img}" width="100%" height="auto" alt="course">
                  </div>
                  <div class="col-12 px-2">
                    <b style="text-align: justify;">${v.NameCourse}</b>
                    <div class="d-flex row">
                      <div class="d-flex">
                        <small class="mr-auto"><i>${v.Teacher}</i></small>
                        <small class="ml-auto">
                          ${v.Rating}<i class="fa fa-star text-warning"></i>
                        </small>
                      </div>
                      <div class="d-flex">
                        <small class="text-left mr-auto">
                          <i class="fas fa-user-graduate"></i>${v.QtyStudent}
                        </small>
                        <span class="ml-auto">
                          <strong class="text-success">$${v.PriceNew}</strong>
                          <small class="text-danger">
                            <del>$${v.PriceOld}</del>
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" 
                data-id="${v.ID}" 
                data-img="${v.Img}"  
                data-name="${v.NameCourse}"  
                data-teacher="${v.Teacher}" 
                data-price-new="${v.PriceNew}" 
                data-price-old="${v.PriceOld}"
                data-detail="${v.Detail}"
                class="add-to-cart btn btn-success col-12 mt-auto"> Add to cart
                </a>
              </div>
              <div class="w-100 d-sm-none"></div>
            `;
  });

  $("#gallery").html(array);
  $("#index-cart").html(array);

}
// ** Display on Shopping-Cart **
function displayShopping(items) {
  let sp = ``;
  $.each(items, function (k, v) {
    sp += `
      <div class="col-12 m-1 p-1 border">
        <a class="d-md-flex flex-column flex-md-row text-reset p-1" href="./Courses/${v.Detail}" target="new">

          <div class="d-flex flex-row flex-grow-1 col-12 col-sm-8 mx-2">
            <div class="Exit py-4 col-1">
              <input class="delete-item" type="checkbox" checked>
            </div>
            <div class="img-course col-4">
              <img class="border" src="./img/imgcourses/${v.Img}" alt="img-course" width="100%" height="auto" style="border-radius: 10px">
            </div>
            
            <div class="col-7 p-2">
              <strong class="title-course">${v.NameCourse}</strong> <br>
              <small class="name-gv">Created by: ${v.Teacher}</small>
            </div>
          </div>
          
          <div class="col-12 col-sm-2 p-2 text-right">
            <b class="text-success">$${v.PriceNew}</b>
            <small class="text-danger">
              <del>$${v.PriceOld}</del>
            </small>
          </div>
        </a>
      </div>`;
  });

  $("#shopping-cart").html(sp);

}
