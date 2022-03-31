let startButton = document.querySelector('.start')
let resetButton = document.querySelector('.reset')
let stopButton = document.querySelector('.stop')


var hour = 0;
var minute = 0;
var second = 0;
var miliSecond = 0;

var timer = false;

startButton.addEventListener('click', function(){
    timer = true;
    stopwatch();
})

stopButton.addEventListener('click', function(){
    timer = false;
})

resetButton.addEventListener('click', function(){
    timer = false;
     hour = 0;
     minute = 0;
     second = 0;
     miliSecond = 0;
    
     document.querySelector('.hours').innerHTML = '00'
     document.querySelector('.minutes').innerHTML = '00'
     document.querySelector('.seconds').innerHTML = '00'
     document.querySelector('.miliSeconds').innerHTML = '00'
})

function stopwatch(){
if(timer == true){
    miliSecond = miliSecond+1

    if(miliSecond == 100){
        second = second+1
        miliSecond = 0
    }

    if(second == 60){
        minute = minute+1
        second = 0;
        // miliSecond = 0
    }

    if(minute == 60){
        hour = hour+1
        minute = 0;
        second = 0;
        // miliSecond = 0
    }

    var hr = hour;
    var min = minute
    var sec = second
    var miliSec = miliSecond

    if(hour<10){
        hr = '0' + hr
    }
    if(minute<10){
        min = '0' + min
    }
    if(second<10){
        sec = "0" + sec
    }
    if(miliSecond<10){
        miliSec = '0' + miliSec
    }

    document.querySelector('.hours').innerHTML = hr
    document.querySelector('.minutes').innerHTML = min
    document.querySelector('.seconds').innerHTML = sec
    document.querySelector('.miliSeconds').innerHTML = miliSec
    
    setTimeout("stopwatch()",9)
}
}
