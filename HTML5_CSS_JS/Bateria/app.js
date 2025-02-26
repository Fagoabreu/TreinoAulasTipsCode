function handleClick() {
    this.style.color = '#fff';

    let tecla = this.innerHTML;
    let audioName = "";
    if (tecla === "w") {
        audioName = "tom-1"
    } else if (tecla === "a") {
        audioName = "tom-2"
    } else if (tecla === "s") {
        audioName = "tom-3"
    } else if (tecla === "d") {
        audioName = "tom-4"
    } else if (tecla === "j") {
        audioName = "snare"
    } else if (tecla === "k") {
        audioName = "crash"
    } else if (tecla === "l") {
        audioName = "kick-bass"
    }
    let audio = new Audio('./sounds/' + audioName + '.mp3');
    audio.play();
}

function setListeners() {
    let buttons = document.querySelectorAll("button.drum");
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

setListeners();


//document.querySelector("button").addEventListener('click', handleClick);