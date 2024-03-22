// Iteration 2: Generate 2 random number and display it on the screen
let num1 = document.getElementById("number1");
num1.innerHTML = randomNumber();

let num2 = document.getElementById("number2");
num2.innerHTML = randomNumber();

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

// Iteration 3: Make the options button functional

let greater = document.getElementById("greater-than");
let lesser = document.getElementById("lesser-than");
let equal = document.getElementById("equal-to");

let score=0;

greater.addEventListener("click", () => {
    clearInterval(value)
    // start();
    clearInterval(value)
  if (num1.innerHTML > num2.innerHTML) {
    // clearInterval(value);
    alert("Yes!!  greater");

    score++;
    localStorage.setItem("score",score)
    // console.log(score)

    num1.innerHTML = randomNumber();
    num2.innerHTML = randomNumber();
    start();
  } else {
    window.location.href="/gameover.html";
  }
});

lesser.addEventListener("click", () => {
    // start();
    clearInterval(value)
  if (num1.innerHTML < num2.innerHTML) {
    alert("Yes!!  lesser");

    score++;
    localStorage.setItem("score",score);

    num1.innerHTML = randomNumber();
    num2.innerHTML = randomNumber();
    start();
 
  } else {
    window.location.href="/gameover.html";
  }
});

equal.addEventListener("click", () => {
    // start();
    clearInterval(value)
  if (num1.innerHTML === num2.innerHTML) {
    alert("Yes!!  equal");

    score++;
    localStorage.setItem("score",score);

    console.log(score)
    num1.innerHTML = randomNumber();
    num2.innerHTML = randomNumber();
    start();
 
  } else {
    window.location.href="/gameover.html";
  }
});

// Iteration 4: Build a timer for the game

console.log(score)
let timer= document.getElementById("timer");
let value


function start(){
 let val=-1;

    value= setInterval(()=>{
        val++;
        timer.innerHTML= val;
        if(val>=10){
          clearInterval(val)
          // alert("Game over")
          window.location.href="/gameover.html";
        }
        
    },1000)

    
    // console.log(val)
};

//  if(val==10){
//   clearInterval(value)
//  }

start();


// console.log(start())

