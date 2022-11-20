let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

totalHomeScore = 0
totalGuestScore = 0

function add1Home() {
    totalHomeScore += 1
    homeScore.textContent = totalHomeScore
}

function add2Home() {
    totalHomeScore += 2
    homeScore.textContent = totalHomeScore
}

function add3Home() {
    totalHomeScore += 3
    homeScore.textContent = totalHomeScore
}

function add1Guest() {
    totalGuestScore += 1
    guestScore.textContent = totalGuestScore
}

function add2Guest() {
    totalGuestScore += 2
    guestScore.textContent = totalGuestScore
}

function add3Guest() {
    totalGuestScore += 3
    guestScore.textContent = totalGuestScore
}

function resetScore() {
    totalHomeScore = 0
    totalGuestScore = 0
    homeScore.textContent = totalHomeScore
    guestScore.textContent = totalGuestScore
}