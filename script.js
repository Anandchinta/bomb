let countdown=document.getElementById("countdown");
let boomEl=document.getElementById("time-bomb");
let randomNumber=Math.ceil(Math.random()*10);
let count=10;
let execute=true;
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
    if(execute){
        if (randomNumber%2===1 && count!==0){
            boomEl.src="didit.jpg";
            clearInterval(intervalId);
            execute=false;
    
        }
        else{
            boomEl.src="boom.jpg";
            clearInterval(intervalId);
            countdown.textContent="";
            execute=false;
        }

    }
    
}
function bluebutton(){
    if (execute){
        if (randomNumber%2===0 && count!==0){
            boomEl.src="didit.jpg";
            clearInterval(intervalId);
            execute=false;
    
        }
        else{
            boomEl.src="boom.jpg";
            clearInterval(intervalId);
            countdown.textContent="";
            execute=false;
        }

    }
    
}
