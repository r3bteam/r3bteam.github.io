window.addEventListener('keydown', keydown);

window.addEventListener('keyup', keyup);
var Feed = false;
var Dingus = false;
var imlost = 25;
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_e'> Press <b>T</b> or <b>4</b> to split 4x</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_3'> Press <b>3</b> to split 3x</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_d'> Press <b>D</b> or <b>2</b> to split 2x</span></span></center>";
document.getElementById("instructions").innerHTML += "<center><span class='text-muted'><span data-itr='instructions_q'> Press and hold <b>W</b> for macro feed</span></span></center>";
load();
function load() {
    if (document.getElementById("overlays").style.display!="none") {
        document.getElementById("settings").style.display = "block";
        if (document.getElementById('showMass').checked) {document.getElementById('showMass').click();}
        document.getElementById('showMass').click();
        if (document.getElementById('darkTheme').checked) {document.getElementById('darkTheme').click();}
        document.getElementById('darkTheme').click();
        // I changed the above because now agario 'remembers' your preferences, but doesn't actually work, so if they're already set to be true, you need to undo it, then re click to true
    } else {
        setTimeout(load, 100);
    }
}
function keydown(event) {
    if (event.keyCode == 87) {
        Feed = true;
        setTimeout(fukherriteindapussie, imlost);
    } // Tricksplit
    if (event.keyCode == 	84 || event.keyCode == 52) { //( ͡° ͜ʖ ͡°)
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
        setTimeout(ilikedick, imlost*3);
    } // Triplesplit
    if (event.keyCode == 51 || event.keyCode == 65) {
        ilikedick();
        setTimeout(ilikedick, imlost);
        setTimeout(ilikedick, imlost*2);
    } // Doublesplit
    if (event.keyCode == 71 || event.keyCode == 50) {
        ilikedick();
        setTimeout(ilikedick, imlost);
    } // Split
    if (event.keyCode == 49) {
        ilikedick();
    }// When Player Lets Go Of W, It Stops Feeding
    if (72 == a["keyCode"]) {
        X = window["innerWidth"] / 2;
        Y = window[_0x28d3("0x11b")] / 2;
        $("canvas")[_0x28d3("0x117")]($[_0x28d3("0x118")](_0x28d3("0x11c"), {
            clientX: X,
            clientY: Y
        }));
    }// Freeze
}
function keyup(event) {
    if (event.keyCode == 87) {
        Feed = false;
    }
    if (event.keyCode == 79) {
        Dingus = false;
    }
}
// Feed Macro With W
function fukherriteindapussie() {
    if (Feed) {
        window.onkeydown({keyCode: 87});
        window.onkeyup({keyCode: 87});
        setTimeout(fukherriteindapussie, imlost);
    }
}
function ilikedick() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
}
        setInterval(function(){
            if ($(window).width() < 350) {
                document.body.style.zoom = "35%";
            } else if ($(window).width() < 400) {
                document.body.style.zoom = "40%";
            } else if ($(window).width() < 450) {
                document.body.style.zoom = "45%";
            } else if ($(window).width() < 700) {
                document.body.style.zoom = "55%";
            } else if ($(window).width() < 960) {
                document.body.style.zoom = "70%";
            } else if ($(window).width() < 1024) {
                document.body.style.zoom = "75%";
            } else if ($(window).width() < 1280) {
                document.body.style.zoom = "80%";
            } else if ($(window).width() < 1366) {
                document.body.style.zoom = "85%";
            } else if ($(window).width() < 1440) {
                document.body.style.zoom = "90%";
            } else if ($(window).width() < 1600) {
                document.body.style.zoom = "95%";
            } else {
                document.body.style.zoom = "100%";
            }
        }, 500);