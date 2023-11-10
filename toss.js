// CALLING THE ELEMENTS FROM THE HTML 
const exit = document.querySelector(".exit")
const bat = document.getElementById("bat")
const bowl = document.getElementById("bowl")
const sub = document.getElementById("submit")
let naam;
let nick;
const ply = document.getElementById("lets-go")

exit.addEventListener("click", () => {
    window.location.href = "index.html"
})

ply.addEventListener("click", () => {
    if (naam === undefined) {
        alert("Enter your name and fav cricketer's name and Submit");
    } else if (nick === undefined) {
        alert("Enter your favorite cricketer's name");
    }
    else{
        window.location.href = "bat-game.html"
    }
 
    console.log(naam,nick )
})

// MAKING THE SUBMIT FUNCTIONAL AND STORING THE VALUES
sub.addEventListener("click", () => {
    // CREATING A OBJECT AND STORIING THE NAMES FROM THE USERS IN THAT 
    const names = {
        firstName: document.getElementById("frst-name").value,
        criceterName: document.getElementById("nick-name").value,
    }

    // STORING THE NAME AND NICKNAME IN LOCAL STORAGE.
    naam = names.firstName;
    nick = names.criceterName;
    if (naam === "") {
        alert("Enter your name and fav cricketer's name");
    } else if (nick === "") {
        alert("Enter your favorite cricketer's name");
    } else {
        // Store the values in localStorage
        localStorage.setItem("name", naam);
        localStorage.setItem("nick", nick);
    }
})

// MAKING THE BAT AND BALL BUTTON FUNCTIONAL 
// bat.addEventListener("click", () => {
// if (naam === "") {
// alert("Enter your name and fav cricketer's name");
// } else if (nick === "") {
// alert("Enter your favorite cricketer's name");
// }
// else {
// window.location.href = "bat-game.html"
// }
// })
// bowl.addEventListener("click", () => {
// window.location.href = "ball-game.html"
// })


// ADDING BACKGROUND MUSIC
window.addEventListener("load", () => {
    let back = new Audio("assets/Cricket Match - Sound Effect.mp3")
    back.play();
    back.loop = true;
})



