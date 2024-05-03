'use strict';
const parola1=prompt('inserisci la prima parola');
const parola2=prompt('inserisci la seconda parola');

if(parola1.length > parola2.length){
    console.log('parola più corta: ' + parola2);
    console.log('parola più lunga: ' + parola1);
}
else if(parola2.length > parola1.length){
    console.log('parola più corta: ' + parola1);
    console.log('parola più lunga: ' + parola2);
}
else{
    console.log('parole uguale lunghezza');
}