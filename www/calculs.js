// ======================
// SURFACE
// ======================

function calcM2(){

let l = parseFloat(document.getElementById("longueur").value) || 0;
let L = parseFloat(document.getElementById("largeur").value) || 0;

let surface = l * L;

document.getElementById("resultat").innerHTML =
"📐 Surface : " + surface.toFixed(2) + " m²";
}

// ======================
// PERIMETRE
// ======================

function calcPerimetre(){

let l = parseFloat(document.getElementById("longueur").value) || 0;
let L = parseFloat(document.getElementById("largeur").value) || 0;

let perimetre = 2 * (l + L);

document.getElementById("resultat").innerHTML =
"📏 Périmètre : " + perimetre.toFixed(2) + " m";
}

// ======================
// VOLUME
// ======================

function calcM3(){

let l = parseFloat(document.getElementById("longueur").value) || 0;
let L = parseFloat(document.getElementById("largeur").value) || 0;
let h = parseFloat(document.getElementById("hauteur").value) || 0;

let volume = l * L * h;

document.getElementById("resultat").innerHTML =
"🧱 Volume : " + volume.toFixed(2) + " m³";
}

// ======================
// MASSE BETON
// ======================

function calcMasse(){

let l = parseFloat(document.getElementById("longueur").value) || 0;
let L = parseFloat(document.getElementById("largeur").value) || 0;
let h = parseFloat(document.getElementById("hauteur").value) || 0;

let volume = l * L * h;

let masse = volume * 2400;

document.getElementById("resultat").innerHTML =
"⚖️ Masse béton : " +
(masse/1000).toFixed(2) +
" tonnes";
}

// ======================
// PENTE
// ======================

function calcPente(){

let h = parseFloat(document.getElementById("penteH").value) || 0;
let d = parseFloat(document.getElementById("penteD").value) || 0;

if(d === 0){
return;
}

let res = (h/d)*100;

document.getElementById("resultat").innerHTML =
"📏 Pente : " + res.toFixed(2) + " %";
}

// ======================
// IMPLANTATION COMPLETE
// ======================

function implantation(){

let l = parseFloat(document.getElementById("longueur").value) || 0;
let L = parseFloat(document.getElementById("largeur").value) || 0;
let h = parseFloat(document.getElementById("hauteur").value) || 0;

let perimetre = 2*(l+L);
let surface = l*L;
let volume = surface*h;
let masse = volume*2400;

document.getElementById("resultat").innerHTML =
"📏 Périmètre : " + perimetre.toFixed(2) + " m<br>" +
"📐 Surface : " + surface.toFixed(2) + " m²<br>" +
"🧱 Volume : " + volume.toFixed(2) + " m³<br>" +
"⚖️ Masse : " + (masse/1000).toFixed(2) + " t";
}
EOF
