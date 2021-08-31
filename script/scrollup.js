$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scrollUp").fadeIn();
    } else {
      $("#scrollUp").fadeOut();
    }
  });

  $("#scrollUp").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 800);
  });
});
