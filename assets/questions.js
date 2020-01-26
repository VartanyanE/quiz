

$(document).ready(function () {
  var score = 0;
  var secondsLeft = 75;
  var timer = document.getElementById('timer');
  $('#stored-initials').text(localStorage.getItem('initials'));
  $('#button-restart').hide();



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
  $('#questions2').hide();
  $('#questions3').hide();
  $('#questions4').hide();
  $('#questions5').hide();
  $('#game-over').hide();

  function stopTimer() {
    clearInterval(interval);
    // $('#questions').hide();
    $('#timer').hide();
    secondsLeft = 75;
    $('#button-restart').hide();
  }


  function startTime() {
    interval = setInterval(function () {
      $('#timer').show();
      secondsLeft--;
      timer.textContent = secondsLeft;
      if (secondsLeft <= 0) {
        clearInterval(interval);
        $('#questions').hide();
        $('#questions2').hide();
        $('#questions3').hide();
        $('#questions4').hide();
        $('#questions5').hide();
        $('#timer').hide();
        $('#game-over').show();


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

  function restartQuiz() {
    stopTimer();
    startTime();
    $('#button-start').hide();
    $('.jumbo-class').hide();
    $('#questions').show();
    $('#game-over').hide();


    renderQuestions();
    renderAnswers();
  }

  function renderQuestions() {
    $('#question').html('<h3>' + questionsChoices.title + '<h3>');


  }
  function renderQuestionsTwo() {
    $('#question2').html('<h3>' + questionsChoices.title2 + '<h3>');

  }

  function renderQuestionsThree() {
    $('#question3').html('<h3>' + questionsChoices.title3 + '<h3>');


  }

  function renderQuestionsFour() {
    $('#question4').html('<h3>' + questionsChoices.title4 + '<h3>');


  }

  function renderQuestionsFive() {
    $('#question5').html('<h3>' + questionsChoices.title5 + '<h3>');


  }

  function renderAnswers() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices[0]);
      $('.choices .list-design-2').text(questionsChoices.choices[1]);
      $('.choices .list-design-3').text(questionsChoices.choices[2]);
      $('.choices .list-design-4').text(questionsChoices.choices[3]);
    }


    $('.choices .list-design-1').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();
      $('#questions').hide();
      $('#questions2').show();






    })

    $('.choices .list-design-2').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();
      $('#questions').hide();
      $('#questions2').show();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsTwo();
      renderAnswersTwo();
      $('#questions').hide();
      $('#questions2').show();


    })

    $('.choices .list-design-4').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsTwo();
      renderAnswersTwo();
      $('#questions').hide();
      $('#questions2').show();
    })


  }
  function renderAnswersTwo() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-5').text(questionsChoices.choices2[0]);
      $('.choices .list-design-6').text(questionsChoices.choices2[1]);
      $('.choices .list-design-7').text(questionsChoices.choices2[2]);
      $('.choices .list-design-8').text(questionsChoices.choices2[3]);
    }
    $('.choices .list-design-5').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();
      $('#questions2').hide();
      $('#questions3').show();


    })

    $('.choices .list-design-6').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();
      $('#questions2').hide();
      $('#questions3').show();
    })

    $('.choices .list-design-7').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsThree();
      renderAnswersThree();
      $('#questions2').hide();
      $('#questions3').show();



    })

    $('.choices .list-design-8').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsThree();
      renderAnswersThree();
      $('#questions2').hide();
      $('#questions3').show();


    })


  }

  function renderAnswersThree() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-9').text(questionsChoices.choices3[0]);
      $('.choices .list-design-10').text(questionsChoices.choices3[1]);
      $('.choices .list-design-11').text(questionsChoices.choices3[2]);
      $('.choices .list-design-12').text(questionsChoices.choices3[3]);
    }
    $('.choices .list-design-9').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();
      $('#questions3').hide();
      $('#questions4').show();


    })

    $('.choices .list-design-10').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();
      $('#questions3').hide();
      $('#questions4').show();
    })

    $('.choices .list-design-11').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsFour();
      renderAnswersFour();
      $('#questions3').hide();
      $('#questions4').show();




    })

    $('.choices .list-design-12').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFour();
      renderAnswersFour();
      $('#questions3').hide();
      $('#questions4').show();

    })


  }

  function renderAnswersFour() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-13').text(questionsChoices.choices4[0]);
      $('.choices .list-design-14').text(questionsChoices.choices4[1]);
      $('.choices .list-design-15').text(questionsChoices.choices4[2]);
      $('.choices .list-design-16').text(questionsChoices.choices4[3]);
    }
    $('.choices .list-design-13').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();
      $('#questions4').hide();
      $('#questions5').show();


    })

    $('.choices .list-design-14').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();
      $('#questions4').hide();
      $('#questions5').show();
    })

    $('.choices .list-design-15').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      renderQuestionsFive();
      renderAnswersFive();
      $('#questions4').hide();
      $('#questions5').show();




    })

    $('.choices .list-design-16').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      renderQuestionsFive();
      renderAnswersFive();
      $('#questions4').hide();
      $('#questions5').show();

    })


  }

  function renderAnswersFive() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-17').text(questionsChoices.choices5[0]);
      $('.choices .list-design-18').text(questionsChoices.choices5[1]);
      $('.choices .list-design-19').text(questionsChoices.choices5[2]);
      $('.choices .list-design-20').text(questionsChoices.choices5[3]);
    }
    $('.choices .list-design-17').on('click', function (event) {

      secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions5').hide();

      localStorage.setItem('high-score', score);
      $('#score').text(localStorage.getItem('high-score'));
      stopTimer();
      $('#button-restart').show();

    })

    $('.choices .list-design-18').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions5').hide();
      localStorage.setItem('high-score', score);
      $('#score').text(localStorage.getItem('high-score'));
      stopTimer();
      $('#button-restart').show();
    })

    $('.choices .list-design-19').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      score++;
      $('#game-over').show();
      $('#questions5').hide();
      localStorage.setItem('high-score', score);
      $('#score').text(localStorage.getItem('high-score'));
      stopTimer();
      $('#button-restart').show();





    })

    $('.choices .list-design-20').on('click', function () {
      secondsLeft = secondsLeft - 15;
      score--;
      $('#game-over').show();
      $('#questions5').hide();

      localStorage.setItem('high-score', score);
      $('#score').text(localStorage.getItem('high-score'));
      stopTimer();
      $('#button-restart').show();
    })


  }




  $('#initial-form').on('submit', function (event) {


    event.preventDefault();


    var inputValue = $('#initials').val();
    localStorage.setItem('initials', inputValue);
    (this).reset();
    $('#stored-initials').text(localStorage.getItem('initials'));

  })


  $('#button-start').on("click", startQuiz);
  $('#button-restart').on("click", restartQuiz);


});
