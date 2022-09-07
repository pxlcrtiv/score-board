let home = 0
let guest = 0
let homeScore = document.getElementById("home-score") 
let guestScore = document.getElementById("away-score")

function homeOne(){
    home += 1
    homeScore.textContent = home
}

function homeTwo(){
    home += 2
    homeScore.textContent = home
}

function homeThree(){
    home += 3
    homeScore.textContent = home
}

function guestOne(){
    guest += 1
    guestScore.textContent = guest
}

function guestTwo(){
    guest += 2
    guestScore.textContent = guest
}

function guestThree(){
    guest += 3
    guestScore.textContent = guest
}

function reset(){
     homeScore.textContent = 0
     guestScore.textContent = 0
     home = 0
     guest = 0
}