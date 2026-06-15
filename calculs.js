// ======================
// 🎤 VOIX
// ======================
function speak(text) {
  if ('speechSynthesis' in window) {
    let msg = new SpeechSynthesisUtterance(text);
    msg.lang = "fr-FR";
    speechSynthesis.speak(msg);
  }
}

// ======================
// 🔢 LECTURE SÉCURISÉE
// ======================
function getVal(id) {
  let v = parseFloat(document.getElementById(id).value);
  return isNaN(v) ? 0 : v;
}

// ======================
// 📐 SURFACE (m²)
// ======================
function calcM2() {
  let l = getVal("longueur");
  let L = getVal("largeur");

  let res = l * L;

  document.getElementById("resultat").innerHTML =
    "📐 Surface : " + res.toFixed(2) + " m²";

  speak("Surface " + res);
}

// ======================
// 📦 VOLUME (m³)
// ======================
function calcM3() {
  let l = getVal("longueur");
  let L = getVal("largeur");
  let h = getVal("hauteur");

  let res = l * L * h;

  document.getElementById("resultat").innerHTML =
    "📦 Volume : " + res.toFixed(2) + " m³";

  speak("Volume " + res);
}

// ======================
// 🧱 PARPAINGS (≈ 10 par m²)
// ======================
function calcParpaing() {
  let l = getVal("longueur");
  let h = getVal("hauteur");

  let surface = l * h;
  let res = surface * 10;

  document.getElementById("resultat").innerHTML =
    "🧱 Parpaings : " + Math.ceil(res);

  speak("Environ " + Math.ceil(res) + " parpaings");
}

// ======================
// 🧱 PAVÉS
// ======================
function calcPave() {
  let surface = getVal("longueur") * getVal("largeur");

  let paveL = 0.20;
  let paveLarg = 0.10;

  let res = surface / (paveL * paveLarg);

  document.getElementById("resultat").innerHTML =
    "🧱 Pavés : " + Math.ceil(res);

  speak("Environ " + Math.ceil(res) + " pavés");
}

// ======================
// 📐 PYTHAGORE
// ======================
function pythagore(a, b) {
  let A = getVal(a);
  let B = getVal(b);

  let c = Math.sqrt(A * A + B * B);

  document.getElementById("resultat").innerHTML =
    "📐 Hypoténuse : " + c.toFixed(2);

  speak("Hypoténuse " + c);
}

// ======================
// 📏 THALÈS
// ======================
function thales(a, b, c) {
  let A = getVal(a);
  let B = getVal(b);
  let C = getVal(c);

  let res = (B * C) / A;

  document.getElementById("resultat").innerHTML =
    "📏 Thalès : " + res.toFixed(2);

  speak("Résultat Thalès " + res);
}

// ======================
// 🧪 CYLINDRE
// ======================
function volumeCylindre(r, h) {
  let R = getVal(r);
  let H = getVal(h);

  let res = Math.PI * R * R * H;

  document.getElementById("resultat").innerHTML =
    "🧪 Cylindre : " + res.toFixed(2) + " m³";

  speak("Volume cylindre " + res);
}

// ======================
// ⚖️ MASSE VOLUMIQUE
// ======================
function masseVolumique(m, v) {
  let M = getVal(m);
  let V = getVal(v);

  let res = M / V;

  document.getElementById("resultat").innerHTML =
    "⚖️ Masse volumique : " + res.toFixed(2) + " kg/m³";

  speak("Masse volumique " + res);
}

// ======================
// ⚖️ POIDS
// ======================
function poids(m) {
  let M = getVal(m);
  let g = 9.81;

  let res = M * g;

  document.getElementById("resultat").innerHTML =
    "⚖️ Poids : " + res.toFixed(2) + " N";

  speak("Poids " + res);
}

// ======================
// 🚀 FORCE
// ======================
function force(m, a) {
  let M = getVal(m);
  let A = getVal(a);

  let res = M * A;

  document.getElementById("resultat").innerHTML =
    "🚀 Force : " + res.toFixed(2) + " N";

  speak("Force " + res);
}

// ======================
// 🔧 TRAVAIL
// ======================
function travail(f, d) {
  let F = getVal(f);
  let D = getVal(d);

  let res = F * D;

  document.getElementById("resultat").innerHTML =
    "🔧 Travail : " + res.toFixed(2) + " J";

  speak("Travail " + res);
}

// ======================
// 📊 PRESSION
// ======================
function pression(f, s) {
  let F = getVal(f);
  let S = getVal(s);

  let res = F / S;

  document.getElementById("resultat").innerHTML =
    "📊 Pression : " + res.toFixed(2) + " Pa";

  speak("Pression " + res);
}

// ======================
// 🌊 HYDROSTATIQUE
// ======================
function hydrostatique(rho, h) {
  let R = getVal(rho);
  let H = getVal(h);
  let g = 9.81;

  let res = R * g * H;

  document.getElementById("resultat").innerHTML =
    "🌊 Hydrostatique : " + res.toFixed(2) + " Pa";

  speak("Pression hydrostatique " + res);
}
