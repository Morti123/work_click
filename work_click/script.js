/* let blocks = document.querySelectorAll('.block');
for(let item of blocks){
item.addEventListener('click',(event)=>changeColorBlock(event));
}
function changeColorBlock(event){
    console.log(event);
    event.target.classList.toggle('blockColor');
} */
/* Задание 1 */
/* let block = document.querySelector(".block");
let angle = 0;
block.addEventListener('click',func);
function func(){
    angle = angle + 45;
    block.style.transform = "rotate("+ angle +"deg)";
} */

/* Задание 2 */
/* let cl = document.querySelector('span');
let bt = document.querySelector('button')
let kv = 0;
bt.addEventListener('click', func);
function func(){
    cl.innerText = + kv;
    kv++
} */

/* Задание 3 */
 /* let block = document.querySelectorAll('.block2');
 for(let item of block){
    item.addEventListener('click',(event)=>changeBlock(event));
    }
 function changeBlock(event){
    event.target.classList.toggle('scale');
} 
 */
/* 4 */
/* let block = document.querySelectorAll('.block3');
let block2 = document.querySelector('.block4');
for(i =0; i<block.length; i++){
    block[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ', ' 
    + Math.floor(Math.random() * 256) + ', ' 
    + Math.floor(Math.random() * 256) + ')';
}
for(let item of block){
    item.addEventListener('click',(event)=>changeBlock(event));
    }
 function changeBlock(event){
    block2.style.backgroundColor =   getComputedStyle(event.target).backgroundColor;
}  */
/* 5 */
/* let block = document.querySelectorAll('.block9');
 for(let item of block){
    item.addEventListener('click',(event)=>changeBlock(event));
    }
 function changeBlock(event){
    event.target.style.display = 'none';
}  */
/* 6 */
/* let Left = document.querySelector("#Left");
let Right = document.querySelector("#Right");
let Up = document.querySelector("#Up");
let Down = document.querySelector("#Down");
let kub = document.querySelector(".p");
let cont = document.querySelector(".div")
Up.addEventListener("click", ()=> {
    if (kub.offsetTop > 0)
    kub.style.top = kub.offsetTop - 10 + "px";
});
Down.addEventListener("click", ()=> {
    if (kub.offsetTop < cont.clientHeight -kub.clientHeight)
    kub.style.top = kub.offsetTop + 10 + "px";
});
Left.addEventListener("click", ()=> {
    if (kub.offsetLeft > 0)
    kub.style.left = kub.offsetLeft - 10 + "px";
});
Right.addEventListener("click", ()=> {
    if (kub.offsetLeft < cont.clientWidth - kub.clientWidth)
    kub.style.left = kub.offsetLeft + 10 + "px";
}); */
/* 7 */
let Start = document.querySelector(".start");
let Stope = document.querySelector(".stop");
let Restart = document.querySelector(".restart");
let p = document.querySelector("p");
let sec = 0;
let interval;
function restart(){
    sec = 0;
    clearInterval(interval);
    return p.innerText = "Секунд прошло: " + sec;
}
function start(){
   interval = setInterval(timer, 1000);
}
function stope(){
    clearInterval(interval);
}
function timer(){
    sec = sec + 1;  
   return p.innerText = "Секунд прошло: " + sec;
}
Start.addEventListener('click',() => {start()});
Stope.addEventListener('click',() => {stope()});
Restart.addEventListener('click',() => {restart()});
