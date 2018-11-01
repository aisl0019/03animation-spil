// start game automatically when page is loaded
window.addEventListener("load", sidenVises);

// alert("Virker den")

function sidenVises() {
    console.log("sidenVises");

    // nulstil alting

    // -> showStart
    showStart();
}


function showStart() {
    console.log("showStart");

    // vis startskærm
    document.querySelector("#start").classList.add("show");

    // start animation på startknap
    document.querySelector("#play").classList.add("pulse");

    // clicks/events
    document.querySelector("#play").addEventListener("click", hideStart);

    // removes
}


function hideStart() {
    console.log("hideStart");

    // stop animation på startknap
    document.querySelector("#play").classList.add("hide");

    // fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");

    // clicks/events
    document.querySelector("#start").addEventListener("animationend", startGame);

    // removes
}


function startGame() {
    console.log("startGame");

    // skjul startskærm
    document.querySelector("#start").classList.add("hide");


    // vis spilskærm
    document.querySelector("#game").classList.add("show");
}
