//timings
let hours=document.querySelector("#hours");
let minutes=document.querySelector("#minutes");
let seconds=document.querySelector("#seconds");


//buttons
let pause=document.querySelector("#first-button");
let play=document.querySelector("#second-button");
let reset=document.querySelector("#third-button");

let hr=0
let min=0
let sec=0

function changeTime(){
   sec++;
   if(sec==60){
    min++;
    sec=0;
   }
   if(min==60){
    hr++;
    min=0;
   }
   seconds.innerHTML=sec;
   minutes.innerHTML=min;
   hours.innerHTML=hr;
}
function update(){
    time=setInterval(changeTime,1000);
}
function pausetime(){
    clearInterval(time);
}
function resetTime(){
    clearInterval(time);
    hr=0
    min=0
    sec=0
    seconds.innerHTML=sec;
   minutes.innerHTML=min;
   hours.innerHTML=hr;
}

pause.addEventListener("click",pausetime);
play.addEventListener("click",update);
reset.addEventListener("click",resetTime);
 
