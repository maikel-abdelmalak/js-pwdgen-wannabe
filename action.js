var nome = prompt ('come ti chiami?');
var cognome = prompt ('Quale è il tuo cognome?');
var colore = prompt ('Quale è il tuo colore preferito?');
var data = new Date();
var anno = '20';
var risultato = nome + cognome + colore + anno;
document.getElementById('password').innerHTML = risultato;
