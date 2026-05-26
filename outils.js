function metier(type){

let texte = "";

if(type=="macon"){
texte = "🧱 Maçon : truelle, bétonnière, ciment";
}

if(type=="vrd"){
texte = "🚧 VRD : pelle, compacteur, niveau laser";
}

if(type=="etancheite"){
texte = "💧 Étanchéité : membrane, chalumeau";
}

if(type=="echafaudage"){
texte = "🏗️ Échafaudage : harnais, casque";
}

document.getElementById("metierResult").innerHTML = texte;
}
