function meteo(){

let temp = 18;
let vent = 20;
let pluie = false;

let message = "🌤️ Température : " + temp + "°C<br>";
message += "💨 Vent : " + vent + " km/h<br>";

if(pluie){
message += "🌧️ Risque pluie chantier";
}
else{
message += "✔️ Conditions chantier correctes";
}

if(vent > 40){
message += "<br>⚠️ Vent dangereux pour échafaudage";
}

document.getElementById("meteoResult").innerHTML = message;
}
