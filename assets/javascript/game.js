$(document).ready(function() {
    // question number for calling arrays
    var questionNumber = 0;
    // standard time is 15 seconds
    var time = 15;
    // number of correct answers
    var correctGuess = 0;
    //number of incorrect answers
    var incorrectGuess = 0;
    // questions, multiple choices, and correct answers in an array
    var questions = [
            {
                question: "Who first released Killing Me Softly With His Love?",
                choices: ["Lauryn Hill", "Fugees", "Roberta Flack", "Lori Lieberman"],
                correctAnswer: "Roberta Flack",
            },
            {
                question: "Who originally recorded I Just Want To Make Love To You? ",
                choices: ["Willie Dixon", "Foghat", "Muddy Waters", "The Animals"],
                correctAnswer: "Muddy Waters",
            },
            {
                question: "Who originally recorded Tainted Love?",
                choices: ["Marilyn Manson", "Soft Cell", "Oingo Boingo", "Gloria Jones"],
                correctAnswer: "Gloria Jones",
            },
            {
                question: "Who wrote Nothing Compares 2 U?",
                choices: ["Sinead O'Conner", "Prince", "Tori Amos", "Natalie Imbruglia"],
                correctAnswer: "Prince",
            },
            {
                question: "Who wrote Blinded By The Light?",
                choices: ["Foghat", "Manfred Mann's Earth Band", "Tom Jones", "Bruce Springsteen"],
                correctAnswer: "Bruce Springsteen",
            },
            {
                question: "Who wrote Red Red Wine?",
                choices: ["UB40", "Prince", "Tom Jones", "Neil Diamond"],
                correctAnswer: "Neil Diamond",
            },
            {
                question: "Who wrote Twist And Shout?",
                choices: ["The Who", "The Beatles", "The Isley Brothers", "The Top Notes"],
                correctAnswer: "The Top Notes",
            },
            {
                question: "Who wrote Venus?",
                choices: ["The Bangles", "Bananarama", "Shocking Blue", "Kim Wilde"],
                correctAnswer: "Shocking Blue",
            },
            {
                question: "Who wrote Girls Just Want To Have Fun?",
                choices: ["Robert Hazard", "Janet Jackson", "Cyndi Lauper", "Tom Tom Club"],
                correctAnswer: "Robert Hazard",
            },
            {
                question: "Who wrote Ring Of Fire?",
                choices: ["Social Distortion", "Johnny Cash", "Muddy Waters", "Anita Carter"],
                correctAnswer: "Anita Carter",
            },
            {
                question: "Who wrote The First Cut Is The Deepest?",
                choices: ["Sheryl Crow", "Cat Stevens", "Paul Simon", "Rod Stewert"],
                correctAnswer: "Cat Stevens",
            },
            {
                question: "Who wrote Dazed And Confused?",
                choices: ["Yardbirds", "Muddy Waters", "Led Zepplin", "Jake Holmes"],
                correctAnswer: "Jake Holmes",
            },



    ]
    //function to pull information from arrays
    function questionDisplay()  {
        $("#gameDisplay").append(
            "<p class=question>" + questions[questionNumber].question + "</p>"
          + "<p class=choices>" + questions[questionNumber].choices[0] + "</p>"
          + "<p class=choices>" + questions[questionNumber].choices[1] + "</p>"
          + "<p class=choices>" + questions[questionNumber].choices[2] + "</p>"
          + "<p class=choices>" + questions[questionNumber].choices[3] + "</p>"
        );
        
    }
    // function to clear screen and show correct answer was selected
    function userWin() {
        $("#gameDisplay").html(
            "<h1>You answered correctly!</h1>" +
            "<h1>The correct answer is: " + questions[questionNumber].correctAnswer +".</h1>"
        );
        setTimeout(nextQuestion, 3000)
        correctGuess++;
        questionNumber++;
    }
    
    // function to clear screen and show correct answer on wrong guess
    function userLose () {
        $("#gameDisplay").html(
            "<h1>Wrong!</h1>" +
            "<h1>The correct answer is: " + questions[questionNumber].correctAnswer +".</h1>"
        );
        setTimeout(nextQuestion, 3000)
        incorrectGuess ++;
        questionNumber ++;
    }
    
    //function to clear screen and show correct answer if user doesn't answer in time
    function userTimeout () {
        if (time ===0) {
            $("#gameDisplay").html("<h1>Time's up!</h1>");
            $("#gameDisplay").append(questions[questionNumber].correctAnswer)
            incorrectGuess++;
            setTimeout(nextQuestion, 3000)
            questionNumber++;
        }
}
    //function to show the results at the emd of the game
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
    //function to setup timer
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
    //function to move to the next question after timeout
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
    //resets game
    function gameReset() {
        questionNumber = 0;
        correctGuess = 0;
        incorrectGuess =0;
    }
    
    // function to select guess 
    $("#gameDisplay").on("click", ".choices", function() {
        var userGuess = $(this).text();
        if (userGuess === questions[questionNumber].correctAnswer) {
            clearInterval(clock);
            userWin();
        }
        else {
            clearInterval(clock);
            userLose();
        }
    })
    //starts game
    $("#start").click(nextQuestion)
    
})        
     
    
































