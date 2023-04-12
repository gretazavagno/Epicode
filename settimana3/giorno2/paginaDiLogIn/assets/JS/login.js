// Questo js deve prendere il nome utente, deve scriverlo da qualche parte nel localstorage (ci mostra come si fa) e deve passare alla pagina successiva. Tutto questo lo deve fare il button quindi EventListener è il button

document.getElementById('entra').addEventListener('click', function(){
    let utente = document.getElementById('utente').value; //la variabile utente è il valore che viene inserito nell'input utente
    if(utente == ''){ //se non c'è nome utente blocca procedura e manda un alert
        alert('Inserire il nome utente');
        return; // se la procedura arriva a qua non farà niente di tutto quello che c'è scritto dopo, return interrompe l'esecuzione di un blocco.
    }
    //localStorage: archiviazione nella chache del browser serve a mandare i dati da un punto all'altro della procedura e ha 2 metodi: set item (vuole il nome del local storage che è una stringa, e un valore da metterci dentro) e get item.
    localStorage.setItem('utente', utente); //questo deve andare alla pagina Todo
    location.href = './todo.html'; //location.href è l'istruzione (metodo) per fare in modo che un button sia un link.. 

});

//LocalStorage deve solo leggere e scrivere il dato ma la verifica DEVE essere fatta nell'altra pagina perchè se no potrebbe entrare chiunque

//Abbiamo bloccato l'accesso al logIn però se vado sulla barra e scrivo l'indirizzo link alla pagina di login allora posso entrare e come faccio a bloccare anche questo? Lo faccio nella todo.js a livello *

