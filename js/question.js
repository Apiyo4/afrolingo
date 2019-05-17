class Question{
    constructor(id,query,options,answer){
        this.id = id;
        this.query = query;
        this.options = options || [];
        this.answer = answer; 
        
    };
    markAnswer = function (answers){
        let myAnswer = answers.filter((answer) => {
            return answer.questionId == this.id;
        })[0] || {
            answer: "",
            questionId: this.id
        };
        // console.log(myAnswer);
        return myAnswer["answer"].toLowerCase() === this.answer.toLowerCase();
    };


};

class Test{
    constructor(id,questions,answersObjFromUser = []){
        this.id = id;
        this.questions = questions || [];
        this.markedResults = []; 
        this.answersObjFromUser = answersObjFromUser || [];
        this.domTest = $("#questions-container");

    };
    gatherResults = function(){
        //console.log(this.answersObjFromUser);
        this.markedResults = this.questions.map((question) => {
            return question.markAnswer(this.answersObjFromUser);
        });
    };
    getPercent = function(){
        this.gatherResults();
        let correctAnswers = this.markedResults.filter((markedResult)=>markedResult);
        return (correctAnswers.length / this.questions.length) * 100;
    };
    updateAnswersUsers(answers){
        this.answersObjFromUser = answers;
        return this;
    };
    renderToDom(){
        let content = "";
        this.generateDomElements().forEach(function(ele){
            content +=ele;
        });
        this.domTest.append(content);
    }
    generateDomElements(){

        return this.questions.map(function(question,index){
            return `
            <div class="slides fade">
                <fieldset class="form-group">
                    <legend>Question${index+1}</legend>
                    <div class="question">
                        <h3 class="">${question.query}</h3>
                    </div>
                    <div class="row options">
                        <div class="">
                            <input type="radio" name="${index}" value="${question.options[0]}" id="q${index}op0">
                            <label for="q${index}op0">${question.options[0]}</label>
                        </div>
                        <div class="">
                            <input type="radio" name="${index}" value="${question.options[1]}" id="q${index}op1">
                            <label for="q${index}op1">${question.options[1]}</label>
                        </div>
                    </div>
                    <div class="options">
                        <div class="">
                            <input type="radio" name="${index}" value="${question.options[2]}" id="q${index}op2">
                            <label for="q${index}op2">${question.options[2]}</label>
                        </div>
                        <div class="">
                            <input type="radio" name="${index}" value="${question.options[2]}" id="q${index}op2">
                            <label for="q${index}op2">${question.options[2]}</label>
                        </div>
                    </div>
                </fieldset>
            </div>
            
            `
        })
    }
}