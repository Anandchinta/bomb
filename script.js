let countdown=document.getElementById("countdown");
let boomEl=document.getElementById("time-bomb");
let randomNumber=Math.ceil(Math.random()*10);
let count=10;

let intervalId=setInterval(function() {
    count=count-1;
    countdown.textContent=count;
    if (count===0){
        boomEl.src="boom.jpg";
        clearInterval(intervalId);
        countdown.textContent="";

    }   
}, 1000);




function redbutton(){
    if (randomNumber%2===1 && count!==0){
        boomEl.src="didit.jpg";
        clearInterval(intervalId);

    }
    else{
        boomEl.src="boom.jpg";
        clearInterval(intervalId);
        countdown.textContent="";
    }
}
function bluebutton(){
    if (randomNumber%2===0 && count!==0){
        boomEl.src="didit.jpg";
        clearInterval(intervalId);

    }
    else{
        boomEl.src="boom.jpg";
        clearInterval(intervalId);
        countdown.textContent="";
    }
}
