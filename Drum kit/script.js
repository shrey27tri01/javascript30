function playSound(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);;
    
    if (!audio) {
      return;
    }
    
    //console.log(audio);
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
