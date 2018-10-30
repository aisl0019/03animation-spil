// start game automatically when page is loaded
window.addEventListener("load", start);

// alert("Message that appears upon page load");

// Note to self in inspector/console
console.log("Hello");

// functions have been divided into folders:

function start() {
    console.log("start");

    // removes (added to top of "start" for repetition of game on page)
    document.querySelector("#coin1").classList.remove("paused");
    document.querySelector("#coin1 .coin_sprite").classList.remove("dissappear");

    document.querySelector("#bomb").classList.remove("explode");
    document.querySelector("#bomb").classList.remove("shake");

    // adds
    document.querySelector("#bomb").classList.add("falling");
    document.querySelector("#diamond").classList.add("falling");
    document.querySelector("#coin0").classList.add("falling");
    document.querySelector("#coin1").classList.add("falling");
    document.querySelector("#coin2").classList.add("falling");
    document.querySelector("#coin3").classList.add("falling");

    // clicks
    document.querySelector("#coin1").addEventListener("click", coinForsvind);
    document.querySelector("#bomb").addEventListener("click", bombEksploder);
}

function coinForsvind() {
    console.log("coinForsvind");

    // functions for coins upon click
    document.querySelector("#coin1").classList.add("paused");
    document.querySelector("#coin1 .coin_sprite").classList.add("dissappear");
}

function bombEksploder() {
    console.log("bombEksploder");

    // functions for bomb upon click
    document.querySelector("#bomb").classList.add("explode");
    document.querySelector("#bomb").classList.add("shake");
}
