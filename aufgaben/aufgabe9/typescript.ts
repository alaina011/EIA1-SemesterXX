namespace aufgabe9 {


var activeIndex: string;


var sound: HTMLAudioElement[] = [

    new Audio ("DrumPad/snare.mp3"),   //[0]
    new Audio ("DrumPad/hihat.mp3"),   //[1]
    new Audio ("DrumPad/kick.mp3"),   //[2]
    new Audio("DrumPad/A.mp3"),   //[3]
    new Audio ("DrumPad/C.mp3"),  //[4]
    new Audio ("DrumPad/F.mp3"),   //[5]
    new Audio ("DrumPad/G.mp3"),   //[6]
    new Audio ("DrumPad/laugh-1.mp3"),  //[7]
    new Audio ("DrumPad/laugh-2.mp3")  //[8]   
];

var beat: HTMLAudioElement [] = [
    new Audio ("DrumPad/snare.mp3"),   
    new Audio ("DrumPad/hihat.mp3"),  
    new Audio ("DrumPad/kick.mp3")   
];


document.querySelector(".boxblau1").addEventListener("click", playSample);
document.querySelector(".boxblau2").addEventListener("click", playSample);
document.querySelector(".boxblau3").addEventListener("click", playSample);
document.querySelector(".boxrosa1").addEventListener("click", playSample);
document.querySelector(".boxrosa2").addEventListener("click", playSample);
document.querySelector(".boxrosa3").addEventListener("click", playSample);
document.querySelector(".boxrosa4").addEventListener("click", playSample);
document.querySelector(".boxorange1").addEventListener("click", playSample);
document.querySelector(".boxorange2").addEventListener("click", playSample);



function playSample(activeIndex) 
{

activeIndex = document.querySelector(".pad:hover").getAttribute("id");
audio(sound[activeIndex]);

};



var counter: number=0;

function playmix () {
audio(beat[counter]);
counter++;

if(counter == beat.length){
    counter=0
}
};


document.querySelector("#play").addEventListener("click", stop);

var intervalid: number = -1;
function stop() {

    if (document.getElementById("play").classList.contains("fa-play")) {
        intervalid = setInterval (playmix, 1000);
       
    }
    else {
    
        clearInterval(intervalid);
    }
    buttontausch();
}

function buttontausch() {

if (document.getElementById("play").classList.contains("fa-play")) {
    document.getElementById("play").classList.remove("fa-play");
    document.getElementById("play").classList.add("fa-stop");
}

else {
    document.getElementById("play").classList.remove("fa-stop");
    document.getElementById("play").classList.add("fa-play");
}
}

function audio(audiotoplay: HTMLAudioElement) {
    audiotoplay.play();
}


document.getElementById("remix").addEventListener("click", remix);

function remix() {

    if (document.getElementById("play").classList.contains("fa-stop")) {
        stop();
    }

    var remixcounter: number = 0;
    var remixIntervalid: number = setInterval( function () {
        remixcounter++;
        audio(sound[getRandom(0, 9)]);

        if (remixcounter >= 3) {
            clearInterval(remixIntervalid);
        }
    }, 1000)

}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min; 

}




}