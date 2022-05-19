var aufgabe8;
(function (aufgabe8) {
    var activeIndex;
    var sound = [
        new Audio('DrumPad/snare.mp3'),
        new Audio('DrumPad/hihat.mp3'),
        new Audio('DrumPad/kick.mp3'),
        new Audio('DrumPad/A.mp3'),
        new Audio('DrumPad/C.mp3'),
        new Audio('DrumPad/F.mp3'),
        new Audio('DrumPad/G.mp3'),
        new Audio('DrumPad/laugh-1.mp3'),
        new Audio('DrumPad/laugh-2.mp3'), //[8]
    ];
    document.querySelector('.boxblau1').addEventListener('click', playSample);
    document.querySelector('.boxblau2').addEventListener('click', playSample);
    document.querySelector('.boxblau3').addEventListener('click', playSample);
    document.querySelector('.boxrosa1').addEventListener('click', playSample);
    document.querySelector('.boxrosa2').addEventListener('click', playSample);
    document.querySelector('.boxrosa3').addEventListener('click', playSample);
    document.querySelector('.boxrosa4').addEventListener('click', playSample);
    document.querySelector('.boxorange1').addEventListener('click', playSample);
    document.querySelector('.boxorange2').addEventListener('click', playSample);
    function playSample() {
        activeIndex = document.querySelector('.pad:hover').getAttribute('id');
        sound[activeIndex].play();
    }
    ;
    document.querySelector('img').addEventListener('click', mix);
    function mix() {
        setInterval(playmix, 1000);
    }
    ;
    function playmix() {
        sound[0].play();
        sound[1].play();
        sound[2].play();
    }
    ;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=typescript.js.map