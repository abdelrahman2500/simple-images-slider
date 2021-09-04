var imgs= ["imgs/1.jpg","imgs/2.jpg","imgs/3.jpg","imgs/4.jpg","imgs/5.jpg","imgs/6.jpg"],
    image = document.getElementById("image"),
    i = 0;

    var playBtn = document.querySelector(".play")
    var stopBtn = document.querySelector(".stop")

function playFun() {
    setTimeout("play()") 
    clearInterval(t)
}
function nextFun() {
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
    image.src = imgs[i];
}
function prevFun() {
    i--;
    if (i < 0) {
        i = imgs.length-1;
    }
    image.src = imgs[i];
}
function stopFun() {
    playBtn.style.opacity = "1";
    playBtn.style.cursor = "pointer";
    stopBtn.style.opacity = ".5";
    stopBtn.style.cursor = "no-drop";
    clearInterval(t);
}

function play(){
    t=setInterval("nextFun()", 1000);
    stopBtn.style.opacity = "1";
    stopBtn.style.cursor = "pointer";
    playBtn.style.opacity = ".5";
    playBtn.style.cursor = "no-drop";

}