let stopWatchTag = document.getElementById("stopWatch");
        let startButtonTag = document.getElementById("startButton");
        let pauseButtonTag = document.getElementById("pauseButton");
        let continueButtonTag = document.getElementById("continueButton");
        let restartButtonTag = document.getElementById("restartButton");

        let seconds = 0, minutes = 0, hours = 0;
        let startTime = function(){
            seconds += 1;
            if(seconds === 60){
                seconds = 0;
                minutes += 1;
                if(minutes === 60){
                    minutes = 0;
                    hours += 1;
                }

            }
            const secondsText = seconds < 10 ? "0"+seconds.toString() : seconds;
            const minutesText = minutes < 10 ? "0"+minutes.toString() : minutes;
            const hoursText = hours < 10 ? "0"+hours.toString() : hours;
            stopWatchTag.textContent = hoursText +":"+ minutesText +":"+ secondsText;
        };
        let intervalId;
        startButtonTag.addEventListener("click",function(){
            intervalId = setInterval(startTime,1000);
        });
        pauseButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
        });
        continueButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
            intervalId = setInterval(startTime,1000);
        });
        restartButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
            seconds = 0, minutes = 0, hours = 0;
            intervalId = setInterval(startTime,1000);
        });