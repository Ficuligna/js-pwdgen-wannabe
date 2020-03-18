/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito19*/


var nomeUtente=prompt("Ciao, quale è il tuo nome?");
var cognomeUtente=prompt("il tuo cognome?");
var coloreUtente=prompt("quale il tuo colore preferito?");

console.log(nomeUtente, cognomeUtente, coloreUtente);
document.getElementById('provola').innerHTML=( nomeUtente + cognomeUtente + coloreUtente + "20");
