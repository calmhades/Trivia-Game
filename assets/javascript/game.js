$(document).ready(function() {

    var questionNumber = 0;

    var time = 20;

    var correctGuess = 0;

    var incorrectGuess = 0;

    var questions = [
            {
                question: "What is the answer to this question?",
                choices: ["This?", "That?", "I don't know?", "Or maybe it's this?"],
                correctAnswer: "This?",
            },
            {
                question: "What is the answer to this question?",
                choices: ["This?", "That?", "I don't know?", "Or maybe it's this?"],
                correctAnswer: "This?",
            }
    ]

    function questionDisplay()  {
        $("#gameDisplay").append(
            "<p class=question>" + questions[questionNumber].question + "</p>"
          + "<p class=choice>" + questions[questionNumber].choices[0] + "</p>"
          + "<p class=choice>" + questions[questionNumber].choices[1] + "</p>"
          + "<p class=choice>" + questions[questionNumber].choices[2] + "</p>"
          + "<p class=choice>" + questions[questionNumber].choices[3] + "</p>"
        );
        
    }
    questionDisplay()
    console.log(questions[questionNumber].correctAnswer)
    function userWin() {
        $("#gameDisplay").html(
            "<h1>You answered correctly!</h1>" +
            "<h1>The correct answer is: " + questions[questionNumber].correctAnswer +".</h1>"
        );
        setTimeout(nextQuestion, 3000)
        correctGuess++;
        questionNumber++;
    }
    // userWin()
    
    function userLose () {
        $("#gameDisplay").html(
            "<h1>Wrong!</h1>" +
            "<h1>The correct answer is: " + questions[questionNumber].correctAnswer +".</h1>"
        );
        setTimeout(nextQuestion, 3000)
        incorrectGuess ++;
        questionNumber ++;
    }
    // userLose ()

    function userTimeout () {
        if (time ===0) {
            $("#gameDisplay").html("<h1>Time's up!</h1>");
            $("#gameDisplay").append("questions[questionNumber].correctAnswer")
            incorrectGuess++;
            setTimeout(nextQuestion, 3000)
            questionNumber++;
        }
}
    function results () {
        $("#gameDisplay").html(
            "<h1>Here's your score!</h1>" +
            "<h1>Correct Answers: " + correctGuess + "</h1>" +
            "<h1>Incorrect Answers: " + incorrectGuess + "<h1>" 
        );
        $("#gameDisplay").append("<h1 id='start'>Try Again?</h1>");
        gameReset();
        $("#gameDisplay").click(nextQuestion);
}

    function timer () {
            clock = setInterval(decrement, 1000);
            function decrement() {
                if (time < 1) {
                    clearInterval(clock);
                    userTimeout();
                }
                else if (time > 0)  {
                    time--;
                }
                $("#timer").html(time);
            }
    }
    function nextQuestion() {
        if (questionNumber < questions.length) {
            time = 15;
            $("#gameDisplay").html("<h1>You have <span id='timer'>" + time + "</span> seconds left!</h1>")
            questionDisplay();
            timer();
            userTimeout()
        }
        else {
            results();
        }
    }

    function gameReset() {
        questionNumber = 0;
        correctGuess = 0;
        incorrectGuess =0;
    }
    

    $("#gameDisplay").on("click", ".choices", function() {
        var userGuess = $(this).text();
        if (userGuess === questions[questionNumber].correctAnswer) {
            clearInterval(clock);
            userWin();
        }
        else {
            clearInterval(clock);
            userLoss();
        }
    }
    // function startGame() {
    //     $("#gameDisplay").html(
    //         "<h1>Click to start the game at any time!</h1>"
        )
    $(document).click(nextQuestion)
    
})        
     
    
































