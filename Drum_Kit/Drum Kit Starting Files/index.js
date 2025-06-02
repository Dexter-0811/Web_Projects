let numberOFDrumButtons = document.querySelectorAll('.drum').length
let audio = new Audio();  

for (let i = 0; i < numberOFDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('keypress',function(event) {
    console.log(this.innerHTML);

    drumSound(this.innerHTML);
  });
}

document.addEventListener('keypress', function(event) {
  drumSound(event.key);
});

function drumSound(key) {

  switch (key) {
    case 'w':
      audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 'a':
      audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
  }
}