//=FLEX-HIGHT-MAINBLOCK====================================================================================================================================================

$(window).resize(function (event) {
  mainblock();
});
function mainblock() {
  let h = $(window).outerHeight();
  $(".mainblock").css("min-height", h);
}
mainblock();

//=FILTER-PORTFOLIO==========================================================================================================================================================

$(".filter__item").click(function (event) {
  let i = $(this).data("filter");
  if (i == 1) {
    $(".portfolio__column").show();
  } else {
    $(".portfolio__column").hide();
    $(".portfolio__column.f_" + i).show();
  }
  $(".filter__item").removeClass("active");
  $(this).addClass("active");

  return false;
});

//=PARALLAX-EFFECT==============================================================================================================================================================

// $(window).scroll(function (event) {
//   let s = $(this).scrollTop() / 2;
//   $(".mainblock").css("transform", "translate3d(0, " + s + "px, 0)");
// });

//=SMOOTH-SCROLL==============================================================================================================================================================

$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          500
        );
        return false;
      }
    }
  });
});

//=FORMS-INPUT-TEXTAREA==============================================================================================================================================================

("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }

    function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }

    //=email-test-function

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  }
});
