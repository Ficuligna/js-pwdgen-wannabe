/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito19*/

alert("se vuoi una pass buona inserisci solo lettere minuscole")
var nomeUtente=prompt("Ciao,ordunque, quale è il tuo nome?");
var cognomeUtente=prompt("il tuo cognome?");
var coloreUtente=prompt("quale il tuo colore preferito?");

console.log(nomeUtente, cognomeUtente, coloreUtente);

console.log(nomeUtente.slice((nomeUtente.length - 1), (nomeUtente.length)));




var indicenu = nomeUtente.length
var pass = "";

function semipaname() {
  while (indicenu >= 1){
    var dec = nomeUtente.slice((indicenu - 1), (indicenu));
    if (dec == "a") {
      dec = 99;
    }
    else if (dec == "b") {
     dec = 101
    }
    else if (dec == "c") {
     dec = 102
    }
    else if (dec == "d") {
     dec = 103
    }
    else if (dec == "e") {
     dec = 104
    }
    else if (dec == "f") {
     dec = 105
    }
    else if (dec == "g") {
     dec = 106
    }
    else if (dec == "h") {
     dec = 107
    }
    else if (dec == "i") {
     dec = 108
    }
    else if (dec == "l") {
     dec = 109
    }
    else if (dec == "m") {
     dec = 110
    }
    else if (dec == "n") {
     dec = 111
    }
    else if (dec == "o") {
     dec = 112
    }
    else if (dec == "p") {
     dec = 113
    }
    else if (dec == "q") {
     dec = 114
    }
    else if (dec == "r") {
     dec = 115
    }
    else if (dec == "s") {
     dec = 116
    }
    else if (dec == "t") {
     dec = 117
    }
    else if (dec == "u") {
     dec = 118
    }
    else if (dec == "v") {
     dec = 119
    }
    else if (dec == "z") {
     dec = 120
    }

    console.log(dec);
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    console.log(dec2bin(dec));
    pass = pass + dec2bin(dec);
    console.log(pass);

    indicenu = indicenu - 1;
  }
  return pass;
}

var indicecu = cognomeUtente.length

function semipasurn() {
  while (indicecu >= 1){
    var dec = cognomeUtente.slice((indicecu - 1), (indicecu));
    if (dec == "a") {
      dec = 99;
    }
    else if (dec == "b") {
     dec = 101
    }
    else if (dec == "c") {
     dec = 102
    }
    else if (dec == "d") {
     dec = 103
    }
    else if (dec == "e") {
     dec = 104
    }
    else if (dec == "f") {
     dec = 105
    }
    else if (dec == "g") {
     dec = 106
    }
    else if (dec == "h") {
     dec = 107
    }
    else if (dec == "i") {
     dec = 108
    }
    else if (dec == "l") {
     dec = 109
    }
    else if (dec == "m") {
     dec = 110
    }
    else if (dec == "n") {
     dec = 111
    }
    else if (dec == "o") {
     dec = 112
    }
    else if (dec == "p") {
     dec = 113
    }
    else if (dec == "q") {
     dec = 114
    }
    else if (dec == "r") {
     dec = 115
    }
    else if (dec == "s") {
     dec = 116
    }
    else if (dec == "t") {
     dec = 117
    }
    else if (dec == "u") {
     dec = 118
    }
    else if (dec == "v") {
     dec = 119
    }
    else if (dec == "z") {
     dec = 120
    }

    console.log(dec);
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    console.log(dec2bin(dec));
    pass = pass + dec2bin(dec);
    console.log(pass);

    indicecu = indicecu - 1;
  }
  return pass;
}

var indiceco = coloreUtente.length

function semipacol() {
  while (indiceco >= 1){
    var dec = coloreUtente.slice((indiceco - 1), (indiceco));
    if (dec == "a") {
      dec = 99;
    }
    else if (dec == "b") {
     dec = 101
    }
    else if (dec == "c") {
     dec = 102
    }
    else if (dec == "d") {
     dec = 103
    }
    else if (dec == "e") {
     dec = 104
    }
    else if (dec == "f") {
     dec = 105
    }
    else if (dec == "g") {
     dec = 106
    }
    else if (dec == "h") {
     dec = 107
    }
    else if (dec == "i") {
     dec = 108
    }
    else if (dec == "l") {
     dec = 109
    }
    else if (dec == "m") {
     dec = 110
    }
    else if (dec == "n") {
     dec = 111
    }
    else if (dec == "o") {
     dec = 112
    }
    else if (dec == "p") {
     dec = 113
    }
    else if (dec == "q") {
     dec = 114
    }
    else if (dec == "r") {
     dec = 115
    }
    else if (dec == "s") {
     dec = 116
    }
    else if (dec == "t") {
     dec = 117
    }
    else if (dec == "u") {
     dec = 118
    }
    else if (dec == "v") {
     dec = 119
    }
    else if (dec == "z") {
     dec = 120
    }

    console.log(dec);
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    console.log(dec2bin(dec));
    pass = pass + dec2bin(dec);
    console.log(pass);

    indiceco = indiceco - 1;
  }
  return pass;
}

var collatz = parseFloat(semipacol());
console.log(collatz);
document.getElementById("provola").innerHTML=(collatz);


var a = 0;

function password() {
  while (a <= 225) {
    if (collatz % 2 === 0  ) {
      collatz = collatz / 2;
    }
    else if (collatz % 2 !== 0){
      collatz = (collatz*3) + 1;
    }
    a = a + 1;
  }
  return collatz;
}

document.getElementById("provola").innerHTML = ("Il tuo pin personale è " + password() + "." +"Conservalo con cura. Addio " + nomeUtente +". Abbi cura del signor 'Sottocolle'. Il 'Cavallino Impennato' non è più un luogo sicuro")
console.log(password());
