const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameBoard = document.querySelector('.game-board')
const gameOver = document.querySelector('.game-over')
const audioGameOver = new Audio('../assets/audio/gameover.mp3')
let timeId 

const restartGame = () => {
   pipe.classList.add('pipeanimation');
   pipe.style.removeProperty('left');
   mario.src = './assets/images/mario3.gif';
   mario.style.bottom = '0px';
   gameOver.style.display = 'none';
   GameStart()
}
const jump = () => {
mario.classList.add('jump');

setTimeout(() => {

   mario.classList.remove('jump');

    }, 500);
}

const GameStart = () => {
   console.log('ok'+timeId)
   clearTimeout(timeId)
   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

   if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
      audioGameOver.play()
      pipe.classList.remove('pipeanimation');
      pipe.style.left = `${pipePosition}px`; 
    
   //   mario.style.animation = 'none'; 
     mario.style.bottom = `${marioPosition}px`;

     mario.src = './assets/images/mario-game.over.png';
     mario.style.width = '150px'
     setTimeout(()=>{gameOver.style.display = 'flex'}, 5000)
     return
   }

   timeId = setTimeout(()=>{GameStart()}, 10)

}
document.addEventListener('keydown', ({keyCode})=>{
   switch(keyCode){
      case 32: jump(); break
   }
});
GameStart()