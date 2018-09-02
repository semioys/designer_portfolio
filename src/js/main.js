svg4everybody();
console.log("Connected");

$(function() {
  $(".ah-container").animatedHeadline({
    animationType: "slide"
  });
});

$(function() {
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
