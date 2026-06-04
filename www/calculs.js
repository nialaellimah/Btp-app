// ======================
// CALCUL M²
// ======================

function calcM2(){

let l = parseFloat(document.getElementById("longueur").value);

let L = parseFloat(document.getElementById("largeur").value);

let res = l * L;

document.getElementById("resultat").innerHTML =
"📐 Surface : " + res + " m²";

speak("Surface " + res + " mètres carrés");
}

// ======================
// CALCUL M³
// ======================

function calcM3(){

let l = parseFloat(document.getElementById("longueur").value);

let L = parseFloat(document.getElementById("largeur").value);

let h = parseFloat(document.getElementById("hauteur").value);

let res = l * L * h;

document.getElementById("resultat").innerHTML =
"🧱 Volume : " + res + " mètre cube";

speak("Volume " + res + " mètres cubes");
}

// ======================
// CALCUL PENTE
// ======================

function calcPente(){

let h = parseFloat(document.getElementById("penteH").value);

let d = parseFloat(document.getElementById("penteD").value);

let res = (h/d)*100;

document.getElementById("resultat").innerHTML =
"📏 Pente : " + res.toFixed(2) + " %";

speak("Pente " + res.toFixed(2) + " pourcent");
}

