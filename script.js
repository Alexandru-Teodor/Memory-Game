let crtClickCount = 0;
let prevID;

function createCells () {
    let n = 12;
    let nCells = Array.from(Array(n).keys()).map (i => (
        `
            <div 
                id = "${i + 1}"
                class = "cell"
                onClick= "replyClick(this.id)"
            >
            </div>
        `
    )).join("");
    document.getElementById("cell-container").innerHTML = nCells;
}
createCells();

function distributeImages () {
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

    let imgArr = [dannan, elly, donTorro, ferny, grandpaPiggley, mrHornsby, padrig, uncleFerny, wiley, youngPiggley];
    let imgArr2 = [dannan2, elly2, donTorro2, ferny2, grandpaPiggley2, mrHornsby2, padrig2, uncleFerny2, wiley2,
        youngPiggley2];
    let finalArr = [], j, i, temp;
    for (i = 0; i < 12; ++i) {
        j = Math.floor(Math.random() * imgArr.length);
        finalArr[i++] = imgArr[j];
        finalArr[i] = imgArr2[j];
        imgArr.splice(j, 1);
        imgArr2.splice(j, 1);
    }

    for (i = 11; i > 0; --i) {
        j = Math.floor(Math.random() * i + 1);
        temp = finalArr[i];
        finalArr[i] = finalArr[j];
        finalArr[j] = temp;
    }

    for (i = 0; i < 12; ++i) {
        let j = i + 1;
        document.getElementById(j).appendChild(finalArr[i]);
        document.getElementById(j).children[0].classList.add("hide");
    }
}
distributeImages();

function replyClick (clickedID) {
    ++crtClickCount;
    let img1_string, img2_string;
    document.getElementById(clickedID).classList.add("spin");
    setTimeout(() => {
        document.getElementById(clickedID).children[0].classList.remove("hide");
    }, 340);

    if (crtClickCount === 1) {
        img1_string = document.getElementById(clickedID).children[0].src;
        prevID = clickedID;
        document.getElementById(parseInt(prevID)).onclick = null;
        document.getElementById(parseInt(prevID)).classList.add("inactive-cursor");
    }

    if (crtClickCount === 2) {
        img1_string = document.getElementById(prevID).children[0].src;
        img2_string = document.getElementById(clickedID).children[0].src;
        for (let i = 1; i <= 12; ++i) {
            document.getElementById(i).onclick = null;
            document.getElementById(i).classList.add("inactive-cursor");
        }
        
        setTimeout(function(){
            if (img1_string !== img2_string){
                document.getElementById(prevID).children[0].classList.add("hide");
                document.getElementById(clickedID).children[0].classList.add("hide");
            }
            else {
                document.getElementById(prevID).onclick = null;
                document.getElementById(clickedID).onclick = null;
            }
            for (let i = 1; i <= 12; ++i) {
                if (document.getElementById(i).children[0].classList.contains("hide")) {
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
        if (document.getElementById(i).children[0].classList.contains("hide")) {
            full = 0;
            return;
        }
    }
    document.getElementById("jakers").style.display = "none";
    document.getElementById("start-msg").style.marginBottom = "2rem";
    document.getElementById("win-msg").classList.remove("hide");
    document.getElementById("restart-btn").classList.remove("hide");
    }, 350)
}