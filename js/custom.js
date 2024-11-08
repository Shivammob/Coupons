$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("menu-show");
  });
  $("#searchBtn").click(function () {
    $("body").addClass("menu-show");
  });
  $("#searchClose").click(function () {
    $("body").removeClass("menu-show");
  });
});


$(".featured-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-angle-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-angle-right  next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    300: {
      items: 2,
      slideBy: 2,
    },
    1199: {
      items: 4,
      slideBy: 4,
    },
  },
});

$(".coupons-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-angle-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-angle-right  next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  // rtl: direction,
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1,
      slideBy: 1,
    },
    768: {
      items: 2,
      slideBy: 2,
    },
    1199: {
      items: 3,
      slideBy: 3,
    },
  },
});

$(".hot-coupons-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-angle-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-angle-right  next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      nav: false,
      items: 1,
      slideBy: 1,
    },
    768: {
      items: 1,
      slideBy: 1,
    },
  },
});

if ($(window).width() < 767) {
  $(".hot-coupons-carousel").removeClass("owl-carousel owl-theme");
}

if ($(window).width() < 767) {
  $(".popular-brands-wrapper").addClass("popular-brands-carousel");
  $(".popular-brands-carousel").addClass("owl-carousel owl-theme");
}

$(".popular-brands-carousel").owlCarousel({
  margin: 0,
  autoplay: false,
  dots: false,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    300: {
      items: 2.5,
      slideBy: 1,
    },
  },
});

$(".explore-categories-carousel").owlCarousel({
  margin: 20,
  autoplay: false,
  dots: false,
  nav: true,
  navText: [
    "<div class='next'><i class='fa fa-angle-left prev-slide' aria-hidden='true'></i></div>",
    "<div class='previous'><i class='fa fa-angle-right  next-slide' aria-hidden='true'></i></div>",
  ],
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      nav: false,
      items: 1,
      slideBy: 1,
    },
    768: {
      items: 1,
      slideBy: 1,
    },
  },
});

$(".favourite-coupons-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  paginationSpeed: 100,
  animateOut: "fadeOut",
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
  },
});

$(".fav-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  nav: false,
  loop: true,
  autoplayHoverPause: true,
  paginationSpeed: 100,
  animateOut: "fadeOut",
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      slideBy: 1,
    },
    768: {
      margin: 20,
      items: 3,
      slideBy: 3,
    },
    992: {
      items: 1,
      slideBy: 1,
    },
  },
});

//bootstrap tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



let searchBtn = document.getElementById("searchBtn");
let searchWrap =  document.getElementById("searchWrap");
let searchClose = document.getElementById("searchClose");

searchBtn.addEventListener("click", function () {
  searchWrap.classList.add("show");
});

searchClose.addEventListener("click", function () {
  searchWrap.classList.remove("show");
});



window.onscroll = function() {myFunction()};

let stickyNav = document.getElementById("stickyNav")
var sticky = stickyNav.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
}