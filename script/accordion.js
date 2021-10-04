$(document).ready(function ($) {
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      $(this).next().slideToggle("fast");
    });
});
