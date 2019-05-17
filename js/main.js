(function($){
    let timerWrapper = document.getElementById("timer-wrapper");
    let questions = $.sampleQuestions;    
    let arrayQuestions = questions.map((question,index) => {
        return new Question(index,question.query,question.options,question.answer);
    });   
    
    
    let test = new Test(1,arrayQuestions);
    //test.renderToDom();
    
    function showResults(results){
        
        if(results >= 80){
           decision = swal({
                title: "Baba, Ndio haya Matokeo",
                text: `You have scored ${results} % .Click Ok to play games, no to return to home`,
                icon: "success",                
                buttons: true
              }).then((decision) => {
                if (decision) {
                    $(location).attr("href",`${window.location.protocol}//${window.location.hostname}:${window.location.port}/afrolingo/index1.html`);
                } else {
                    $(location).attr("href",`${window.location.protocol}//${window.location.hostname}:${window.location.port}/afrolingo/index.html`);
                }
              });;
              console.log(decision);
              //$(location).attr("href",`${window.location.protocol}//${window.location.hostname}/index1.html`);
        }
        else{
            decision = swal({
                title: "Baba, Ndio haya Matokeo",
                text: `You have scored ${results} %\n Click Ok to be redirected to our learning center,no to retake test`,
                icon: "error",                
                buttons: true
              }).then((decision) => {
                if (decision) {
                    $(location).attr("href",`${window.location.protocol}//${window.location.hostname}:${window.location.port}/afrolingo/content.html`);
                } else {
                    $(location).attr("href",`${window.location.protocol}//${window.location.hostname}:${window.location.port}/afrolingo/quizz.html`);
                }
              });
              //$(location).attr("href",`${window.location.protocol}//${window.location.hostname}/content.html`);
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
        $(document.getElementById("timer-wrapper")).children("h3").text(0);
        clearInterval($.timerId);
    });

})($);
