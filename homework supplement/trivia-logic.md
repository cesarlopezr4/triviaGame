+1. When user press Start to begin the game
    * first question is revealed
    

    1. When question is revealed
    * timer starts at 30 seconds and counts down
    * question text is revealed
    * answer options are revealed 

        1. When user selects an answer
            * counter stops
            * alerts if you are correct
            * alerts if you are incorrect
            * alerts if time is up
            * go to next question


                1. If Correct
                      * Alert "correct!"
                      * image/gif is revealed 
                      * add a point to the correct column
                      * have this on a timer to give user enough time to see everything


                2. If incorrect:
                    * Alert "incorrect!"
                    * reveal correct answer
                    * image/gif is revealed 
                    * add a point to the incorrect column
                    * have this on a timer to give user enough time to see everything

                3. If timer runs out of time(goes to zero)
                    * Alert "timer is up"
                    * reveal correct answer
                    * image/gif is revealed 
                    * add a point to the unaswered column
                    * have this on a timer to give user enough time to see everything



2. Once all questions have been asked:
    * Have time remaining printed
    * Show the User their scores
        * correct
        * incorrect
        * unanswered
    * Have a restart button
    
3. When a user clicks the Reset button
    * reset correct/incorrect/unanswered to zero
    * reset timer
    * reset questions to the begin