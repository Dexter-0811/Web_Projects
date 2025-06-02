let numberOFDrumButtons = document.querySelectorAll('.drum').length
let audio = new Audio();  

for (let i = 0; i < numberOFDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function handleClick() {
    console.log(this.innerHTML)
    if (this.innerHTML === w) {
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    } else {
      audio = new Audio('sounds/crash.mp3');
      audio.play
    }
  });
}

  