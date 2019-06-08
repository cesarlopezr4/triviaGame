//  trivia - game activity - How is your knowledge of the world 
//  ****

// TODO: Put links to our images in this image array.




// var questions = ["Which is the capital of Finland?",
//     "which team won the Soccer Champions League?",
//     "Who runs SPACE X, company specialized in rockets and spacecraft?",
//     "Who is the current president of France?"];

//  var alternatives1 = ["Stockolm", "Geneve", "Helsinsky", "Melbourne"];
//  var alternatives2 = ["Real Madrid", "Liverpool", "Ajax", "Orlando Lions"];
//  var alternatives3 = ["Richard Banson", "Warren Buffet", "Darth Vader", "Elon Musk"];
//  var alternatives4 = ["De gaulle", "Asterix", "Lacoste", "Macron"]//





// var questions = ["Which is the capital of Finland?","Stockolm", "Geneve", "Helsinsky", "Melbourne",
//                 "which team won the Soccer Champions League?", "Real Madrid", "Liverpool", "Ajax", "Orlando Lions",
//                 "Who runs SPACE X, company specialized in rockets and spacecraft?","Richard Banson", "Warren Buffet", "Darth Vader", "Elon Musk",
//                 "Who is the current president of France?", "De gaulle", "Asterix", "Lacoste", "Macron"];


//  var correctAnswersIndex = [2 , 1 , 3 , 3];


 var questionsMaster = [
     { question:" Which is the capital of Finland?",
     answers: [" a)Stockolm ", " b)Geneve ", " c)Helsinsky ", " d)Melbourne "],
     correct: "c)Helsinsky"
    },
     { question:"pregunta",
     answers: ["Answer1","answer2","answer3","answer4"],
     correct: "Answer1"
    },
     { question:"pregunta",
     answers: ["Answer1","answer2","answer3","answer4"],
     correct: "Answer1"
    },
     { question:"pregunta",
     answers: ["Answer1","answer2","answer3","answer4"],
     correct: "Answer1"
    }
 ]

 // set interval timer
var timer = 30;
var intervalId;
var questionNumber = 1;

// Count will keep track of the index of the currently question  
var counter = 0;

//start  button
// $(document).ready(function();
// {
    counter = 0;
    $("#start").click(function(){
 
     $("#Quiz-area").append("<h2>Question </h2>");
                    
        // var card = $("#Quiz-area");
        
       loadQuestion();
})

function loadQuestion() {

    //set the timer 
    //timer = set interval (game .countdown ,1000)
    // intervalId = setInterval(countdown,1000);
    // dynamically add question into card variable  card.html ("<h2>" +"</h2>'")
    

    var card = $("#Quiz-area")
    card.append(questionsMaster[counter].question[counter]);
        card.append(questionsMaster[counter].answers[counter + 1]);
        card.append(questionsMaster[counter].answers[counter + 2]);
        card.append(questionsMaster[counter].answers[counter + 3]);
        card.append(questionsMaster[counter].answers[counter + 4]);
    }

    
function nextQuestion() {
    //set a counteer 
    //game counter
    //use jquery to change the text of the game counter 
    //increment the currenteQuestion by one 
    //call the loadquestioin function
    
        //set the timer 
        //timer = set interval (game .countdown ,1000)
        intervalId = setInterval(countdown,1000);
        // dynamically add question into card variable  card.ht,ml ("<h2>" +"</h2>'")
        var card = $("#quiz-area");
        topValue = index  + 4;
        card.append(question[index]);
         for (var index = 0; 0 < topValue; index++) {
               
            card.append(question[index]);
        }
        
        function countdown () {
            //decrement counter 
            // use jquery to put dynamicaly put logic
            counter--;
            $("#sub-wrapper").html ("<h2>" + counter +"</h2>");
            if (counter === 0 ) {
                timeUp();
            }
        }
    
}

function timeUp() {
    // run out of time 
    stop();
    alert (" Time up!")
   
   }

function correctAnswer() {



}

function incorrectAnswer() {


}
function stop(){


}
// clear internal varibles 
// intervalId 





// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var corrects = 0;
var incorrects = 0;
var counter = 0;


//    var yourScore = 0;
$("#corrects-text").text(corrects);
$("incorrects-text").text(incorrects);
$("#score-text").text(counter);

// Now for the hard part. Creating multiple questions each with their own unique response value.


// Next we create a for loop to create crystals for every numberOption.

// For each question must be loaded 



// new iteraction


// for (let index = 0; index < questions.length; index++) {

//     // load questions

//     // Lastly, each question will get added to the page.
//     $("#sub-wrapper").prepend(questions[index]);

//     // This time, our click event applies to every single crystal on the page. Not just one.
// }
// $(".document").on("click", ".answer-button", function (e) {
//     game.clicked(e);
// });


// var crystalValue = ($(this).attr("data-crystalvalue"));
// crystalValue = parseInt(crystalValue);

// // We then add the crystalValue to the user's "counter" which is a global variable.
// // Every click, from every crystal adds to the global counter.
// counter += crystalValue;

// // console.log(counter)

// if (counter === targetNumber) {
//     wins++;
//     $("#wins-text").text(wins);
//     counter = 0;
//     $("#score-text").text(counter)
//     getRandom();
//     // winsText.textContent = "wins: " + wins;
//     // var winsText = document.getElementById("wins-text");
// } else if (counter > targetNumber) {
//     losses++;
//     $("#losses-text").text(losses);
//     counter = 0;
//     $("#score-text").text(counter)
//     getRandom();
//     // var lossesText = document.getElementById("losses-text");
//     // lossesText.textContent = "losses: " + losses;

// } else $("#score-text").text(counter);


// });

