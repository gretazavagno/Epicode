/* REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)*/

/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 1: Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.

var l1 = 5;
var l2 = 10;
;
var areaRettangolo;

function area(l1, l2){
    areaRettangolo = l1 * l2;
    return;
}

area(l1, l2);
console.log(areaRettangolo);


/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 2: Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri. La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.

var n1 = 5;
var n2 = 5;
var somma = n1 + n2;

function crazySam(valore1, valore2){
    if(n1 === n2){
        console.log(somma*3); 
    }else {
        console.log(somma);
        return;
    }
}; 
crazySam(n1, n2);



/*--------------------------------------------------------------------------------------*/
// ESERCIZIO 3: Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19. Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.

var numero1 = 19;
var parametro = Math.abs(Math.floor(Math.random()*101)); 
var calcolo;

function crazyDiff(numero1, parametro){
    if(parametro > 19){
        calcolo = Math.abs((numero1 - parametro)*3);
        console.log(calcolo);
    }else {
        calcolo = Math.abs(numero1 - parametro);
        console.log(calcolo);
    }
}
crazyDiff(numero1, parametro);

//ridevere
//Math.abs(estratto - valore1)


/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 4: Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.

var n = Math.floor(Math.random()*101);

function boundary(n){
    if( 20<n<=100 || n === 400){
        console.log('true');
    }
};
boundary(n);

/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 5: Scrivi una funzione di nome "epify" che accetta una stringa come parametro.La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.


var parametroStringa = 'ciao';

function epify(stringa){
    if(parametroStringa === 'EPICODE'){
        console.log(parametroStringa);
    }else{
        console.log(parametroStringa += ' EPICODE');
    }

}

epify(parametroStringa);

/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 6: Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo di 3 o di 7. (Suggerimento: usa l'operatore modulo)

var valore1 = Math.abs(Math.floor(Math.random()*101)); //valore positivo da 0 a 100

function check3and(valore1){
    if(valore1 % 3 === 0 && valore1 % 7 === 0){
        console.log(`${valore1} è divisibile sia per 3 sia per 7`);
    } else if (valore1 % 7 === 0){
        console.log(`${valore1} è divisibile per 7`);
    } else if((valore1 % 3 === 0)){
        console.log(`${valore1} è divisibile per 3`);
    } else {
        console.log('Il valore non è divisibile ne per 3 ne per 7');
    }
};

check3and(21);


/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 7: Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")

var string = 'EPICODE';

function reverseString(String){
    var splitString = string.split(''); //split mi restituisce un array ['E', 'P','I', 'C', 'O', 'D', ''E]
    var reverseArray = splitString.reverse(); //reverse mi inverte l'array creato
    var joinArray = reverseArray.join('');//join mi unisce l'array finale
    console.log(joinArray);

    return joinArray;
};

reverseString(string);

/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 8: Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole. La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.




/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 9: Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere della stringa originale.

function cutString(newString){
    return newString.slice(1, newString.length -1);
};
console.log(cutString('ARCOBALENO'));


/*--------------------------------------------------------------------------------------*/
//ESERCIZIO 10: Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.

function giveMeRandom(n){
    let array = [];
    for(let i=0; i<n; i++){
        array.push(Math.floor(Math.random()*10));
    }
    return array;
}
console.log(giveMeRandom(5));
