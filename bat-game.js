// CALLING THE ELEMENTS FROM THE HTML 
const back = document.querySelector(".exit");
const images = document.querySelectorAll(".all-images")
const leftHand = document.getElementById("hand-left")
const plyrImgs = ["left_hand-ONE-.png", "left_hand-TWO.png", "left_hand-THREE.png", "left_hand-FOUR.png", "left_hand-FIVE.png", "left_hand-SIX.png"]
const compImgs = ["right-hand-ONE.png", "right_hand-TWO.png", "right_hand-THREE.png", "right_hand-FOUR.png", "right_hand-FIVE.png", "right-hand-SIX.png"]
var score = 0;
var balls = 0;
var wickets = 0;
const runs = document.getElementById("runs")
const bowl = document.getElementById("balls")
const wiks = document.getElementById("wickets")
const nickName = localStorage.getItem("nick")
const nick = document.getElementById("nicname")
nick.textContent = nickName;
const trgt = document.getElementById("tagrt")


// MAKING THE BACK BUTTON FUNCTIONAL
back.addEventListener("click", () => {
    window.location.href = "toss.html"
})

// MAKING THE IMAGES FUNCTIONAL
images.forEach((ele) => {
    ele.addEventListener("click", (event) => {
        randomImage();
        checkWin();
        if (score == 0 && wickets >= 1) {
            let duck = new Audio("assets/Duck Quack.mp3")
            duck.play();
        }
        if (event.target.alt === "image1") {
            console.log("image 1 is clicked")
            leftHand.src = plyrImgs[0];
        }
        if (event.target.alt === "image2") {
            console.log("image 2 is clicked")
            leftHand.src = plyrImgs[1];
        }
        if (event.target.alt === "image3") {
            console.log("image 3 is clicked")
            leftHand.src = plyrImgs[2];
        }
        if (event.target.alt === "image4") {
            console.log("image 4 is clicked")
            leftHand.src = plyrImgs[3];
        }
        if (event.target.alt === "image5") {
            console.log("image 5 is clicked")
            leftHand.src = plyrImgs[4];
        }
        if (event.target.alt === "image6") {
            console.log("image 6 is clicked")
            leftHand.src = plyrImgs[5];
        }
        runs.textContent = score;
        bowl.textContent = balls;
        wiks.textContent = wickets;
        // STORING THE SCORE AND WICKETS IN LOCAL STORAGE
        localStorage.setItem("score", score)
        localStorage.setItem("wicks", wickets)
        localStorage.setItem("target", randomTarget)
    })
})

// GETTING RANDOM IMAGES FOR THE COMPUTER.
function randomImage() {
    const randmInd = compImgs[Math.floor(Math.random() * 6)]

    const randmImage = document.getElementById("comp-img")
    randmImage.src = randmInd;
    balls++;

    // UPDATING THE SCORE 
    if (event.target.alt == "image1" && randmInd == compImgs[1] || event.target.alt == "image1" && randmInd == compImgs[2]
        || event.target.alt == "image1" && randmInd == compImgs[3] || event.target.alt == "image1" && randmInd == compImgs[4]
        || event.target.alt == "image1" && randmInd == compImgs[5]) {
        score = score + 1;

    }
    else if (event.target.alt == "image2" && randmInd == compImgs[0] || event.target.alt == "image2" && randmInd == compImgs[2]
        || event.target.alt == "image2" && randmInd == compImgs[3] || event.target.alt == "image2" && randmInd == compImgs[4]
        || event.target.alt == "image2" && randmInd == compImgs[5]) {
        score = score + 2;

    }
    else if (event.target.alt == "image3" && randmInd == compImgs[0] || event.target.alt == "image3" && randmInd == compImgs[1]
        || event.target.alt == "image3" && randmInd == compImgs[3] || event.target.alt == "image3" && randmInd == compImgs[4]
        || event.target.alt == "image3" && randmInd == compImgs[5]) {
        score = score + 3;

    }
    else if (event.target.alt == "image4" && randmInd == compImgs[0] || event.target.alt == "image4" && randmInd == compImgs[1]
        || event.target.alt == "image4" && randmInd == compImgs[2] || event.target.alt == "image4" && randmInd == compImgs[4]
        || event.target.alt == "image4" && randmInd == compImgs[5]) {
        score = score + 4;

    }
    else if (event.target.alt == "image5" && randmInd == compImgs[0] || event.target.alt == "image5" && randmInd == compImgs[1]
        || event.target.alt == "image5" && randmInd == compImgs[2] || event.target.alt == "image5" && randmInd == compImgs[3]
        || event.target.alt == "image5" && randmInd == compImgs[5]) {
        score = score + 5;

    }
    else if (event.target.alt == "image6" && randmInd == compImgs[0] || event.target.alt == "image6" && randmInd == compImgs[1]
        || event.target.alt == "image6" && randmInd == compImgs[2] || event.target.alt == "image6" && randmInd == compImgs[3]
        || event.target.alt == "image6" && randmInd == compImgs[4]) {
        score = score + 6;
        const mus = new Audio("assets/six.mp3")
        mus.play();

    }
    console.log(score)
    // CHECKING IF THE HANDS REPRESENT SAME NUMBERS 
    if (event.target.alt == "image1" && randmInd == compImgs[0]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }
    else if (event.target.alt == "image2" && randmInd == compImgs[1]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }
    else if (event.target.alt == "image3" && randmInd == compImgs[2]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }
    else if (event.target.alt == "image4" && randmInd == compImgs[3]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }
    else if (event.target.alt == "image5" && randmInd == compImgs[4]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }
    else if (event.target.alt == "image6" && randmInd == compImgs[5]) {
        wickets++;
        let out = new Audio("assets/howzat.mp3")
        out.play();
    }

}

// CREATING A FUNCTION IF 6 BALLS ARE DONE 
function checkWin() {
    if (balls == 6) {
        window.location.href = "game-over.html"
    }

    //  CHECKING FOR NO.OF WICKTES 
    if (wickets == 2) {
        window.location.href = "game-over.html"
    }

    // CHECKING FOR TARGET AND SCORE--WHICH IS GREATER
    if (score >= randomTarget) {
        window.location.href = "game-over.html"
    }
}

//CREATING FUCNTION FOR RANDOM TARGET
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomTarget; // for random target.
window.addEventListener("load", () => {
    randomTarget = getRandomNumber(15, 36);
    trgt.textContent = randomTarget;
})


// ADDING BACKGROUND MUSIC 
window.addEventListener("load", () => {
    let bgmusic = new Audio("assets/finalbgm-game.mp3")
    bgmusic.play();

    bgmusic.loop = true;
})


