$(document).ready(function () {

    $('#questions').hide();

    function startQuiz() {
        // $('#button-start').hide();
        $('#button-start').fadeOut(3000, function () {
        });
        $('#questions').show();
    }


    $('#button-start').on("click", startQuiz);






















});