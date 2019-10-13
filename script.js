

/*
~~PSEUDO CODE~~
//start coding quiz page
//question -> move onto next question
//total score
//submit name with total score and save to local storage


quiz.textContent = 'howdy';

*/

if(document.body.contains(document.getElementById('phaseTwo'))){
    document.getElementById("phaseTwo").style.display="none";
}else{console.log('nothin')};


var count = 0; 
document.getElementById("count").textContent = "Timer: "+count;

function begin(){

    if(document.body.contains(document.getElementById('start'))){
        document.getElementById("start").style.display="none";
    }else{console.log('nothin')};
        
    


   
    
/*
    document.getElementById("start").addEventListener("click", function(event){
        event.preventDefault();
        var startBut = document.getElementById("start");
        startBut.style.display="none";
    });*/

    
    if(document.body.contains(document.getElementById('formEl') && document.getElementsByClassName('card-body'))){
        document.getElementById("formEl").style.display="none";
        document.getElementsByClassName('card-body').style.display="none";
    }else{console.log('nothin')};
    



function startTime(){

    if(document.body.contains(document.getElementById('phaseTwo'))){
        document.getElementById("phaseTwo").style.display="none";
    }else{console.log('nothin')};

    count = 11

    if(document.body.contains(document.getElementById('count'))){
       console.log("nothin")
    }else{var countEl = document.createElement("div");
    countEl.setAttribute("id", "count");
    document.getElementsByClassName("card-body").appendChild(countEl);};
    
    var countDown = function timer(){
    
        
    count--
    document.getElementById('count').textContent= "Timer: "+count;
    //JSON.stringify(count);
    
    if(document.body.contains(document.getElementById('nxt-buttonThree'))){
        document.getElementById('nxt-buttonThree').onclick = clearInterval(x); count = 12;
    }
    else if(count<=0){
        clearInterval(x);
        count = 12;
        if(document.body.contains(document.getElementById('sub'))){
            console.log('nothin')
        }else{countZ();};


    }else{console.log('nothin')};

    
    
    };
    
    var x = setInterval(countDown, 1000);
    };
    
    
    
    var score = 0;
    
    var quiz = document.getElementById('quiz');
    
    var questions = [
        {ques: "What is 1+1?",
         choice: ["11", "lol", "5", "2"],
         answer: "choiceOne"
        },
    
        {ques: "Which button says red",
        choice: ["doggos", "blue", "red", "purple"],
        answer: "choiceTwo"},
    
        {ques: "Which of these is a fruit?",
        choice: ["Tomato", "Chicken", "Car", "Radish"],
        answer: "choiceThree"}
    ];
    
    
    //var quesString = JSON.stringify(questions[0].choice);
    
    
    
    function questionOne(){

        if(document.body.contains(document.getElementById('title'))){
            document.getElementById("title").remove();
        }else{console.log('nothin')};
        
        if(document.body.contains(document.getElementById('question'))){
            document.getElementById("question").remove();
        }else{console.log('nothin')};

        if(document.body.contains(document.getElementById('btn-one'))){
            document.getElementById("btn-one").remove();
        }else{console.log('nothin')};

        if(document.body.contains(document.getElementById('btn-two'))){
            document.getElementById("btn-two").remove();
        }else{console.log('nothin')};

        if(document.body.contains(document.getElementById('btn-three'))){
            document.getElementById("btn-three").remove();
        }else{console.log('nothin')};

        if(document.body.contains(document.getElementById('btn-four'))){
            document.getElementById("btn-four").remove();
        }else{console.log('nothin')};






       startTime();
       
    //QUESTION 1
        {
        
            var winner = document.createElement("div");

        var QuesEl = document.createElement("div");
        QuesEl.setAttribute("id","question");
        quiz.appendChild(QuesEl);
        var question = document.getElementById("question");
        question.innerHTML = questions[0].ques;
        
        
    //CHOICE 1/Q1
    
    
        {var button = document.createElement("button");
        button.innerHTML= questions[0].choice[0];
        button.setAttribute("id", "btn-one");
        quiz.appendChild(button);
    
        document.getElementById('btn-one').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("scoreEl").style.display="block";
            document.getElementById('quiz').innerHTML= '';
            count-= 2;
            score--;
            this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
            var nextButton = document.createElement("button");
            nextButton.innerHTML= "Next";
            nextButton.setAttribute("id", "nxt-button");
            quiz.appendChild(nextButton);
    
            document.getElementById('nxt-button').addEventListener("click", function(event){
                event.preventDefault();
                this.onclick= questionTwo(); this.style = 'block'; this.style.display = 'none';
                document.getElementById("nxt-button").remove();
    
            })
    
        })
    }
    
    
    //CHOICE 2/Q1
    
        {var buttonTwo = document.createElement("button");
        buttonTwo.innerHTML= questions[0].choice[1];
        buttonTwo.setAttribute("id", "btn-two");
        quiz.appendChild(buttonTwo);
    
        document.getElementById('btn-two').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("scoreEl").style.display="block";
            document.getElementById('quiz').innerHTML= '';
            count-= 2;
            score--;
            this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
            var nextButton = document.createElement("button");
            nextButton.innerHTML= "Next";
            nextButton.setAttribute("id", "nxt-button");
            quiz.appendChild(nextButton);
    
            document.getElementById('nxt-button').addEventListener("click", function(event){
                event.preventDefault();
                this.onclick= questionTwo(); this.style = 'block'; this.style.display = 'none';
                document.getElementById("nxt-button").remove();
    
            })
    
        })
    }
    
    //CHOICE 3/Q1
    
        {var buttonThree = document.createElement("button");
        buttonThree.innerHTML = questions[0].choice[2];
        buttonThree.setAttribute("id", "btn-three");
        quiz.appendChild(buttonThree);
    
        document.getElementById('btn-three').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("scoreEl").style.display="block";
            document.getElementById('quiz').innerHTML= '';
            count-= 2;
            score--;
            this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
            var nextButton = document.createElement("button");
            nextButton.innerHTML= "Next";
            nextButton.setAttribute("id", "nxt-button");
            quiz.appendChild(nextButton);
    
            document.getElementById('nxt-button').addEventListener("click", function(event){
                event.preventDefault();
                this.onclick= questionTwo(); this.style = 'block'; this.style.display = 'none';
                document.getElementById("nxt-button").remove();
                
    
            })
    
        })
    }
        
    //CHOICE 4/Q1
        
        {
        
            var buttonFour = document.createElement("button");
        buttonFour.innerHTML = questions[0].choice[3];
        buttonFour.setAttribute("id", "btn-four");
        quiz.appendChild(buttonFour);
    
        document.getElementById('btn-four').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("scoreEl").style.display="block";
            document.getElementById('quiz').innerHTML= '';
            score++;
            this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
            var nextButton = document.createElement("button");
            nextButton.innerHTML= "Next";
            nextButton.setAttribute("id", "nxt-button");
            quiz.appendChild(nextButton);
    
            document.getElementById('nxt-button').addEventListener("click", function(event){
                event.preventDefault();
                this.onclick= questionTwo(); this.style = 'block'; this.style.display = 'none';
                document.getElementById("nxt-button").remove();
    
    
            })
    
    
        })
       
        }
    
        
    }};
    
    questionOne();

    function questionTwo(){
    
    //QUESTION 2
    
        {
            
            var QuesEl = document.createElement("div");
        QuesEl.setAttribute("id","question");
        quiz.appendChild(QuesEl);
        var question = document.getElementById("question");
        question.innerHTML = questions[1].ques;
            
            
    //CHOICE 1/Q2    
        
            {var button = document.createElement("button");
            button.innerHTML= questions[1].choice[0];
            button.setAttribute("id", "btn-one");
            quiz.appendChild(button);
        
            document.getElementById('btn-one').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonTwo");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonTwo').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= questionThree(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonTwo").remove();
        
                })
        
            })
        }
        
    //CHOICE 2/Q2    
        
            {var buttonTwo = document.createElement("button");
            buttonTwo.innerHTML= questions[1].choice[1];
            buttonTwo.setAttribute("id", "btn-two");
            quiz.appendChild(buttonTwo);
        
            document.getElementById('btn-two').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonTwo");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonTwo').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= questionThree(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonTwo").remove();
        
        
                })
        
            })
        }
        
    
    //CHOICE 3/Q2
    
            {var buttonThree = document.createElement("button");
            buttonThree.innerHTML = questions[1].choice[2];
            buttonThree.setAttribute("id", "btn-three");
            quiz.appendChild(buttonThree);
        
            document.getElementById('btn-three').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                score++;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonTwo");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonTwo').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= questionThree(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonTwo").remove();
        
        
                })
        
            })
        }
            
    //CHOICE 4/Q2        
            {
            
                var buttonFour = document.createElement("button");
            buttonFour.innerHTML = questions[1].choice[3];
            buttonFour.setAttribute("id", "btn-four");
            quiz.appendChild(buttonFour);
        
            document.getElementById('btn-four').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonTwo");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonTwo').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= questionThree(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonTwo").remove();
        
        
                })
        
        
            })
           
            }
        
            
        }
    }
    
    
    //FUNCTION THREE
    
    function questionThree(){
        {
            var QuesEl = document.createElement("div");
        QuesEl.setAttribute("id","question");
        quiz.appendChild(QuesEl);
        var question = document.getElementById("question");
        question.innerHTML = questions[2].ques;
            
            
            
    //CHOICE 1/Q3    
        
            {var button = document.createElement("button");
            button.innerHTML= questions[2].choice[0];
            button.setAttribute("id", "btn-one");
            quiz.appendChild(button);
        
            document.getElementById('btn-one').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                score++;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonThree");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonThree').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= congrats(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonThree").remove();
        
                })
        
            })
        }
        
    //CHOICE 2/Q3    
        
            {var buttonTwo = document.createElement("button");
            buttonTwo.innerHTML= questions[2].choice[1];
            buttonTwo.setAttribute("id", "btn-two");
            quiz.appendChild(buttonTwo);
        
            document.getElementById('btn-two').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonThree");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonThree').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= congrats(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonThree").remove();
        
        
                })
        
            })
        }
        
    
    //CHOICE 3/Q3
    
            {var buttonThree = document.createElement("button");
            buttonThree.innerHTML = questions[2].choice[2];
            buttonThree.setAttribute("id", "btn-three");
            quiz.appendChild(buttonThree);
        
            document.getElementById('btn-three').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonThree");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonThree').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= congrats(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonThree").remove();
        
        
                })
        
            })
        }
            
    //CHOICE 4/Q2        
            {
            
                var buttonFour = document.createElement("button");
            buttonFour.innerHTML = questions[2].choice[3];
            buttonFour.setAttribute("id", "btn-four");
            quiz.appendChild(buttonFour);
        
            document.getElementById('btn-four').addEventListener("click", function(event){
                event.preventDefault();
                document.getElementById('quiz').innerHTML= '';
                count-= 2;
                score--;
                this.onclick= document.getElementById('scoreEl').innerHTML= 'your score is: ' + score;
                var nextButton = document.createElement("button");
                nextButton.innerHTML= "Next";
                nextButton.setAttribute("id", "nxt-buttonThree");
                quiz.appendChild(nextButton);
        
                document.getElementById('nxt-buttonThree').addEventListener("click", function(event){
                    event.preventDefault();
                    this.onclick= congrats(); this.style = 'block'; this.style.display = 'none';
                    document.getElementById("nxt-buttonThree").remove();
        
        
                })
        
        
            })
           
            }
        
            
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function congrats(){
        
        document.getElementById("phaseTwo").style.display="block";

         //document.write('The count is Zero! Your score is ' + score);
       if(document.body.contains(document.getElementById('nxt-buttonThree'))){
        document.getElementById("nxt-buttonThree").remove();
    }else{console.log('nothin')};

    if(document.body.contains(document.getElementById('nxt-buttonTwo'))){
        document.getElementById("nxt-buttonTwo").remove();
    }else{console.log('nothin')};

    if(document.body.contains(document.getElementById('nxt-button'))){
        document.getElementById("nxt-button").remove()
    }else{console.log('nothin')};

       //document.getElementById("nxt-button").remove();
       //document.getElementById('nxt-button').addEventListener("click", function(event){
       document.getElementById("list-container").style.display="block"; 
       document.getElementById("phaseOne").style.display="none";
       document.getElementById("scoreEl").style.display="none";
       //document.getElementById("quiz").style.display= "none";
       //document.getElementById("start").style.display="none";
       //document.getElementById("count").style.display="none";
        var form = document.createElement("form");
        form.setAttribute('id', 'formEl');

        var winner = document.createElement("div");
        winner.setAttribute("id", "winner");
        winner.innerHTML ="Winner!"

        var textName = document.createElement("textarea")
        textName.type = "text"
        textName.placeholder= "Type your name here!"
        //textName.innerHTML= "";

        var textEmail = document.createElement("textarea")
        textEmail.type = "text"
        textEmail.placeholder= "Type your Email here!"
        textEmail.innerHTML= "";
       

        var sub = document.createElement("button");
        sub.type = "button";
        sub.innerHTML = "Submit";
        sub.setAttribute("id", "sub");
        sub.setAttribute("class", "col-2");

        var refreshButton = document.createElement("button");
        refreshButton.type = "button";
        refreshButton.innerHTML = "Try Again!";
        refreshButton.setAttribute("id", "try");
        refreshButton.setAttribute("class", "col-2");

        var finishButtonsRow = document.createElement("div");
        finishButtonsRow.setAttribute("class", "row");

        var colSpaceLeft = document.createElement("div");
        colSpaceLeft.setAttribute("class", "col-4");

        var colSpaceRight = document.createElement("div");
        colSpaceRight.setAttribute("class", "col-4");
     

        var phaseTwo = document.getElementById("phaseTwo");
        phaseTwo.appendChild(form);
        form.appendChild(winner);
        form.appendChild(textName);
        form.appendChild(textEmail);
        form.appendChild(finishButtonsRow);
        finishButtonsRow.appendChild(colSpaceLeft);
        finishButtonsRow.appendChild(sub);
        finishButtonsRow.appendChild(refreshButton);
        finishButtonsRow.appendChild(colSpaceRight);


        if(score===1||score===-1){
            winner.innerHTML="Winner! Your score is " + score + " point!"
            }else{winner.innerHTML="Winner! Your score is " + score + " points!"};

       

        document.getElementById('try').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("phaseOne").style.display="block";
            document.getElementById("list-container").style.display="none";
            var remForm = document.getElementById('formEl');
            remForm.parentNode.removeChild(remForm);
           begin();

        })








        
        

        var emailInput = [];
        var highScore = [];

document.getElementById('sub').addEventListener("click", function(event){
event.preventDefault();

       

        var emailVal = textEmail.value;
        JSON.stringify(emailVal);
        emailInput.push(emailVal);

        var nameVal = textName.value;
        JSON.stringify(nameVal);
        highScore.push(nameVal);

        /*
        var lisCon = document.createElement("ul");
        lisCon.setAttribute("id", "list-container");
        document.body.appendChild(lisCon);
        */
        var listContainer = document.getElementById('list-container');
        //listContainer.innerHTML='';
        

        for(var i=0; i<highScore.length; i++){
        localStorage.setItem("Name", highScore[i]);
        localStorage.setItem("Email", emailInput[i]);
        
        var storedName = localStorage.getItem("Name");
        var storedEmail = localStorage.getItem("Email");

       

        var lisItem = document.createElement("li");

        lisItem.innerHTML= "Name: " + storedName  + " Email: " + storedEmail + " Score: " + score + " Point(s)";

       

       
        listContainer.appendChild(lisItem);


console.log(storedName)

       
}


});

    
    };
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function countZ(){



        document.getElementById("phaseTwo").style.display="block";

       //document.write('The count is Zero! Your score is ' + score);
       if(document.body.contains(document.getElementById('nxt-buttonThree'))){
        document.getElementById("nxt-buttonThree").remove();
    }else{console.log('nothin')};

    if(document.body.contains(document.getElementById('nxt-buttonTwo'))){
        document.getElementById("nxt-buttonTwo").remove();
    }else{console.log('nothin')};

    if(document.body.contains(document.getElementById('nxt-button'))){
        document.getElementById("nxt-button").remove()
    }else{console.log('nothin')};

       //document.getElementById("nxt-button").remove();
       //document.getElementById('nxt-button').addEventListener("click", function(event){
       document.getElementById("list-container").style.display="block"; 
       document.getElementById("phaseOne").style.display="none";
       document.getElementById("scoreEl").style.display="none";
       //document.getElementById("quiz").style.display= "none";
       //document.getElementById("start").style.display="none";
       //document.getElementById("count").style.display="none";
        var form = document.createElement("form");
        form.setAttribute('id', 'formEl');

        var winner = document.createElement("div");
        winner.setAttribute("id", "winner");
        winner.innerHTML ="Winner!"

        var textName = document.createElement("textarea")
        textName.type = "text"
        textName.placeholder= "Type your name here!"
        textName.innerHTML= "";

        var textEmail = document.createElement("textarea")
        textEmail.type = "text"
        textEmail.placeholder= "Type your Email here!"
        textEmail.innerHTML= "";
       

        var sub = document.createElement("button");
        sub.type = "button";
        sub.innerHTML = "Submit";
        sub.setAttribute("id", "sub");
        sub.setAttribute("class", "col-2");

        var refreshButton = document.createElement("button");
        refreshButton.type = "button";
        refreshButton.innerHTML = "Try Again!";
        refreshButton.setAttribute("id", "try");
        refreshButton.setAttribute("class", "col-2");

        var finishButtonsRow = document.createElement("div");
        finishButtonsRow.setAttribute("class", "row");

        var colSpaceLeft = document.createElement("div");
        colSpaceLeft.setAttribute("class", "col-4");

        var colSpaceRight = document.createElement("div");
        colSpaceRight.setAttribute("class", "col-4");
     

        var phaseTwo = document.getElementById("phaseTwo");
        phaseTwo.appendChild(form);
        phaseTwo.appendChild(form);
        form.appendChild(winner);
        form.appendChild(textName);
        form.appendChild(textEmail);
        form.appendChild(finishButtonsRow);
        finishButtonsRow.appendChild(colSpaceLeft);
        finishButtonsRow.appendChild(sub);
        finishButtonsRow.appendChild(refreshButton);
        finishButtonsRow.appendChild(colSpaceRight);

        if(score===1||score===-1){
            winner.innerHTML="Time's up and you lost! Your score is " + score + " point!"
            }else{winner.innerHTML="Time's up and you lost! Your score is " + score + " points!"};

        document.getElementById('try').addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("phaseOne").style.display="block";
            document.getElementById("list-container").style.display="none";
            var remForm = document.getElementById('formEl');
            remForm.parentNode.removeChild(remForm);
           begin();

        })








        
        

        var emailInput = [];
        var highScore = [];

document.getElementById('sub').addEventListener("click", function(event){
event.preventDefault();

       

        var emailVal = textEmail.value;
        JSON.stringify(emailVal);
        emailInput.push(emailVal);
        

        var nameVal = textName.value;
        JSON.stringify(nameVal);
        highScore.push(nameVal);

        /*
        var lisCon = document.createElement("ul");
        lisCon.setAttribute("id", "list-container");
        document.body.appendChild(lisCon);
        */
        var listContainer = document.getElementById('list-container');
        //listContainer.innerHTML='';
        

        for(var i=0; i<highScore.length; i++){
        localStorage.setItem("Name", highScore[i]);
        localStorage.setItem("Email", emailInput[i]);
        
        var storedName = localStorage.getItem("Name");
        var storedEmail = localStorage.getItem("Email");

       

        var lisItem = document.createElement("li");

        lisItem.innerHTML= "Name: " + storedName  + " Email: " + storedEmail + " Score: " + score + " Point(s)";

       

       
        listContainer.appendChild(lisItem);


console.log(storedName)

       
}


});

        
    }
    

}
