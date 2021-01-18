// Array of pokemon
const pokemonArray = {
    "PIKACHU": {"number": "025", "type": "Electric", "color": "Yellow",
        "hint": "It has a lightning bolt-shaped tail", 
        "hint2": "PIKAPIKA + CHUCHU"},
    "BULBASAUR": {"number": "001", "type": "Grass, Poison", "color": "Green",
        "hint": "There is a green bulb on its back", 
        "hint2": "BULB + DINOSAUR"},
    "IVYSAUR": {"number": "002", "type": "Grass, Poison", "color": "Green",
        "hint": "There is a pink bud on its back", 
        "hint2": "IVY + DINOSAUR"},
    "VENUSAUR": {"number": "003", "type": "Grass, Poison", "color": "Green",
        "hint": "There is a large flower on its back", 
        "hint2": "VENUS FLYTRAP + DINOSAUR"},
    "CHARMANDER": {"number": "004", "type": "Fire", "color": "Orange",
        "hint": "There is flame on its tail", 
        "hint2": "CHAR + SALAMANDER"},
    "CHARMELEON": {"number": "005", "type": "Fire", "color": "Red",
        "hint": "It has sharp claws and a flame on its tail", 
        "hint2": "CHAR + CHAMELEON"},
    "CHARIZARD": {"number": "006", "type": "Fire, Flying", "color": "Orange",
        "hint": "It flies and breathes fire", 
        "hint2": "CHAR + LIZARD"},
    "SQUIRTLE": {"number": "007", "type": "Water", "color": "Blue",
        "hint": "It has a round shell and swims fast", 
        "hint2": "SQUIRT + TURTLE"},
    "WARTORTLE": {"number": "008", "type": "Water", "color": "Blue",
        "hint": "It has a shell and a large furry tail", 
        "hint2": "WARRIOR + TORTOISE + TURLE"},
    "BLASTOISE":{"number": "009", "type": "Water", "color": "Blue",
        "hint": "It shoots water from water cannons on its shell", 
        "hint2": "BLAST + TORTOISE"},
    "CATERPIE": {"number": "010", "type": "Bug", "color": "Green",
        "hint": "It releases a horrible stink from its antenna",
        "hint2": "CATERPILLAR"},
    "METAPOD": {"number": "011", "type": "Bug", "color": "Green",
        "hint": "Its soft body is protected by a hard outer shell",
        "hint2": "METAMORPHOSIS + POD"},
    "BUTTERFREE": {"number": "012", "type": "Bug, Flying", "color": "Purple",
        "hint": "Its wings are covered with poisonous dust",
        "hint2": "BUTTERFLY + FREE"},
    "WEEDLE": {"number": "013", "type": "Bug, Poison", "color": "Orange",
        "hint": "It has a sharp conical stinger on its head",
        "hint2": "WORM + NEEDLE"},
    "KAKUNA": {"number": "014", "type": "Bug, Poison", "color": "Yellow",
        "hint": "It can only move a little and harden its shell",
        "hint2": "COCOON"},
    "BEEDRILL": {"number": "015", "type": "Bug, Poison", "color": "Yellow",
        "hint": "It has three stingers on its forelegs and tail",
        "hint2": "BEE + DRILL"},
    "PIDGEY": {"number": "016", "type": "Normal, Flying", "color": "Brown",
        "hint": "It usually hides in tall grass",
        "hint2": "PIGEON + BUDGIE"},
    "PIDGEOTTO": {"number": "017", "type": "Normal, Flying", "color": "Brown",
        "hint": "It constantly flies around in search of prey",
        "hint2": "PIGEON + DICIOTTO"},
    "PIDGEOT": {"number": "018", "type": "Normal, Flying", "color": "Brown",
        "hint": "It has beautiful feathers on its head",
        "hint2": "PIGEON + JET"},
    "RATTATA": {"number": "019", "type": "Normal", "color": "Purple",
        "hint": "It will chew on anything with its fangs",
        "hint2": "RAT + ATTACK"},
    "RATICATE": {"number": "020", "type": "Normal", "color": "Brown",
        "hint": "It fangs never stop growing",
        "hint2": "RAT + ERADICATE"},
    "SPEAROW": {"number": "021", "type": "Normal, Flying", "color": "Brown",
        "hint": "It must flap its short wings quickly to fly",
        "hint2": "SPEAR + SPARROW"},
    "FEAROW": {"number": "022", "type": "Normal, Flying", "color": "Brown",
        "hint": "It has a thin, long beak",
        "hint2": "FEAR + SPARROW"},
    "EKANS": {"number": "023", "type": "Poison", "color": "Purple",
        "hint": "It curls up in a spiral while it rests",
        "hint2": "SNAKE"},
    "ARBOK": {"number": "024", "type": "Poison","color": "Purple",
        "hint": "It has frightening patterns on its belly",
        "hint2": "COBRA"},
}
// name = Object.keys(pokemonArray)[randomNumber]
// number = (Object.values(pokemonArray)[randomNumber]["number"]
// type = Object.values(pokemonArray)[randomNumber]["type"]
// hint = Object.values(pokemonArray)[randomNumber]["hint"]

const wheelvalue = [700,500,250,800,400,0,300,650,3000,700,500,800,450,0,2000,300,600,500,750,50,900,600,350,1000]

let deg = 0;
let puzzle = "";
let hintCount = 0;
let totalScore = 0;
let roundScore = 0;
let points = 0;
let round = 0;

let delayedDisplay

// Save score in LocalStorage
function saveScore() {
    let existingScores = JSON.parse(localStorage.getItem("allScores"));
    if(existingScores == null) existingScores = [];
    let name = "";
    let score = totalScore
    let newScore = {
        "name": name,
        "score": score
    };
    localStorage.setItem("newScore", JSON.stringify(newScore));
    existingScores.push(newScore);
    localStorage.setItem("allScores", JSON.stringify(existingScores));
}

// Generates a random number in the range [0 - number-1]
function random(number) {
    return Math.floor(Math.random()*number);
}

// Display Message
function displayMessage(message) {
    let messageDiv = document.getElementById("message")
    messageDiv.innerHTML = `<p>${message}</p>`;
}

// Display Picture on Left
function displayPictureLeft(title) {
    const left = document.querySelector(".left")
    const image = "img/" + title + ".png"
    left.innerHTML = `<img src="${image}" class="left-img"></img>`
}

// Clear Picture on Left
function clearPictureRight() {
    const left = document.querySelector(".left")
    left.innerHTML = ""
}

// Display Picture on Right
function displayPictureRight(title) {
    const right = document.querySelector(".right")
    const image = "img/" + title + ".png"
    right.innerHTML = `<img src="${image}" class="right-img"></img>`
}

// Clear Picture on Right
function clearPictureRight() {
    const right = document.querySelector(".right")
    right.innerHTML = ""
}

// Generate the alphabet buttons
function createAlphabet() {
    const alphabetDiv = document.getElementById("alphabet")
    alphabetDiv.innerHTML = null
    for (i = 65; i < 91; i++) {
        let alphabetBtn = document.createElement("button")
        alphabetBtn.innerHTML = String.fromCharCode(i);
        alphabetBtn.className = "abc"
        alphabetBtn.id = "abc"
        alphabetDiv.appendChild(alphabetBtn)
    }
}

// Disable Alphabet
function disableAlphabet() {
    let childNodes = document.getElementById("alphabet").getElementsByTagName('*');
    for (let node of childNodes) {
        node.disabled = true;
    }
}

// Enable Alphabet
function enableAlphabet() {
    let childNodes = document.getElementById("alphabet").getElementsByTagName('*');
    for (var node of childNodes) {
        if (node.innerHTML !== "-") {
            node.disabled = false;
        }
    }
}

// Create Hint Button
function createHintButton() {
    const alphabetDiv = document.getElementById("alphabet")
    const hintBtn = document.createElement("button")
    hintBtn.innerHTML = "HINT"
    hintBtn.className = "hint"
    hintBtn.id = "hintBtn"
    alphabetDiv.appendChild(hintBtn)
    hintBtn.disabled = true
}

// Disable Hint Button
function disableHintButton() {
    const hintBtn = document.getElementById("hintBtn")
    if (hintCount == 3) {
        hintBtn.disabled = true
    }
    hintBtn.innerHTML = "HINT"
}

// Enable Hint Button
function enableHintButton() {
    const hintBtn = document.getElementById("hintBtn")
    hintBtn.style.backgroundColor = "#ff6600"
    hintBtn.disabled = false
}

// Create Re-display Hint Buttons
function createReHintButton(number) {
    const alphabetDiv = document.getElementById("alphabet")
    const reHintBtn = document.createElement("button")
    reHintBtn.innerHTML = number
    reHintBtn.className = "reHint"
    reHintBtn.id = `reHintBtn${number}`
    alphabetDiv.appendChild(reHintBtn)
}

// Change Play Button Text
function changePlayButton(text) {
    const playBtn = document.getElementById("playBtn")
    playBtn.innerHTML = text
}

// Disable Play Button
function disablePlayButton() {
    const playBtn = document.getElementById("playBtn")
    playBtn.style.backgroundColor = "gray"
    playBtn.innerHTML = ""
    playBtn.disabled = true
}

// Create Spin Button
function createSpinButton() {
    const spinDiv = document.getElementById("spin")
    spinDiv.innerHTML = null
    const spinBtn = document.createElement("button")
    spinBtn.id = "spinBtn"
    spinBtn.style.backgroundImage = "url(img/pokeball.png)"
    spinBtn.style.backgroundSize = "88px"
    spinDiv.appendChild(spinBtn)
}

// Disable Spin Button
function disableSpinButton() {
    const spinBtn = document.getElementById("spinBtn")
    spinBtn.style.backgroundImage = "url(img/pokeballgray.png)"
    spinBtn.style.backgroundSize = "88px"
    spinBtn.disabled = true
}

// Enable Spin Button
function enableSpinButton() {
    const spinBtn = document.getElementById("spinBtn")
    spinBtn.style.backgroundImage = "url(img/pokeball.png)"
    spinBtn.style.backgroundSize = "88px"
    spinBtn.disabled = false
}

// Create Wheel
function createWheel() {
    const wheelDiv = document.getElementById("wheelDiv")
    wheelDiv.innerHTML = `<img id="wheel" src="img/wheel.png">`
    const pointerDiv = document.getElementById("pointerDiv")
    pointerDiv.innerHTML = '<img id="pointer" src="img/pointer.png">'
}

// Create Total Score Counter
function displayTotalScore(score) {
    const totalScoreboard = document.getElementById("score")
    totalScoreboard.innerHTML = `${score}`
}

// Create Round Score Counter
function displayRoundScore(score) {
    const roundScoreboard = document.getElementById("roundscore")
    roundScoreboard.innerHTML = `${score}`
}

// Add Points to Score
function addPoints(roundScore, points) {
    roundScore += points
    return roundScore
}

// Subtract Points from Score
function subtractPoints(roundScore, points) {
    roundScore -= points
    return roundScore
}

// Add Round Score to Total Score
function addTotal(totalScore, roundScore) {
    totalScore += roundScore
    return totalScore
}

// Display Points for the Spin
function getPoints() {
    const randomNumber = random(16);
    const points = pointArray[randomNumber]
    return points
}

// Gets puzzle word from bank
function getPuzzle() {
    const number = random(25)
    const puzzle = Object.entries(pokemonArray)[number]
    return puzzle
}

// Creates puzzle 
function createPuzzle() {
    const name = puzzle[0]
    const puzzleDiv = document.getElementById("puzzleDiv")
    puzzleDiv.innerHTML = ""
    for (i=0; i<name.length; i++) {
        const boxDiv = document.createElement("div")
        boxDiv.className = "box"
        boxDiv.id = `box${i}`
        boxDiv.innerHTML = "?"
        puzzleDiv.appendChild(boxDiv)
    }
}

// Guess letter of puzzle
function guessLetter(event, puzzle) {
    const guess = event.target.innerHTML
    const answer = puzzle[0]
    let count = 0
    for (i=0; i<answer.length; i++) {
        const boxId = `box${i}`
        if (guess == answer.charAt(i)) {
            const box = document.getElementById(boxId)
            box.innerHTML = guess
            box.style.backgroundColor = "yellow"
            count += 1
        }
    }
    event.target.innerHTML = "-"
    event.target.disabled = "disabled"
    event.target.style.backgroundColor = "#bbb074"
    return count
}

// Check if puzzle is solved
function checkPuzzle(puzzle) {
    const complete = puzzle[0].length
    let check = 0
    for (i=0; i<complete; i++) {
        element = `#box${i}`
        const contents = document.querySelector(element).innerHTML 
        if (contents !== "?") {
            check += 1
        }
    }
    if (check == complete) {
        totalScore = addTotal(totalScore, roundScore)
        displayTotalScore(totalScore)
        displayMessage("Congratulations!!")
        displayPictureLeft(puzzle[1]["number"])
        displayPictureRight("red99")
        disableSpinButton()
        disableAlphabet()
    }
}

// Click the play button
document.getElementById("playBtn").addEventListener("click", function() {
    createAlphabet()
    disableAlphabet()
    hintCount = 0
    createHintButton()
    createSpinButton()
    enableSpinButton()
    displayTotalScore(totalScore)
    roundScore = 0
    displayRoundScore(roundScore)
    displayMessage("")
    displayPictureLeft("000")
    displayPictureRight("red0")
    createWheel()
    puzzle = getPuzzle()
    createPuzzle(puzzle)
    displayPictureLeft(`${puzzle[1]["number"]}b`)
    round += 1
    changePlayButton(`Start Round ${round + 1}`)
    if (round == 10) {
        disablePlayButton()
    }
})

// Click the spin button
document.addEventListener('click',function(e) {
    if(e.target && e.target.id == 'spinBtn') {
        displayMessage("")
        displayPictureRight(`red${random(12)}`)

        const wheel = document.getElementById('wheel');
        e.target.style.pointerEvents = 'auto';
        deg = Math.floor(2500 + Math.random() * 2500);
        wheel.style.transition = 'all 5s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');

        wheel.addEventListener('transitionend', () => {
            wheel.classList.remove('blur');
            wheel.style.transition = 'none';
            const absDeg = deg % 360;
            wheel.style.transform = `rotate(${absDeg}deg)`;
        })
        
        points = wheelvalue[Math.floor((360 - (deg % 360)) / 15)]
        disableSpinButton()
        setTimeout(() => {enableAlphabet()}, 5000)
        // setTimeout(() => {enableHintButton()}, 5000)
        setTimeout(() => {disableHintButton()}, 5000)
        setTimeout(() => {displayMessage(points)}, 5000)

        if (points == 0) {
            roundScore = 0
            setTimeout(() => {displayMessage("Bankrupt!!")}, 5000)
            setTimeout(() => {enableSpinButton()}, 5000)
            setTimeout(() => {disableAlphabet()}, 5000)
        }
        setTimeout(() => {displayRoundScore(roundScore)}, 5000)
     }
 })

 // Click an alphabet button
document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'abc'){
        window.clearTimeout(delayedDisplay)
        const guess = e.target.innerHTML
        const count = guessLetter(e, puzzle)
        const roundPoints = points * count
        if (count == 0) {
            roundScore = subtractPoints(roundScore, 500)
            displayMessage(`No ${guess} ... -500 :(`)
        }
        else {
            roundScore = addPoints(roundScore, roundPoints)
            if (count == 1) {
                displayMessage(`${guess} ... +${roundPoints} !!`)
            }
            else {
                displayMessage(`${count} ${guess}'s ... +${roundPoints} !!`)
            }
        }
        displayRoundScore(roundScore)
        disableAlphabet()
        enableSpinButton()
        checkPuzzle(puzzle)
     }
 })
 
// Hover hint button
document.addEventListener('mouseover',function(e) {
    if(e.target && e.target.id == 'hintBtn') {
        e.target.innerHTML = "-200"
    }
})

document.addEventListener('mouseout',function(e) {
    if(e.target && e.target.id == 'hintBtn') {
        e.target.innerHTML = "HINT"
    }
})


// Click on hint button
document.addEventListener('click',function(e) {
    if(e.target && e.target.id == 'hintBtn') {
        window.clearTimeout(delayedDisplay)
        if (hintCount == 0) {
            displayMessage(`Hint: ${Object.values(puzzle)[1]["color"]}-colored, 
            ${Object.values(puzzle)[1]["type"]}-type`)
            createReHintButton(1)
        }
        else if (hintCount == 1) {
            displayMessage(`Hint: ${Object.values(puzzle)[1]["hint"]}`)
            createReHintButton(2)
        }
        else {
            displayMessage(`Hint: ${Object.values(puzzle)[1]["hint2"]}`)
            createReHintButton(3)
        }
        hintCount += 1
        roundScore = subtractPoints(roundScore, 200)
        displayRoundScore(roundScore)
        delayedDisplay = setTimeout(() => {displayMessage(points)}, 5000)
        disableHintButton()
    }
})

//Click on reHint buttons
document.addEventListener('click',function(e) {
    if(e.target && e.target.className == 'reHint') {
        window.clearTimeout(delayedDisplay)
        if (e.target.innerHTML == 1) {
            displayMessage(`Hint: ${Object.values(puzzle)[1]["color"]}-colored 
            ${Object.values(puzzle)[1]["type"]}-type`)
        }
        else if (e.target.innerHTML == 2) {
            window.clearTimeout(delayedDisplay)
            displayMessage(`Hint: ${Object.values(puzzle)[1]["hint"]}`)
        }
        else {
            window.clearTimeout(delayedDisplay)
            displayMessage(`Hint: ${Object.values(puzzle)[1]["hint2"]}`)
        }
        delayedDisplay = window.setTimeout(() => {displayMessage(points)}, 5000)
    }
})

 // Click on end game button
 document.getElementById("exitBtn").addEventListener('click',function(){
     if (totalScore !== 0) {
        saveScore()
     }
    // window.localStorage.removeItem('allScores'); 
 })
