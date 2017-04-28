$(document).ready(function() {
  $("#panel-title").click(function() {
    $("#aboutme").toggle();
  });
});
alert("hey hey hey");
// UI logic
$(function() {
  $("#contact").submit(function(event) {
    var name = $("input#name").val();
    var email = $("input#email").val()
    var comment = $("input#comment").val()
    $(".nameConfirm").text(name);
    $(".emailConfirm").text(email);
    $(".commentConfirm").text(comment);
    $(".container1").fadeToggle();
    $(".container2").fadeToggle();
    event.preventDefault();
  });
});
