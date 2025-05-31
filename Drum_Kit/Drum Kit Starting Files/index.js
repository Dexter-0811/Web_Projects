let numberOFDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOFDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function handleClick() {
    alert('I got clicked!')
  });
}

  