// Iteration 5: Store the player score and display it on the game over screen
let button=document.getElementById("play-again-button");
let score=document.getElementById("score-board");
let scores=localStorage.getItem("score")||null

console.log(scores);

score.innerHTML=scores
button.addEventListener("click",()=>{
    window.location.href="./game.html"
})