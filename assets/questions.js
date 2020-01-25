

$(document).ready(function () {
  var score = 0;
  var secondsLeft = 75;
  var timer = document.getElementById('timer');

  var questionsChoices =
  {
    title: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",

    title2: "The condition in an if / else statement is enclosed within ____.",
    choices2: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer2: "parentheses",

    title3: "The ___ tag set provides information to the browser about your webpage including the author name and keywords.",
    choices3: ["<html>", "<meta>", "<head>", "<body>"],
    answer3: "<meta>",

    title4: "What does CSS stand for?",
    choices4: ["Cascading Style Sheets", "Custom Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer4: "Cascading Style Sheets",

    title5: "Which HTML tag is used to define an internal style sheet?",
    choices5: ["<css>", "<style>", "<iss>", "<script>"],
    answer5: "<style>",
  };

  $('#questions').hide();
  $('#game-over').hide();

  function stopTimer() {
    clearInterval(interval);
    // $('#questions').hide();
    $('#timer').hide();
  }


  function startTime() {
    interval = setInterval(function () {
      $('#timer').show();
      secondsLeft--;
      timer.textContent = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(interval);
        $('#questions').hide();
        $('#timer').hide();


      }
      // $('#timer').show();
    }, 1000);

  }


  function startQuiz() {
    startTime();
    $('#button-start').hide();
    $('.jumbo-class').hide();

    $('#questions').show();


    renderQuestions();
    renderAnswers();
  }

  function renderQuestions() {
    $('#question').html('<h3>' + questionsChoices.title + '<h3>');


  }
  function renderQuestionsTwo() {
    $('#question').html('<h3>' + questionsChoices.title2 + '<h3>');

  }

  function renderQuestionsThree() {
    $('#question').html('<h3>' + questionsChoices.title3 + '<h3>');


  }

  function renderQuestionsFour() {
    $('#question').html('<h3>' + questionsChoices.title4 + '<h3>');


  }

  function renderQuestionsFive() {
    $('#question').html('<h3>' + questionsChoices.title5 + '<h3>');


  }

  function renderAnswers() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices[0]);
      $('.choices .list-design-2').text(questionsChoices.choices[1]);
      $('.choices .list-design-3').text(questionsChoices.choices[2]);
      $('.choices .list-design-4').text(questionsChoices.choices[3]);
    }


    $('.choices .list-design-1').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();




    })

    $('.choices .list-design-2').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsTwo();
      renderAnswersTwo();

    })

    $('.choices .list-design-4').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();
    })


  }
  function renderAnswersTwo() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices2[0]);
      $('.choices .list-design-2').text(questionsChoices.choices2[1]);
      $('.choices .list-design-3').text(questionsChoices.choices2[2]);
      $('.choices .list-design-4').text(questionsChoices.choices2[3]);
    }
    $('.choices .list-design-1').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();


    })

    $('.choices .list-design-2').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsThree();
      renderAnswersThree();




    })

    $('.choices .list-design-4').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();

    })


  }

  function renderAnswersThree() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices3[0]);
      $('.choices .list-design-2').text(questionsChoices.choices3[1]);
      $('.choices .list-design-3').text(questionsChoices.choices3[2]);
      $('.choices .list-design-4').text(questionsChoices.choices3[3]);
    }
    $('.choices .list-design-1').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();


    })

    $('.choices .list-design-2').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsFour();
      renderAnswersFour();




    })

    $('.choices .list-design-4').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();

    })


  }

  function renderAnswersFour() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices4[0]);
      $('.choices .list-design-2').text(questionsChoices.choices4[1]);
      $('.choices .list-design-3').text(questionsChoices.choices4[2]);
      $('.choices .list-design-4').text(questionsChoices.choices4[3]);
    }
    $('.choices .list-design-1').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();


    })

    $('.choices .list-design-2').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsFive();
      renderAnswersFive();




    })

    $('.choices .list-design-4').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();

    })


  }

  function renderAnswersFive() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices5[0]);
      $('.choices .list-design-2').text(questionsChoices.choices5[1]);
      $('.choices .list-design-3').text(questionsChoices.choices5[2]);
      $('.choices .list-design-4').text(questionsChoices.choices5[3]);
    }
    $('.choices .list-design-1').on('click', function (event) {

      // secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions').hide();
      var initialHigh = localStorage.getItem('highscore');
      if (score > initialHigh) {
        localStorage.setItem('highscore', score);
      }

      stopTimer();

    })

    $('.choices .list-design-2').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions').hide();
      var initialHigh = localStorage.getItem('highscore');
      if (score > initialHigh) {
        localStorage.setItem('highscore', score);
      }
      stopTimer();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      $('#game-over').show();
      $('#questions').hide();
      var initialHigh = localStorage.getItem('highscore');
      if (score > initialHigh) {
        localStorage.setItem('highscore', score);
      }
      stopTimer();





    })

    $('.choices .list-design-4').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions').hide();
      var initialHigh = localStorage.getItem('highscore');
      if (score > initialHigh) {
        localStorage.setItem('highscore', score);

      }
      stopTimer();
    })


  }




  $('#initial-form').on('submit', function (event) {
    // event.preventDefault();
    console.log('worked');
    event.preventDefault();


    var inputValue = (this).value;
    localStorage.setItem('initials', inputValue);
    (this).reset();
  })


  $('#button-start').on("click", startQuiz);


























});
