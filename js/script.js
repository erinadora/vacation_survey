$(document).ready(function() {

  $("#next").hide().fadeIn(2600);
  $("img.arrow1").hide().fadeIn(2600);

  $("#survey").submit(function(event) {

    var passport = $("input#passport").val();
    var party = $("input#party").val();
    var nature = $("input#nature").val();
    var solo = $("input#solo").val();

    if (passport === "Yes" && party === "Yes") {
      $(".tokyo").show();
      $(".section1").hide();
    } else if (passport === "Yes" && party === "No") {
      $(".patagonia").show();
      $(".section1").hide();
    } else if (passport === "No" && party === "No") {
      $(".home").show();
      $(".section1").hide();
    } else if (passport === "Yes" && nature === "Nature") {
      $(".patagonia").show();
      $(".section1").hide();
    } else if (passport === "No" && party === "Yes") {
      $(".vegas").show();
      $(".section1").hide();
    } else if (nature === "No" && solo === "Group") {
      $(".tokyo").show();
      $(".section1").hide();
    } else if (solo === "Solo" && party === "No") {
      $(".home").show();
      $(".section1").hide();
    } else {
      $(".home").show();
      $(".section1").hide();
    }

    event.preventDefault();
  });
});
