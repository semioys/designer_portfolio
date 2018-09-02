svg4everybody();
console.log("Connected");

$(function() {
  // SrollIT
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 1000, // how long (in ms) the animation takes
    activeClass: "header__link--active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -25 // offste (in px) for fixed top navigation
  });

  // Navbar Scrolling Setup

  $(window).on("scroll", function() {
    var bodyScroll = $(window).scrollTop(),
      navbar = $(".header__topbar");
    if (bodyScroll > 300) {
      navbar.addClass("header__fixed-top");
    } else {
      navbar.removeClass("header__fixed-top");
    }
  });

  //Barfillers

  $(window).on("scroll", function() {
    var bodyScroll = $(window).scrollTop();

    if (bodyScroll > 300) {
      $("#bar1").barfiller({
        // duration in ms
        duration: 800
      });

      $("#bar2").barfiller({
        // duration in ms
        duration: 1200
      });

      $("#bar3").barfiller({
        // duration in ms
        duration: 1600
      });

      $("#bar4").barfiller({
        // duration in ms
        duration: 2000
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 2,
    navText: [
      "<img src='./img/arrow-right.png'/>",
      "<img src='./img/arrow-left.png'/>"
    ],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});
