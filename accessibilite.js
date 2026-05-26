function speak(text){
let msg = new SpeechSynthesisUtterance(text);
msg.lang = "fr-FR";
speechSynthesis.speak(msg);
}

function modeContraste(){
document.body.style.background = "black";
document.body.style.color = "white";
}
