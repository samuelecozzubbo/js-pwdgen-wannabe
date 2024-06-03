//Chiedi all’utente il suo nome
let userName = prompt('Inserisci il tuo nome');
/* console.log(userName); */

//poi chiedi il suo cognome
let userSurname = prompt('Inserisci il tuo cognome');

//poi chiedi il suo colore preferito
let favoriteColor = prompt('Inserisci il tuo colore preferito');

//Creazione password
let calculatedPassword = `Dopo attentissimi e sicurissimi calcoli la tua password è ${userName}${userSurname}${favoriteColor}23 `;

//Infine scrivi sulla pagina nomecognomecolorepreferito23
document.getElementById('userPassword').innerHTML = calculatedPassword;

alert('Non condividere questa password con la tua famiglia!!!');