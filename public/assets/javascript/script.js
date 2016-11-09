$(document).ready(function(){
//beginning hide mouth pic
window.onload = function(){
    playbeginning();
};

//audio 
var beginning = document.createElement('audio');
    beginning.setAttribute('src', "assets/img/crunching.m4a");

//audio functions

function playbeginning() {
    beginning.play();
}

$(document).on("click", '#eat', function(){
    // $('#mouth').show();
    playbeginning();
    // run2();
});

});