// https://github.com/wesbos/JavaScript30

// function removeTransition(e){
//     if(e.propertryName == 'transform'){
//         e.target.classList.remove('playing');
//     }
// }

function removeHighlight(e: KeyboardEvent) {
    const key = <HTMLElement>document.querySelector(`div[data-key="${e.code}"]`);
    if (key) { key.classList.remove('playing'); }
}

function playsound(e: KeyboardEvent) {
    let audio = <HTMLMediaElement>document.getElementById(e.code);
    const key = <HTMLElement>document.querySelector(`div[data-key="${e.code}"]`);
    if (audio) {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
}
// const keys = Array.from(document.querySelectorAll('.key'));
// console.log(keys);
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);
window.addEventListener('keyup', removeHighlight);