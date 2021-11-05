function hideQuestions() {
  $("#question-1").hide();
  $("#question-2").hide();
  $("#question-3").hide();
  $("#question-4").hide();
  $("#question-5").hide();
}
function quizTotal() {
  let quizTotal = question1Answer + question2Answer + question3Answer + question4Answer + question5Answer;
  return quizTotal;
}
let question1Answer = 0;
let question2Answer = 0;
let question3Answer = 0;
let question4Answer = 0;
let question5Answer = 0;
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
    question1Answer = parseInt($("input:radio[name=question-1-radios]:checked").val());
    hideQuestions();
    $("#question-2").show();
  });
  // Question 2 submit
  $("#question-2").submit(function(event) {
    event.preventDefault();
    question2Answer = parseInt($("input:radio[name=question-2-radios]:checked").val());
    hideQuestions();
    $("#question-3").show();
  });
  // Question 3 submit
  $("#question-3").submit(function(event) {
    event.preventDefault();
    question3Answer = parseInt($("input:radio[name=question-3-radios]:checked").val());
    hideQuestions();
    $("#question-4").show();
  });
  // Question 4 submit
  $("#question-4").submit(function(event) {
    event.preventDefault();
    question4Answer = parseInt($("input:radio[name=question-4-radios]:checked").val());
    hideQuestions();
    $("#question-5").show();
  });
  // Question 5 submit and Show results
  $("#question-5").submit(function(event) {
    event.preventDefault();
    question5Answer = parseInt($("input:radio[name=question-5-radios]:checked").val());
    hideQuestions();
    let result = quizTotal();
    if (result >= 1 && result <=5) {
      $("#frontend-suggestion").show();
    } else if (result >= 6 && result <= 10) {
      $("#backend-suggestion").show();
    } else if (result >= 11 && result <= 15) {
      $("#app-development-suggestion").show();
    } else {
      $("#error").show();
    }
  });
  //Reload Page button
  $(".refresh-page-button").click(function() {
    location.reload(true);
  });
});