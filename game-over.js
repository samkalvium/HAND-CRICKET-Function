// CALLING THE ELEMENTS FROM THE HTML 
const plyAgain = document.getElementById("ply-agn");
const home = document.getElementById("home");
const loseQuotes = ["Hit the pitch, make it count.Play again", "Play hard, dream big, love cricket.Try harder", "Every inning is a new beginning.Once more",
    "On the field, every ball is an opportunity.", "Bounce back stronger on the next ball.",
    "Cricket is calling; it's your turn to bat.", "Smash boundaries, break limits.Lets do it.", "Game on, passion up! Make it happen", "In cricket, every run is a victory.Lets go again"]
const winQuotes = ["Congratulations on the win! You are the hero.", "Well played, champ! Victory suits you.", "Game, set, match! You're the real winner.",
    "In the game of life, you just scored a major win.", "You played like a star and emerged victorious."]
const blala = document.getElementById("quotes")
const scrSt = document.getElementById("last-score")
const wickisSt = document.getElementById("last-wick")
const statement = document.getElementById("win-loss")

// MAKING THE BUTTONS FUNCTIONAL
plyAgain.addEventListener("click", () => {
    window.location.href = "bat-game.html"
    // localStorage.removeItem("nick");
    // localStorage.removeItem("name");
})

home.addEventListener("click", () => {
    window.location.href = "index.html"
})

// PRINTING THE DIFF QUOTES
window.addEventListener("load", () => {
    if (scr1 > targ1) {
        const ranInd = winQuotes[Math.floor(Math.random() * 4)]
        blala.textContent = ranInd;
        statement.textContent = "You WON."
    }
    if(scr1 < targ1) {
        const ranInd = loseQuotes[Math.floor(Math.random() * 9)]
        blala.textContent = ranInd;
        statement.textContent = "You LOST."
    }
    else if (wick1<=1 && scr1 > targ1) {
        const ranInd = winQuotes[Math.floor(Math.random() * 4)]
        blala.textContent = ranInd;
        statement.textContent = "You WON."
    }
    else if(wick1 == 2){
        const ranInd = loseQuotes[Math.floor(Math.random() * 9)]
        blala.textContent = ranInd;
        statement.textContent = "You LOST."
    }
})

// GETTING ITEMS FROM LOCAL STORAGE
var scr1 = localStorage.getItem("score")
var wick1 = localStorage.getItem("wicks")
var targ1 = localStorage.getItem("target")

scrSt.textContent = scr1;
wickisSt.textContent = wick1;

// ADDING BACKGROUND MUSIC
window.addEventListener("load", () => {
    let back1 = new Audio("assets/Tata Ipl - Scorecard ! Music.mp3")
    back1.play();
    back1.loop = true;
    
    let back2 = new Audio("assets/Crowd Cheering Airhorn.mp3")
    back2.play();
})
