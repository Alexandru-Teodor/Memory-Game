let crtClickCount = 0;
let prevID;

function distributeImages() {
    let dannan = new Image();
    dannan.src = "./Images/Dannan.jpg";
    dannan.id = "A";
    dannan.className = "images";

    let donTorro = new Image();
    donTorro.src = "./Images/DonToro.jpg";
    donTorro.id = "B";
    donTorro.className = "images";

    let elly = new Image();
    elly.src = "./Images/Elly.jpg";
    elly.id = "C";
    elly.className = "images";

    let ferny = new Image();
    ferny.src = "./Images/Ferny.jpg";
    ferny.id = "D";
    ferny.className = "images";

    let grandpaPiggley = new Image();
    grandpaPiggley.src = "./Images/GrandpaPiggley.jpg";
    grandpaPiggley.id = "E";
    grandpaPiggley.className = "images";

    let mrHornsby = new Image();
    mrHornsby.src = "./Images/MrHornsby.jpg";
    mrHornsby.id = "F";
    mrHornsby.className = "images";

    let padrig = new Image();
    padrig.src = "./Images/Padrig.jpg";
    padrig.id = "G";
    padrig.className = "images";

    let uncleFerny = new Image();
    uncleFerny.src = "./Images/UncleFerny.jpg";
    uncleFerny.id = "H";
    uncleFerny.className = "images";

    let wiley = new Image();
    wiley.src = "./Images/Wiley.jpg";
    wiley.id = "I"
    wiley.className = "images";

    let youngPiggley = new Image();
    youngPiggley.src = "./Images/YoungPiggley.jpg";
    youngPiggley.id = "J";
    youngPiggley.className = "images";

    let dannan2 = document.createElement("img");
    dannan2.src = "./Images/Dannan.jpg";
    dannan2.id = "A2";
    dannan2.className = "images";

    let donTorro2 = new Image();
    donTorro2.src = "./Images/DonToro.jpg";
    donTorro2.id = "B2";
    donTorro2.className = "images";

    let elly2 = new Image();
    elly2.src = "./Images/Elly.jpg";
    elly2.id = "C2";
    elly2.className = "images";

    let ferny2 = new Image();
    ferny2.src = "./Images/Ferny.jpg";
    ferny2.id = "D2";
    ferny2.className = "images";

    let grandpaPiggley2 = new Image();
    grandpaPiggley2.src = "./Images/GrandpaPiggley.jpg";
    grandpaPiggley2.id = "E2";
    grandpaPiggley2.className = "images";

    let mrHornsby2 = new Image();
    mrHornsby2.src = "./Images/MrHornsby.jpg";
    mrHornsby2.id = "F2";
    mrHornsby2.className = "images";

    let padrig2 = new Image();
    padrig2.src = "./Images/Padrig.jpg";
    padrig2.id = "G2";
    padrig2.className = "images";

    let uncleFerny2 = new Image();
    uncleFerny2.src = "./Images/UncleFerny.jpg";
    uncleFerny2.id = "H2";
    uncleFerny2.className = "images";

    let wiley2 = new Image();
    wiley2.src = "./Images/Wiley.jpg";
    wiley2.id = "I2"
    wiley2.className = "images";

    let youngPiggley2 = new Image();
    youngPiggley2.src = "./Images/YoungPiggley.jpg";
    youngPiggley2.id = "J2";
    youngPiggley2.className = "images";  

    let letArr = "ABCDEFGHIJ";
    let finalArr = "";
    let len, crtChar, i, innerID;
    for (i = 0; i < 6; ++i) {
        len = letArr.length;
        crtChar = letArr.charAt(Math.floor(Math.random() * len));
        finalArr += crtChar;
        letArr = letArr.replace(crtChar, "");
    }
    finalArr += finalArr;

    for (i = 1; i <= 12; ++i) {
        len = finalArr.length;
        innerID = i + "-inner";
        crtChar = finalArr.charAt(Math.floor(Math.random() * len));
        let img;
        let cnt = finalArr.split(crtChar).length-1;

        if (crtChar === "A") {
            if (cnt === 2) {
                img = dannan;
            }
            else if (cnt === 1){
                img = dannan2;
            }
        }
        else if (crtChar === "B") {
            if (cnt === 2)  {
                img = donTorro;
            }
            else if (cnt === 1){
                img = donTorro2;
            }
        }
        else if (crtChar === "C") {
            if (cnt === 2)  {
                img = elly;
            }
            else if (cnt === 1){
                img = elly2;
            }
        }
        else if (crtChar === "D") {
            if (cnt === 2)  {
                img = ferny;
            }
            else if (cnt === 1){
                img = ferny2;
            }
        }
        else if (crtChar === "E") {
            if (cnt === 2)  {
                img = grandpaPiggley;
            }
            else if (cnt === 1){
                img = grandpaPiggley2;
            }
        }
        else if (crtChar === "F") {
            if (cnt === 2)  {
                img = mrHornsby;
            }
            else if (cnt === 1){
                img = mrHornsby2;
            }
        }
        else if (crtChar === "G") {
            if (cnt === 2)  {
                img = padrig;
            }
            else if (cnt === 1){
                img = padrig2;
            }
        }
        else if (crtChar === "H") {
            if (cnt === 2)  {
                img = uncleFerny;
            }
            else if (cnt === 1){
                img = uncleFerny2;
            }
        }
        else if (crtChar === "I") {
            if (cnt === 2)  {
                img = wiley;
            }
            else if (cnt === 1){
                img = wiley2;
            }
        }
        else if (crtChar === "J") {
            if (cnt === 2)  {
                img = youngPiggley;
            }
            else if (cnt === 1){
                img = youngPiggley2;
            }
        }
        document.getElementById(innerID).appendChild(img);
        finalArr = finalArr.replace(crtChar, "");
        document.getElementById(innerID).classList.add("hide");
    }
}

distributeImages();

function replyClick (clickedID) {
    ++crtClickCount;
    let innerID = clickedID + "-inner";
    let img1_string, img2_string;
    document.getElementById(clickedID).classList.add("spin");
    setTimeout(() => {
        document.getElementById(innerID).classList.remove("hide");
    }, 340);

    if (crtClickCount === 1) {
        img1_string = document.getElementById(innerID).children[0].src;
        prevID = innerID;
        document.getElementById(parseInt(prevID)).onclick = null;
        document.getElementById(parseInt(prevID)).classList.add("inactive-cursor");
    }

    if (crtClickCount === 2) {
        img1_string = document.getElementById(prevID).children[0].src;
        img2_string = document.getElementById(innerID).children[0].src;
        for (let i = 1; i <= 12; ++i) {
            document.getElementById(i).onclick = null;
            document.getElementById(i).classList.add("inactive-cursor");
        }
        
        setTimeout(function(){
                if (img1_string !== img2_string){
                document.getElementById(prevID).classList.add("hide");
                document.getElementById(innerID).classList.add("hide");
            }
            else {
                prevID = parseInt(prevID);
                innerID = parseInt(innerID);
                document.getElementById(prevID).onclick = null;
                document.getElementById(innerID).onclick = null;
            }
            for (let i = 1; i <= 12; ++i) {
                let inn = i + "-inner";
                if (document.getElementById(inn).classList.contains("hide")) {
                    document.getElementById(i).setAttribute("onclick", "replyClick(this.id)");
                    document.getElementById(i).classList.remove("inactive-cursor");
                }
            }
        }, 1500);
        crtClickCount = 0;
    }
    setTimeout (function() {
        document.getElementById(clickedID).classList.remove("spin");
    }, 1500);
    checkEndGame();
}

function checkEndGame() {
    setTimeout ( () => {
    let full = 1;
    for (let i = 1; i <=12; ++i) {
        let inn = i + "-inner";
        if (document.getElementById(inn).classList.contains("hide")) {
            full = 0;
            return;
        }
    }
    document.getElementById("win-msg").classList.remove("hide");
    document.getElementById("restart-btn").classList.remove("hide");
    }, 350)
}