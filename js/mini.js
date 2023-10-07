$(function () {
  $(".btn-left").click(function () {
    console.log("asdf");
    $(".list-left").toggleClass("open");
  });
  $(".btn-right").click(function () {
    $(".list-right").toggleClass("open");
  });
});
