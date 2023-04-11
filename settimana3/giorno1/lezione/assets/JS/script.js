/**/
var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1 = document.getElementById('giocatore1')
var giocatore2 = document.getElementById('giocatore2')
var valore1;
var valore2;
var messaggio = document.getElementById('risultato');
var estratto; 

/*---------------------------------------------------------------*/

window.addEventListener('load', function(){
    btnReset.setAttribute('disable', 'true') //imposta un attributo a questo button e l'attributo è disable true
    btnReset.style.backgroundColor = 'red'; 
    btnReset.style.color = 'white';
});
/*window load è quello che succede al momento del caricamento della pagina: in partenza il button è disabilitato, è rosso e ha la scritta bianca. Lavoriano su JS e non css perchè le manipola JS, quando si gioca cambia questi valori. */

/*---------------------------------------------------------------*/

btnVerifica.addEventListener('click', function(){
    valore1 = Number(giocatore1.value);
    valore2 = Number(giocatore2.value);
    verifica();
});

verifica = () => {
    if(!valore1 || !valore2){
        messaggio.innerHTML = 'Attenzione! Entrambi i giocatori devono inserire un valore';
        return;

    } else if(valore1 <1 || valore2 <1 || valore1> 100 || valore2 > 100){
        messaggio.innerHTML = 'Attenzione! Inserire un valore numerico tra 1 e 100';
        return;

    }else if(valore1 === valore2){
        messaggio.innerHTML = 'Attenzione! Inserire valori diversi';
        return;

    }else{
        estrai();
        calcola();
    }
};

//in questo blocco dichiaro cosa fa il verifica nell'eventlistener e poi definisco cosa fa la variabile veridica e una volta verificato passo al blocco dopo dove definisco la funzione estrai e calcola. 


/*---------------------------------------------------------------*/

estrai = () => {
    estratto = Math.floor(Math.random() * 100 + 1); 
};

calcola = () => {
    btnReset.removeAttribute('disabled'); //btn abilitato
    btnReset.style.backgroundColor = 'green'; //btn colorato di verde
    giocatore1.setAttribute('disabled', 'true'); //abbiamo disabilitato i due cambi di imput e li abbiamo fatti grigi
    giocatore1.style.backgroundColor = 'gray';
    giocatore2.setAttribute('disabled', 'true');
    giocatore2.style.backgroundColor = 'gray';

    document.getElementById('estratto').innerHTML = `numero estratto: ${estratto}`;

    switch(true){
        case valore1 === estratto: 
            messaggio.innerHTML = 'Il giocatore 1 ha indovinato';
            break; 
        case valore2 === estratto: 
            messaggio.innerHTML = 'Il giocatore 2 ha indovinato';
            break;
        case Math.abs(estratto - valore1) < Math.abs(estratto - valore2): 
            messaggio.innerHTML = 'Nessuno ha vinto ma il giocatore 1 si è avvicinato di più';
            break; 
        case Math.abs(estratto-valore2) < Math.abs(estratto - valore1): 
            messaggio.innerHTML = 'Nessuno ha vinto ma il giocatore 2 si è avvicinato di più';
            break; 
        default: 
            messaggio.innerHTML = 'Pareggio!';
            break;    
    }

    btnVerifica.setAttribute('disabled', 'true'); 
    btnVerifica.style.backgroundColor = 'red';
    btnVerifica.style.color = 'white';
}

//Math.abs è numero assoluto ed è importante eprchè se numero estratto è maggiore del valore messo allora si ottiene un numero negativo e quindi io devo metterlo in numero assoluto

/*---------------------------------------------------------------*/

btnReset.addEventListener('click', function(){
    btnVerifica.removeAttribute('disabled'); //non è più disabilitato
    btnVerifica.removeAttribute('style'); //non è più colorato
    giocatore1.removeAttribute('disabled');
    giocatore1.removeAttribute('style');
    giocatore2.removeAttribute('disabled');
    giocatore2.removeAttribute('style');

    giocatore1.value = '';
    giocatore2.value = '';
    messaggio.innerHTML = '';
    document.getElementById('estratto').innerHTML = '';
//resetto tutto mettendo spazi vuoti


    btnReset.setAttribute('disable', 'true') 
    btnReset.style.backgroundColor = 'red'; 
    btnReset.style.color = 'white';
//ripristino la caratteristica del bottone reset all'inizio appena carica la pagina
});

/*---------------------------------------------------------------*/


/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/

/*---------------------------------------------------------------*/


