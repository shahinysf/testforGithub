// Retrieve scores from localStorage 
function retrieveScores() {
    let storedScores = JSON.parse(localStorage.getItem("allScores"));
    console.log(storedScores)
    return storedScores
 }

// Display your score
function displayScore(scores) {
    const score = Object.values(storedScores)[storedScores.length - 1]["score"]
    const scoreDiv = document.getElementById("score")
    scoreDiv.innerHTML = score
}

// Display name input field
function displayInput() {
    const inputNameForm = document.getElementById('inputNameForm');
    inputNameForm.innerHTML = 
        `<form id="nameForm" autocomplete="off">
        <label id="inputLabel">ENTER YOUR NAME:</label>
        <input type="text" id="inputName" maxlength="20" required="required"/>
        </form>`
}

// Save name and score in localStorage
function saveScore(score, name) {
    let existingScores = JSON.parse(localStorage.getItem("allScores"));
    let newScore = {
        "name": name,
        "score": score
    };
    localStorage.setItem("newScore", JSON.stringify(newScore));
    existingScores.pop()
    existingScores.push(newScore);
    localStorage.setItem("allScores", JSON.stringify(existingScores));
}

// Order scores by descending
function orderScores(scores) {
    sortedScores = scores.slice(0);
    sortedScores.sort((a, b) => b.score - a.score);
    console.log(sortedScores)
    return sortedScores
}

// Display scores
function displayScores(scores) {
    const mainDiv = document.getElementById('mainDiv');
    mainDiv.innerHTML = ""
    const table = document.createElement("table")
    table.id = "scoreTable"
    mainDiv.appendChild(table)
    const header = document.createElement("tr")
    header.innerHTML = `<th id="leftHeader">RANK</th><th>NAME</th><th id="rightHeader">SCORE</th>`
    table.appendChild(header)

    const scoresLength = scores.length
    for (i = 0; i < 10; i++) {
        const rank = i + 1
        if (i < scores.length) {
            let name = Object.values(scores)[i]["name"]
            let score = Object.values(scores)[i]["score"]
            const row = document.createElement("tr")
            row.innerHTML = `<td>${rank}</td><td>${name}</td><td>${score}</td>`
            row.className = "scoreRow"
            row.id = `scoreRow${i}`
            table.appendChild(row)
        }
        else {
            let name = ""
            let score = ""
            const row = document.createElement("tr")
            row.innerHTML = `<td>${rank}</td><td>${name}</td><td>${score}</td>`
            row.className = "scoreRow"
            row.id = `scoreRow${i}`
            table.appendChild(row)
        }
    }
}

function getRanking(sortedScores, name, score) {
    let rank = 0
    for (i = 0; i < sortedScores.length; i++) {
        if ((Object.values(sortedScores)[i]["name"] == name) && 
            (Object.values(sortedScores)[i]["score"] == score)) {
            rank = i + 1
        }
    }
    return rank
}

function displayOutput(rank, name, score) {
    const mainDiv = document.getElementById("mainDiv");
    const messageDiv = document.createElement("div")
    if (rank <= 10) {
        messageDiv.innerHTML = `Good job, ${name}! You ranked #${rank}`
    }
    else {
        messageDiv.innerHTML = `Nice try, ${name}! Your score of ${score} is ranked #${rank}`
    }
    messageDiv.id = "messageDiv"
    mainDiv.appendChild(messageDiv)
}

function displayBlank() {
    const mainDiv = document.getElementById("mainDiv");
    const messageDiv = document.createElement("div")
    messageDiv.innerHTML = " "
    messageDiv.id = "messageDiv"
    mainDiv.appendChild(messageDiv)
}

function createButtons() {
    const mainDiv = document.getElementById("mainDiv")
    const buttonsDiv = document.createElement("div")
    buttonsDiv.id = "buttonsDiv"
    mainDiv.appendChild(buttonsDiv)

    const homeDiv = document.createElement("div")
    homeDiv.innerHTML =         
        `<button id='homeBtn' onclick="document.location='index.html'">
        Home
        </button>`
    homeDiv.id = "homeDiv"
    buttonsDiv.appendChild(homeDiv)

    const replayDiv = document.createElement("div")
    replayDiv.innerHTML =         
        `<button id='replayBtn' onclick="document.location='index2.html'">
        Play Again
        </button>`
    replayDiv.id = "replayDiv"
    buttonsDiv.appendChild(replayDiv)

    const resetDiv = document.createElement("div")
    resetDiv.innerHTML = `<button id="resetBtn">Reset Scores</button>`
    resetDiv.id = "resetDiv"
    buttonsDiv.appendChild(resetDiv)
}

// Delete Scores from localStorage
function deleteScores() {
    let response = confirm("Are you sure you want to reset? All scores will be deleted.")
    if (response == true) {
        window.localStorage.removeItem('allScores'); 
    }
    return response
}

// Click on reset button
document.addEventListener("click", function(e) {
    if (e.target && e.target.id == 'resetBtn') {
        response = deleteScores()
        if (response == true) {
            const emptyArray = []
            displayScores(emptyArray)
            displayBlank()
            createButtons()
        }
    }
})


// Execute
function runFunctions() {
    storedScores = retrieveScores()
    if (storedScores !== null) {
        if (Object.values(storedScores)[storedScores.length - 1]["name"] == "") {
            displayScore(storedScores)
            displayInput()
            document.addEventListener("submit", function(e) {
                e.preventDefault()
                const name = document.getElementById('inputName').value
                const score = Object.values(storedScores)[storedScores.length - 1]["score"]
                console.log(name, score)
                saveScore(score, name)
    
                storedScores = retrieveScores()
                sortedScores = orderScores(storedScores)
                rank = getRanking(sortedScores, name, score)
                displayScores(sortedScores)
                displayOutput(rank, name, score)
                createButtons() 
            })
        }
        else {
            storedScores = retrieveScores()
            sortedScores = orderScores(storedScores)
            displayScores(sortedScores)
            displayBlank()
            createButtons()
        }
    }
    else {
        let blankArray = []
        displayScores(blankArray)
        displayBlank()
        createButtons()
    }
}

runFunctions()




