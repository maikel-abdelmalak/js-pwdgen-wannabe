//creo una variabile in cui inserire il nome
var nome = prompt ('come ti chiami?');

//creo una variabile in cui inserire il cognome
var cognome = prompt ('Quale è il tuo cognome?');

//creo una variabile in cui inserire il colore
var colore = prompt ('Quale è il tuo colore preferito?');

//creo una variabile in cui inserire la data
var anno = '20';

//creo una variabile in cui inserire concatenare le 4 stringhe
var risultato = nome + cognome + colore + anno;

//stampo la variabile risultato all'interno dello span password
document.getElementById('password').innerHTML = risultato;
