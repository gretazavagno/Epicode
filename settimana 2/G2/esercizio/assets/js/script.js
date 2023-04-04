/*ESERCIZIO 1*/
/*document.write('<h1>I principali datatype in JavaScript<h1><br><p><ul><li>Dato stringa: in JS indica sia il singolo carattere che la sequenza finita di caratteri.</li> <li>Datonumerico: in JS viene indicato sia senza distinzione fra intero e decimale. Il decimale si esprime sempre con il punto</li><li>Dato Booleano: ammette due soli valori che sono true e false. Questo tipo di dato è tipico dei controlli condizionali.</li><li>Caratteri di <b>Escape</b> (<b></b>): viene usato quando dobbiamo usare l’apostrofo o virgolette in una stringa delimitata da apici o virgolette. Viene usato anche per inserire una nuova riga. </li></ul></p>');*/

//------------------------------------------------------------------------------------------------------------------------------------------------
/*ESERCIZIO 2*/

//var name = 'Greta';

//------------------------------------------------------------------------------------------------------------------------------------------------
/*ESERCIZIO 3*/
/*

var a = 12;
var b = 20; 

var somma = (a + b);

document.getElementById('somma').innerHTML = 'La somma è: ' + somma;

*/
//-------------------------------------------------------------------------------------------------------------------------------------------------
//ESERCIZIO 4
/*

var x = 12; 
document.write('La x vale: ' + 12);

*/

//-----------------------------------------------------------------------------------------------------------------------------------------------
//ESERCIZIO 5
/*

var nome = 'Greta';

var cognome = 'Zavagno';

var nome = cognome;

document.write(nome);

const nome = 'Greta';

*/

//-------------------------------------------------------------------------------------------------------------------------------------------------
//ESERCIZIO 6
/*

var x = 12;
document.write(4 + x);

*/
//-------------------------------------------------------------------------------------------------------------------------------------------------
//ESERCIZIO 7

var name1 = 'john';
var name2 = 'John';

    if (name1 !== name2) {
        document.write('Le variabili sono diverse')
    } else {
        document.write('Le variabili sono uguali')
    }

    //questo si può fare anche così
    /*if(name1 == name2){
        console.log('Le variabili sono uguali');
    }else{
        console.log('Le variabili sono diverse');
    }
    */

// in questo caso aggiungo a name la proprietà di lettera minuscola. 

    if(name1.toLowerCase == name2.toLowerCase){
        console.log('Le variabili sono uguali');
    }else {
        console.log('Le variabili sono diverse');
    }



