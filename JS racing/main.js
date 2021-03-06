 'use strict'; 
 
 /*среда разработки выдает ошибки, если функция объявлена после упоминания, 
 поэтому все переставлено по хронологии появления, чтобы не было ошибок, и были волнистые подчеркивания на start,
 которые убрались после use strict*/

 const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
  
 const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
 };

 const setting = {
  start: false,
  score: 0,
  speed: 3
 };

  function playGame(){
    console.log('Play game!');
    if (setting.start){
     requestAnimationFrame(playGame);
    } 
 }
 
 function startGame(){
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
    
 }

 function startRun(event){
   event.preventDefault();
   keys[event.key] = true;
 }

 function stopRun(event){
    event.preventDefault();
    keys[event.key] = false;
 }
 
 car.classList.add('car');
 
 start.addEventListener('click', startGame);
 document.addEventListener('keydown', startRun);
 document.addEventListener('keyup', stopRun);
 
