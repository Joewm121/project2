function tracker(sharp, java, php, ruby, breakfast) {
  var result;
  if (sharp === "Yes") {
    result = '#sharp2';
  } else if (java === "Yes") {
    result = '#java2';
  } else if (sharp === "No" && java === "Yes") {
    result = '#java2';
  } else if (php === "No" && java === "Yes") {
    result = '#ruby2';
  } else if (php === "Yes") {
    result = '#php2';
  } else if (ruby === "Yes") {
    result = '#ruby2';
  } else {
    result = '#breakfast2';
  }
  return result;
}


$(document).ready(function() {
  // submit is method
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var sharp = $("#sharp").val();
    var java = $("#java").val();
    var php = $("#php").val();
    var ruby = $("#ruby").val();
    var breakfast = $("#breakfast").val();

    var output = tracker(sharp, java, php, ruby, breakfast);

    $(output).show();
  });
});
