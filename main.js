let startButton = document.getElementById('start-button')
let inflateButton = document.getElementById('inflate-button')
// DATA
let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let popCount = 0
let gameLength = 5000
let clockId = 0
let timeRemaining = 0
function startGame() {
  startButton.setAttribute("disabled", "true")
  inflateButton.removeAttribute("disabled")
  startClock()
  setTimeout(stopGame, gameLength)
}
function startClock() {
  timeRemaining = gameLength
  drawClock()
  clockId = setInterval(drawClock, 1000)
}
function stopClock() {
  clearInterval(clockId)
} function drawClock() {
  let countdownElm = document.getElementById('countdown')
  countdownElm.innerText = (timeRemaining / 1000).toString()
  timeRemaining -= 1000
}
function inflate() {
  clickCount++
  height += inflationRate
  width += inflationRate
  if (height >= maxsize) {
    console.log("pop the balloon")
    popCount++
    height = 0
    width = 0
  }
  draw()
}

function draw() {
  let baloonElement = document.getElementById("balloon")
  let clickCountElem = document.getElementById("clickCount")
  let popCountElem = document.getElementById("pop-count")

  baloonElement.style.height = height + "px"
  baloonElement.style.width = width + "px"

  clickCountElem.innerText = clickCount.toString()
  popCountElem.innerText = popCount.toString()
}



function stopGame() {
  console.log("the game is over")

  inflateButton.setAttribute("disabled", "true")
  startButton.removeAttribute("disabled")

  clickCount = 0
  height = 120
  width = 100
  stopClock()
  draw()

}
