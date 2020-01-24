$(document).ready(function () {

  var secondsLeft = 30;
  var timer = document.getElementById('timer');

  var questionsChoices =
  {
    title: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  };

  $('#questions').hide();





  function startTime() {
    interval = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(interval);

      }
      $('#timer').show();
    }, 1000);

  }


  function startQuiz() {
    startTime();
    $('#button-start').hide();
    $('.jumbo-class').hide();
    // $('#button-start').fadeOut(3000, function () {
    // });
    $('#questions').show();


    renderQuestions();
    renderAnswers();
  }

  function renderQuestions() {
    $('#question').html('<h3>' + questionsChoices.title + '<h3>');


  }

  function renderAnswers() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices[0]);
      $('.choices .list-design-2').text(questionsChoices.choices[1]);
      $('.choices .list-design-3').text(questionsChoices.choices[2]);
      $('.choices .list-design-4').text(questionsChoices.choices[3]);
    }
  }

  $('#button-start').on("click", startQuiz);






















});