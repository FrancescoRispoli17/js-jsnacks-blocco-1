'use strict';
const numeri=[];
for(let i = 0; i < 6; i++){
    const n1=prompt('inserisci la prima parola');
    if(Number(n1) % 2 === 1)
        numeri.push(n1);
}
console.log(numeri);