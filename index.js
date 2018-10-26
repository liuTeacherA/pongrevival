// variables ------------------------------------------------------------
const b = document.querySelector("body")
const c = document.getElementById("mycanvas")
const draw = c.getContext("2d")

const test = console.log
const canvasWidth = 600
const canvasHeight = 600

let title = true
let rectX = 0
let rectY = 0

//0000000000000000000000000000000000000000000000000000000000
let page = 1


//0000000000000000000000000000000000000000000000000000000000


// setup ---------------------------------------------------------------
console.clear();
c.width = canvasWidth;
c.height = canvasHeight;


// function 1 ----------------------------------------------------------
function background() {
  draw.fillStyle = "black"
  draw.fillRect(0, 0, canvasWidth, canvasHeight)
}
function pongRevival() {
  draw.font = "70px arial"
  draw.textAlign = "center"
  
  draw.strokeStyle = "white"
  draw.lineWidth = 10
  draw.strokeText("Pong Revival", canvasWidth/2, canvasHeight/2 - 50)
  
  draw.fillStyle = "blue"
  draw.fillText("Pong Revival", canvasWidth/2, canvasHeight/2 - 50)
}
function clickToStart() {
  draw.font = "30px arial"
  draw.textAlign = "center"
  draw.fillStyle = "white"
  draw.fillText("Click to start", canvasWidth/2,canvasHeight/2 + 150)
}
function ready() {
  background()
  draw.font = "30px arial"
  draw.textAlign = "center"
  draw.fillStyle = "white"
  draw.fillText("Ready", canvasWidth/2,canvasHeight/2)
}
function go() {
  background()
  draw.font = "30px arial"
  draw.textAlign = "center"
  draw.fillStyle = "white"
  draw.fillText("Go", canvasWidth/2,canvasHeight/2)
}
function gameOver() {
  background()
  draw.font = "30px arial"
  draw.textAlign = "center"
  draw.fillStyle = "white"
  draw.fillText("Game Over", canvasWidth/2,canvasHeight/2)
}

function rect() {
  draw.fillStyle = "red"
  draw.fillRect(rectX, rectY, 20, 20)
}
function movement() {
  rectX += 10
}
function gameset() {
  if (rectX > c.width) {
    page = 4
    rectX = 0
  }
}

// function complex ----------------------------------------------------
function screenTitle() {
  title = true
  background()
  pongRevival()
  clickToStart()  
}
function startGame() {
  if (title) {
    ready()
    setTimeout(go, 1000)
    setTimeout(function(){page = 3},2000)
  }
  title = false
}
function playing() {
  background()
  rect()
 // movement()
  gameset()
}
function endGame() {
  gameOver()
  setTimeout(function(){page = 1}, 2000)
}
// 0000000000000000000000000000000000000000000000000000000000000000000000000000000000
c.addEventListener("mousedown", clicked)    
function clicked() {
  if (title) {
    page = 2
  }
}

function checkPage() {
  if (page == 1) {
    showPage = screenTitle()
  } else if (page == 2) {
    showPage = startGame()
  } else if (page == 3) {
    showPage = playing()
  } else if (page == 4) {
    showPage = endGame()
  }
}

setInterval(function(){
  checkPage()
  showPage
  console.clear()
  test(page, title)
}, 1000/30)

// 0000000000000000000000000000000000000000000000000000000000000000000000000000000000


               

//_____________________________________________________________ controller
b.addEventListener("keydown", function() {rectMove(event)} )
function rectMove(event) {
  let k = event.keyCode || event.which
  
  if (k == 39) {
    rectX += 10
  }
  if (k == 37) {
    rectX -= 10
  }
  if (k == 38) {
    rectY -= 10
  }
    if (k == 40) {
    rectY += 10
  }
}