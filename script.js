//Add your global variables here
//Global Variables
let pattern = [4, 3, 2, 2, 1, 3, 2, 4];
let progress = 0; 
let gamePlaying = false;

//start, stop button
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

//sound
let tonePlaying = false;
let volume = 0.5;

//game play
let clueHoldTime = 1000;
let cluePauseTime = 333;
let nextClueWaitTime = 1000;
let guessCounter = 0;



// Add your functions here
function startGame(){
    progress = 0;
    guessCounter = 0;
    gamePlaying = true;

    startBtn.classList.add("hidden");
    stopBtn.classList.remove("hidden");

    playClueSequence();
}


function stopGame() {
  gamePlaying = false;
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");


}


// Sound Synthesis Functions for Steps 6-8
// You do not need to edit the below code
const freqMap = {
    1: 285.3,
    2: 349.6,
    3: 444,
    4: 520.5
  }

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


// Clue Function

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton (btn){
   document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  context.resume()
  let delay = nextClueWaitTime; 
  
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
 
}

function loseGame(){
  stopGame();

  alert("Game Over!\nTry again!");

  resetGame();
}

function resetGame() {
  progress = 0;
  guessCounter = 0;
  gamePlaying = false;
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
}


function winGame() {
    stopGame();  
  
    
    alert("Congratulations!\nYou won the game!");
    resetGame();
  }
  

 

  function guess(btn){
    console.log("user guessed: " + btn);
    
    if(!gamePlaying){
      return;
    }
    
    if(pattern[guessCounter] == btn){
      //Guess was correct!
      if(guessCounter == progress){
        if(progress == pattern.length - 1){
          //GAME OVER: WIN!
          winGame();
        }else{
          //Pattern correct. Add next segment
          progress++;
          playClueSequence();
        }
      }else{
        //so far so good... check the next guess
        guessCounter++;
      }
    }else{
      //Guess was incorrect
      //GAME OVER: LOSE!
      loseGame();
    }
  }  
  

