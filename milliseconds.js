        let stopWatchTag = document.getElementById("stopWatch");
        let startButtonTag = document.getElementById("startButton");
        let pauseButtonTag = document.getElementById("pauseButton");
        let continueButtonTag = document.getElementById("continueButton");
        let restartButtonTag = document.getElementById("restartButton");
        let millisecs = document.getElementById("millisecs");

        let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
        let startTime = function(){
                milliseconds += 1;
                if(milliseconds === 1000){
                    milliseconds = 0;
                    seconds += 1;
                    if(seconds === 60){
                        seconds = 0;
                        minutes += 1;
                        if(minutes === 60){
                            minutes = 0;
                            hours += 1;
                        }
                }
            }
            let millisecondsText = milliseconds;
            millisecs.innerHTML = millisecondsText;
            const secondsText = seconds < 10 ? "0"+seconds.toString() : seconds;
            const minutesText = minutes < 10 ? "0"+minutes.toString() : minutes;
            const hoursText = hours < 10 ? "0"+hours.toString() : hours;
            stopWatchTag.textContent = hoursText +":"+ minutesText +":"+ secondsText;
        };
        let intervalId;
        startButtonTag.addEventListener("click",function(){
            intervalId = setInterval(startTime,1);
        });
        pauseButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
        });
        continueButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
            intervalId = setInterval(startTime,1);
        });
        restartButtonTag.addEventListener("click",function(){
            clearInterval(intervalId);
            milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
            intervalId = setInterval(startTime,1);
        });