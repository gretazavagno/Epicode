window.addEventListener('load', function(){ 
    if(!localStorage.getItem('utente')){
        location.href = '../../errore.html';
    }
});

// * Qua blocchiamo il caricamento della pagina, in questo modo se scrivo direttamente sulla barra degli strumenti il link della pagina Todo allora mi va in errore.


//Adesso se è tutto regolare entra in Todo.html e dice Ciao Dario
var utente = localStorage.getItem('utente'); 
document.getElementById('saluto').innerHTML += utente; //scrivo il valore del LocalStorage nell'html


//adesso se clicco logout mi cancella i dati e torna alla pagina di login
document.getElementById('logout').addEventListener('click', function(){
    localStorage.removeItem('utente'); //al posto di remuveItem va bene anche il metodo clear
    location.href = './index.html'; 
});