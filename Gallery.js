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
$("input[type=checkbox]").click(function () {

  // var cats =
  //     $('input:checkbox[name="cat"]:checked')
  //         .map(function () {
  //             return $(this).val();
  //         }).get();

  // cats = cats.toString().trim();
  //alert("checkbox");

  let cats = $(".chk-subject:checked").map(function () { return $(this).val() }).toArray().toString();

  let subData = (cats.length == 0) ? data : data.filter(item => cats.search(item.Subject) >= 0);

  displayCourse(subData);

});


//** Display 
function displayCourse(items) {
  let array = ``;
  $.each(items, function (k, v) {
    array += `
            <div class="col-12 col-sm-6 col-md-4 mx-auto p-3">
                <a class="d-flex flex-column text-reset" href="./Courses/${v.Detail}" target="new">
                  <div class="col-12 text-center">
                    <img src="${v.Img}" width="100%" alt="course">
                  </div>
                  <div class="col-12 px-4">
                    <h5 style="text-align: justify">${v.NameCourse}</h5>
                    <div class="d-flex row">
                      <div class="d-flex">
                        <p class="mr-auto"><i>${v.Teacher}</i></p>
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
              </div>
              <div class="w-100 d-sm-none"></div>
            `;
  });

  $("#gallery").html(array);
}