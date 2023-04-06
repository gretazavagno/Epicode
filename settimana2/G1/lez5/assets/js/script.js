document.getElementById('saluto').innerHTML = 'CIAO!'; //3
/*document è il documento sulla quale agisco, quindi sarebbe il così detto body dell'html
 
getelementbyid fa riferimento al primo oggetto che ha come id l'attributo che c'è dentro.
questo metodo può restituire un elemento html un 

innerhtml è la proprietà che dice "inserisci nell'html" e dopo l'uguale inserisce
quello che deve inserire.

esistono diverti tipo di getelement: 
- Byclassname
- byname
- bytagname

in questi casi è getelements con la s e questo cambia. 
*/

document.write('<h3>Dove sarà scritta questa frase?</h3>'); // 8

/*document write sarà sempre l'ultima cosa che viene fatta, quindi
verrà inserito alla fine della pagina e pure fuori container 
anche se lo scrivo per prima. Quindi viene sempre inserito alla 
fine del DOM. Document.write non fa capo a un specifico tag html. */

/*
 
//window.alert('Questo è un alert'); // 1
/*In questo caso esce la finestrella con alert che è bloccante, fin quando
 non lo chiudo non esce nient'altro.*/

//alert('8+9'); // 2

/*questo è un altro modo per fare alert e in questo caso gli abbiamo fatto fare 
 un calcolo, ma esce sempre la finestrella sopra. */

//console.log('Verifica in console'); // 4
/*è un importante strumento di the bug*/

/*var valore = 15; //5 --> definizione variabile
console.log(valore); //6
console.log(valore+3); //7
*/

var numero = 5; //definizione variabile 
document.getElementById('numero').innerHTML = numero; //mi stampa il valore di una variabile 
document.getElementById('somma').innerHTML = numero + 6; //mi stampa 11 

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() {
    altroTesto = 'Ho cambiato il valore della variabile'; //riassegnazione della variabile
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

setTimeout(riassegna, 2000); //esegui riassegna dopo 2 secondi 


/*-----------------------------CONDIZIONI ------------------*/
var nome = 'Andrea';

if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile è ' + nome;
}

/*vanno sempre messe le () dopo la funzione o la condizione, dopo le () ci sono le { } all'interno delle quali si scrivono le istruzioni operative vere e proprie: 

STRUTTURA SINTATTICA SEMPRE --> keyword nome(parametri){istruzioni} */

/*un'altra funzione di write*/

function clicca() {
    document.write('😊😊😊😊😊');
}

/*in questo caso document write se viene attivato dopo in caricamnto completo del dom cancella il dom scrivendo
quello che sta scritto in mezzo, infatti appena clicco il button scompare tutto e mi 
scrive solo le faccine, ma è la stessa pagina quindi se riaggiorno mi esce tutto come prima.
Quindi la pagina viene cancellata. */








