function hideQuestions() {
  $("#question-1").hide();
  $("#question-2").hide();
  $("#question-3").hide();
  $("#question-4").hide();
  $("#question-5").hide();
}
$(document).ready(function() {
  // Quiz start
  $("#suggestor-start-card").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#firstName").val();
    const lastName = $("input#lastName").val();
    const fullName = firstName + " " + lastName;
    $(".full-name").append(fullName);
    $("#suggestor-start-card").hide();
    $("#question-1").show();
  });
});