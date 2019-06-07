1. Create index.html
    1. In head
        * link css / google font/ etc
        * link jquery
    2. In body 
        1. create a Div with an id of "wrapper"
            * h tag for title
            * a div with and id of "sub-wrapper" 
                *  a div with the ID of "quiz-area" (this will hold the dynamic content)
                * create a start button
        2. link javascript

2. Create app.js
    1. create global variable
        1. Variable to put logic into html dynamically
            * var card = $("#quiz-area");
        2. Variable for the Counter
            * var countStartNumber = 30;
        3. Questions array
            * var question  = [{
                question: a string,
                answers: an array with 4 strings,
                correctAnswer: a string,
                image: link to image
            },
            {
                question: a string,
                answers: an array with 4 strings,
                correctAnswer: a string,
                image: link to image
            }]

        4. A variable to hold the set interval
            * var timer;

        5. Game object to hold the logic 
            * var game = {
                1. grab into the questions array
                    * questions: question,
                    * currentQuestion: 0,
                    * counter: CountStartNumber,
                    * correct: 0,
                    * incorrect: 0,

                2. create a countdown function{
                    * decrement counter
                    * use jquery to put dynamically put logic onto the page
                    * if statement
                        * if time is up, run time up function
                        }
                3. create a loadQuestion function
                    * set timer 
                        * timer = setInterval(game.countdown, 1000) 
                    * dynamicatly add question into card variable
                         * *hint* card.html ("<h2>" + "</h2>")
                    * for loop to run through the
                        * questions
                        * a dynamically added buttons with answer options 
                    

                4. create a nextQuestion function
                    * set the counter
                        game.counter = countStartNumber
                    * use jquery to change the text of the game counter
                    * increment the currentQuestion by one
                    * call the loadQuestion function

                5. create a timeUp function
                    * clearInterval(timer)
                    * use jquery to change the text of the game counter
                    * dynamically add out of time to the card
                    * append the Correct answer to the card
                    * append image/gif to the card

                6. create a results function
                     * clearInterval
                     *  dynamically add html to let them know of         there results
                     * use jquery to add html of game.counter to the     id of counter-number
                     * add how many correct answers they got
                     * add how many incorrect answer they got
                     * add how many unanswered 
                     * add a start over button

                7. create a clicked function
                    * clearInterval(timer)
                    * if/ else statment for when an answer is clicked
                        * if correct run answeredCorrectly() function
                        * else run answeredIncorrectly() function

                8. create a answerIncorrectly function
                    * add a point to the incorrect column
                    * clearInterval(timer)
                    * dynamically add html to let them know they are wrong
                    * add the right answer
                    * add the image 
                    * if / else statment
                         *if no more question wait three seconds then show result
                         *else wait three seconds and show next question

                9. create a answeredCorrectly function
                    * add a point to correct column
                    * clearInterval(timer);
                    * dynamically add html to let them know they are    correct
                    * add image
                    * if / else statment
                         *if no more question wait three seconds then show result
                         *else wait three seconds and show next question


                10. create a reset function
            }
                    

    2. create click events
        1. start button
            * $(document).on("click", "#start", function() {
                $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
                game.loadQuestion();
                });

        2. answer button
            * $(document).on("click", ".answer-button", function(e) {
                game.clicked(e);
                });

        3.  start over button  
           *  $(document).on("click", "#start-over", function() {
                game.reset();
                });





            
