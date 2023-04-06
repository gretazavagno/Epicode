//-----------------ESERCIZIO 1----------------------------------------------
/*
let x = 3;
let y = 7;

    if (x > y){
        console.log('Il numero più grande è ', x);
    }else if (x < y){
        console.log('Il numero più grande è: ', y);
    }else {
        console.log('I numeri sono uguali');
    }


OPPURE CON OPERATORE TERNARIO

var a = (x > y) ? console.log(x) : console.log(y); 

//a>b? se sì allora stampo a se no b
*/

//-----------------ESERCIZIO 2----------------------------------------------
/*
let n = 5;
let a = 10; 
    if (a !== 5){
        console.log('not equal');
    }
*/
//-----------------ESERCIZIO 3----------------------------------------------
/*
let a = 15; 
if (a % 5 === 0) {
    console.log('divisibile per 5');
}
*/
//-----------------ESERCIZIO 4----------------------------------------------
/*
let a = 10;
let b = 2; 

function uguali(a,b){
    if (a === 8 || b === 8 || a + b ===8) || a - b === 8 || b - a ===8){
        console.log('verificato');
    }else{
        console.log('non verificato');
    }
};

uguali(a,b);
*/

//------------------------ESERXIZIO 5--------------------------------------------
/*
var total = 30;
var spedizione = 10;
var daPagare = total;

if (total <50) {
    daPagare += spedizione; //+= se non stringa significa daPagare+spedizione
}
console.log('Totale da pagare ', daPagare);

ALTRO METODO FATTO DA ME 

function costoSpedizione(a,b){
    if(a >= 50){
        document.write('Il totale da pagare è: ' + a);
    }else {
        document.write('Il totale è: ' + somma + ' euro');
    }
};

costoSpedizione();
*/
//--------------------------ESERCIZIO 6-------------------------------------------
/*
let total2 =65;
total2 = total2 *0.8; //va bene anche * 20/100;
let spedizione2 = 10;
let daPagare2 = total2; 

if(total2 < 50){
    daPagare2 += spedizione2;
}
console.log('Totale da pagare: ', daPagare2);

OPPURE 
if(total >50){
    console.log(total*0.8)
}

*/
//---------------------------ESERCIZIO 7 -----------------------------------------
/*
let z1 = 6;
let z2 = 14;
let z3 = 10; 

if (z1>=z2){
    if(z3>=z1){
        console.log(z3, z1, z2); 
    }else{
        if(z3 >= z2){
            console.log(z1, z3, z2);
        }else{
            console.log(z1, z2, z3);
        }
    }
}else{
    if(z3>=z2){
        console.log(z3, z2,z1);
    } else {
        if(z3>=z1){
            console.log(z2, z3, z1);
        }else{
            console.log(z2, z1, z3)
        }
    }
}
*/
//---------------------------ESERCIZIO 8 -----------------------------------------

let test = 5;
if(typeof test === 'number'){
    console.log('è un numero');
}else{
    console.log('non è un numero');
}

//--------------------------ESERCIZIO 9-------------------------------------------

let numero = 10;
if((numero % 2) === 0){
    console.log('è un numero pari');
}else{
    console.log('è un numero dispari');
}

//------------------------ESERCIZIO 10 -------------------------------------------

//-----------------------ESERCIZIO 11---------------------------------------------

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

  me.city = 'Toronto'; //aggiungo una prorpietà all'oggetto

  console.log('me');

//-------------------------ESERCIZIO 12--------------------

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

//rimuvere lastName

me.lastName = ''; //ho azzerato il valore ma c'è ancora

delete me.lastName; //calcello definitivamente 

//-------------------ESERCIZIO 13---------------------------

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }

//è da usate un metodo dell'array


me.skills.pop(); //ho eliminato ultimo elemento di skills
console.log(me);

//---------------ESERCIZIO 14-------------------------------

var array = []; //creato array vuoto
for(i=1; i<=10; i++){
    array.push(i);
} // i++ è uguale a i+1 fino ad arrivare a 10

//--------------ESERCIZIO 15--------------------------------

array[array.length -1] = 100; //ho preso la lunghezza dell'array in indice(che però parte da 0 e quindi ci tolgo uno per prendere l'ultimo elemento) 
Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.


//metodo lenght



