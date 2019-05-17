(function($){
    let timerWrapper = document.getElementById("timer-wrapper");
    let questions = $.sampleQuestions;    
    let arrayQuestions = questions.map((question,index) => {
        return new Question(index,question.query,question.options,question.answer);
    });   
    
    
    let test = new Test(1,arrayQuestions);
    //test.renderToDom();
    
    function showResults(results){
        if(results >= 70){
            swal({
                title: "Baba, Ndio haya Matokeo",
                text: `You have scored ${results} %`,
                icon: "success",
                button: "Play games",
              });
        }
        else{
            swal({
                title: "Baba, Ndio haya Matokeo",
                text: `You have scored ${results} %`,
                icon: "error",
                button: "Learn Kiswahili",
              });
        }

    };
    function getUserAnswers(){
        let answersArray = [];
        $.each($("input[type=radio]:checked"),function(radioObj){
            answersArray.push({
               answer: $(this).val(),
               questionId: $(this).prop("name")
            });
            
        });
        return answersArray;
    }
    timerWrapper.addEventListener("timedOut",function(evnt){
        //answerUsers = ;
        showResults(test.updateAnswersUsers(getUserAnswers()).getPercent());
    });  
    $("form#test").submit(function(evnt){
        evnt.preventDefault();
        showResults(test.updateAnswersUsers(getUserAnswers()).getPercent());
    });

})($);
