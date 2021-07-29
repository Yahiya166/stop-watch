var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var head = document.getElementById("btnId");

var interval;


function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >=100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,1000);
    head.disabled = 'true';
}


function puase(){
    if(head.disabled = "true"){
        clearInterval(interval);
        head.disabled = head.enabled
        // interval = setInterval(timer,10);
    }
    // document.getElementById("btnId").disabled = 'false';
}


function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    puase()
    // document.getElementById("btnId").enable = 'true';
}


