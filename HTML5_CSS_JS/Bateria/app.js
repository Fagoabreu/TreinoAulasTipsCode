function handleClick() {
    playAudio(getAudioName(this.innerHTML));
    buttonAnimation(this.innerHTML);
}

function handleKey(event) {
    playAudio(getAudioName(event.key));
    buttonAnimation(event.key);
}

function getAudioName(key) {
    switch (key) {
        case 'w':
            return 'tom-1';
        case 'a':
            return 'tom-2';
        case 's':
            return 'tom-3';
        case 'd':
            return 'tom-4';
        case 'j':
            return 'snare';
        case 'k':
            return 'crash';
        case 'l':
            return 'kick-bass';
        default:
            console.log('key não mapeado "' + key + '"');
            return undefined;
    }
}

function playAudio(audioName) {
    if (!audioName) {
        return;
    }
    let audio = new Audio('./sounds/' + audioName + '.mp3');
    audio.play();
}

function setListeners() {
    let buttons = document.querySelectorAll("button.drum");
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
    addEventListener('keydown', handleKey);
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector('.' + currentKey);
    if (!activeButton) {
        return;
    }
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200);
}

setListeners();