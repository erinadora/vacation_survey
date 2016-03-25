$(document).ready(function() {

  $("button.pan").click(function() {
    $(".panda").show();
    $(".panda").siblings().hide();

  });

  $("button.turt").click(function() {
    $(".turtle").show();
    $(".turtle").siblings().hide();
  });

  $("button.wild").click(function() {
    $(".cat").show();
    $(".cat").siblings().hide();
  });

  $("button.all").click(function() {
    var animal = prompt("Type one: Panda, Turtle, Cat");

    if (animal === "panda") {
      $(".panda").show();
    } else if (animal === "turtle") {
      $(".turtle").show();
    } else {
      $(".cat").show();
    }
  });
});




$(document).ready(function(event) {
  $("#celeb").submit(function(event) {
    event.preventDefault();
    var gender = $("input#gender").val();
    var age = parseInt($("input#age").val());
    console.log("we've established variables");
    if(gender === "male" && age < 25) {
      alert("Your perfect match is Selena Gomez!!");
    } else if (gender === "male" && age > 25) {
      alert("Your perfect match is Sandra Buttocks!!");
    } else {
      alert("Your perfect match is Hugh Jackman!!");
    }
  });
});
