$(document).ready(function () {
  var right = 0;
  var wrong = 0;
  var secondsLeft = 60;
  var timer = document.getElementById('timer');

  var questionsChoices =
  {
    title: "Commonly used data types DO NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",

    title2: "The condition in an if / else statement is enclosed within ____.",
    choices2: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer2: "parentheses"
  };

  $('#questions').hide();





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

  function renderAnswers() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices[0]);
      $('.choices .list-design-2').text(questionsChoices.choices[1]);
      $('.choices .list-design-3').text(questionsChoices.choices[2]);
      $('.choices .list-design-4').text(questionsChoices.choices[3]);
    }
    $('.choices .list-design-1').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;
      renderQuestionsTwo();
      renderAnswersTwo();
    })

    $('.choices .list-design-2').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;
      renderQuestionsTwo();
      renderAnswersTwo();
    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      right++;
      renderQuestionsTwo();
      renderAnswersTwo();
      console.log(right);
    })

    $('.choices .list-design-4').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;
      renderQuestionsTwo();
      renderAnswersTwo();
    })


  }
  function renderAnswersTwo() {
    for (let i = 0; i < questionsChoices.choices.length; i++) {
      $('.choices .list-design-1').text(questionsChoices.choices2[0]);
      $('.choices .list-design-2').text(questionsChoices.choices2[1]);
      $('.choices .list-design-3').text(questionsChoices.choices2[3]);
      $('.choices .list-design-4').text(questionsChoices.choices2[4]);
    }
    $('.choices .list-design-1').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;

      console.log(right);
    })

    $('.choices .list-design-2').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;

    })

    $('.choices .list-design-3').on('click', function () {
      // secondsLeft = secondsLeft - 15;
      right++;


    })

    $('.choices .list-design-4').on('click', function () {
      secondsLeft = secondsLeft - 15;
      wrong++;

    })


  }


  $('#button-start').on("click", startQuiz);






















});