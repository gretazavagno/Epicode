/*ANALISI DI PROGETTO: questo script dovrà ricevere attraverso un form il nome e l'anno di nascita di una persona, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età. */

/* 
COMPITI TEORICI DA FARE (scrittura teorica dell'algoritmo):
1. leggere il campo nome e memorizzarlo da qualche parte
2. leggere il campo anno e memorizzarlo 
3. con il valore memorizzato dal campo anno, calcolare l'età in base all'anno in corso
4. verificare la maggiore o minore età 
5. scrivere nell'HTML 
6. cancellare il form una volta verificato e prepararlo per eventuali inserimenti successivi
*/

/*MACRODOMANDA DA FARSI SEMPRE: CHE COSA JS DEVE FARE ALL'ATTO DEL CARICAMENTO DELLA PAGINA (AUTOMATICAMENTE) E COSA DEVE FARE A SEGUITO DI UNO O PIU E VENTI E QUALI SONO QUESTI EVENTI?

--> JavaScript deve fare qualcosa al momento del caricamento della pagina (autonomamente)? 
    No perchè deve aspettare gli input.  
    window.addeventlistener('load', function...)-->viene isnerito all'inizio di ogni javascript quando deve fare qualcosa autonomamente appena carica la pagina. In questo caso non lo dobbiamo fare. 

Qual'è EVENTO SCATENANTE di JS? IL CLICK SUL BUTTON --> Questo evento da inizio a tutto
--> è il nostro eventHandler

VARIABILI 
    - GLOBALI (che devono essere usati in più punti): btn (const), età, stato (maggiore e minore età). 

    - LOCALI: nome, anno, 
*/

const btn = document.getElementById('verifica') //btn sarebbe il button
var eta; //è globale perchè viene usata nel calcolo dell'età, nella verifica, nella stampa
var stato;  //è globale perchè viene usata in fase di verifica e nella stampa

/*collega un ascoltatore di eventi per gli eventi del tipo che scriveremo tra parentesi. 
FUNZIONE DI CALLBACK: una funzione he è funzionale a un'altra funzione, quindi fa qualcosa e poi ritorna dove è stata chiamata.*/
btn.addEventListener('click', function() {  /*l'evento è il click e quando c'è il click      
                                            parte la function*/
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta (anno.value); //chiamo la funzione che deve calcolare l'età
    verifica();
    scrivi(nome.value); //per scrivere su html il punto 5
    cancellaForm(nome, anno);

});

function calcolaEta(anno) { //funzione del calcolo dell'età
    eta = 2023 - anno; //fa questo conto e ritorta a calcolaEta(anno.value)
}

function verifica() {
    stato = (eta >= 18) ? 'maggiorenne' : 'minorenne'; /*operatore ternario: è vero? stato
                                                        sarà maggiorenne. E' falso? stato 
                                                        sarà minorenne*/
}

function scrivi(nome) { //questa funzione va a scrivere su html
    document.getElementById('mioNome').innerHTML = 'Ciao' + nome;
    document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni; sei ' + stato; 
}

function cancellaForm(nome, anno) {  //CANCELLARE IL FORM
    nome.value = ''; //uguale a niente quindi SVUOTA FORM
    anno.value = ''; //uguale a ninete quindi SVUOTA FORM
}

