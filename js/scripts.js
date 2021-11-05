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
  // Question 1 submit
  $("#question-1").submit(function(event) {
    event.preventDefault();
    const question1Answer = $("input:radio[name=question-1-radios]:checked").val();
    console.log(question1Answer);
    hideQuestions();
    $("#question-2").show();
  });
  // Question 2 submit
  $("#question-2").submit(function(event) {
    event.preventDefault();
    const question2Answer = $("input:radio[name=question-2-radios]:checked").val();
    console.log(question2Answer);
    hideQuestions();
    $("#question-3").show();
  });
  // Question 3 submit
  $("#question-3").submit(function(event) {
    event.preventDefault();
    const question3Answer = $("input:radio[name=question-3-radios]:checked").val();
    console.log(question3Answer);
    hideQuestions();
    $("#question-4").show();
  });
  // Question 4 submit
  $("#question-4").submit(function(event) {
    event.preventDefault();
    const question4Answer = $("input:radio[name=question-4-radios]:checked").val();
    console.log(question4Answer);
    hideQuestions();
    $("#question-5").show();
  });
  // Question 5 submit
  $("#question-5").submit(function(event) {
    event.preventDefault();
    const question5Answer = $("input:radio[name=question-5-radios]:checked").val();
    console.log(question5Answer);
    hideQuestions();
    $("#frontend-suggestion,#backend-suggestion,#app-development-suggestion").show();
  });
});