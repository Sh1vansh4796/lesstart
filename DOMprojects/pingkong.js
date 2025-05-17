const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const p2display = document.querySelector('#p2display')
const p1display = document.querySelector('#p1display')
const resetbutton = document.querySelector('#reset')
const playto = document.querySelector('#playto')
let p1score = 0;
let p2score = 0;
let winscore = 5;
let isGameOver = false;


p1button.addEventListener('click',()=>{
    if(!isGameOver){
        p1score+=1;
        p1display.textContent = p1score
        if(p1score === winscore){
        isGameOver = true
        }
    }
})
p2button.addEventListener('click',()=>{
    if(!isGameOver){
        p2score+=1;
        p2display.textContent = p2score
        if(p1score === winscore){
        isGameOver = true
        }
    }
})
resetbutton.addEventListener('click',reset)

playto.addEventListener('change', function () {
    winscore = parseInt(this.value);
    reset();
});

function reset(){
    isGameOver = false
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
}