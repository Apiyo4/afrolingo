(function(){
    let time = 45,        
        changedTimes = 0, 
        domObjTimer = document.getElementById("timer-wrapper"),
        domObjInputs = $("input[type=radio]"),        
        myEvent;

    function updateTimer(t){
        $("#time").text(t)
        if(!t){
            //clearTimer;
            domObjTimer.dispatchEvent(myEvent);
            //disable all inputs and submit form;
        }
    };
    function startTiming(){
        
        if(changedTimes == 1){
            
            let timerId = setInterval(()=>{
                updateTimer(--time)
            },1000);
            myEvent = new CustomEvent("timedOut",{
                detail:{
                    timerId: timerId
                }
            });
            //domObjTimer.trigger(myEvent,[timerId])
        }
        return null;
    }; 
    
    domObjTimer.addEventListener("timedOut",function(evnt){
        console.log("u have timed out!");
        $(this).children("h3").text(0);
        clearInterval(evnt.detail.timerId);
        domObjInputs.prop("disabled",true);
        // trigger submit event
        // disable submit button

    });
    

    $("input[type=radio]").change(function(evnt){
        changedTimes += 1;
        startTiming();
    });
})();