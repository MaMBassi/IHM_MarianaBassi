window.onload = function (){
    var seconds = 00;
    var minutes = 00;
    var appendSeconds = document.getElementById("segundos");
    var appendMinutes = document.getElementById("minutos");

    var buttonStart = document.getElementById("btnStart");
    var buttonStop = document.getElementById("btnStop");
    var buttonReset = document.getElementById("btnReset");

    var interval;

    var tempoTotal = 0;

    buttonStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startTimer,1000);
    }

    buttonStop.onclick = function(){
        clearInterval(interval);
    }

    buttonReset.onclick = function(){
        clearInterval(interval);
        minutes = "00";
        seconds = "00";

        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    }

    function startTimer(){
        seconds++;
        if(seconds <= 9){
            appendSeconds.innerHTML = "0" + seconds;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }
        if(minutes > 9){
            appendMinutes.innerHTML = minutes;
        }

        // tempoTotal = (minutes * 60 + seconds) * 60;
        // return tempoTotal;
    }
    
}