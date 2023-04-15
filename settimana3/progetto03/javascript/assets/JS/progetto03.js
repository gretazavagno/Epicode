const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
  
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ];

/*REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)*/

//-------------------------------JS Basics------------------------------------------------------------

/* ESERCIZIO A: Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.*/
console.log('*** ESERCIZIO A ***');

var sum = 10 + 20;
console.log(sum);

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO B: Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).*/

console.log('*** ESERCIZIO B ***');

var random = Math.floor(Math.random() *10*2) + 1; //va bene scrivere anche *20 o *21 è la stessa cosa
console.log(random);


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO C: Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.*/
console.log('*** ESERCIZIO C ***');
var me = {
    name: 'Greta',
    surname: 'Zavagno',
    age: 23
};

console.log(me);

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO D: Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.*/
console.log('*** ESERCIZIO D ***');

var me = {
    name: 'Greta',
    surname: 'Zavagno',
    age: 23
};
delete me['age']; //delete lascia lo spazio vuoto

console.log(me);


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO E: Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.*/
console.log('*** ESERCIZIO E ***');

me.skills = ['Javascript', 'CSS',];
console.log(me);


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO F: Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".*/
console.log('*** ESERCIZIO F ***');

me.skills.push('HTML');
console.log(me);


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO G: Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".*/
console.log('*** ESERCIZIO G ***');

me.skills.pop();
console.log(me);


//---------------------------------------------------------------------------------------------------------
                                                        // FUNZIONI
//----------------------------------------------------------------------------------------------------------

/* ESERCIZIO 1: Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.*/
console.log('*** ESERCIZIO 1 ***');


function dice(){
    let numeriCasuali = Math.floor(Math.random()*6 +1);
    return numeriCasuali;
}; 
console.log(dice());


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2: Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.*/
console.log('*** ESERCIZIO 2 ***');


function whoIsBigger(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    };
};

console.log(whoIsBigger(7, 5));

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3: Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]*/
console.log('*** ESERCIZIO 3 ***');


function splitMe(a){
    let array = a.split(' '); //senza lo spazio mi crea un array in cui ogni lettera è un elemento dell'array
    return array;
}
console.log(splitMe('I love coding'));
    

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4: Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.*/
console.log('*** ESERCIZIO 4 ***');

function deleteOne(str, boolean) {
  
    if (boolean === true) {
      
      console.log(str.substring(1));
    } else {
        console.log(str.substring(0, str.length -1));
    }
  };

deleteOne('CIAO', true);
//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5: Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"*/
console.log('*** ESERCIZIO 5 ***');

function onlyLetters(stringa){
    var risultato = ''; //la stringa dove andrò a mettere solo le lettere
    for (let i=0; i<stringa.length; i++){
        var carCorrente = stringa.charAt(i); //do al carattere corrente una variabile
        if(isNaN(carCorrente)){ //isNaN = is Not a Number --> se il carattere non è un nummero allora lo metti nella stringa risultato.
            risultato += carCorrente;
        }else if(carCorrente === ' '){ // e se il carattere corrente è uno spazio stampalo
            risultato += carCorrente;
        };
    }
    return risultato;
};

console.log(onlyLetters('I have 4 dogs'));

/* Progetto Codice:
    stringa = I HAVE 4 DOGS
    i mi rappresenta ogni indice della stringa: 
        i=0 --> I
        i=1 --> ' '
        i=2 --> H
        e così via
    Il ciclo for 
        Primo giro: se I non è un numero allora me lo stampi in risultato
        Secondo giro: se '' non è un numero allora me lo stampi in risultato (I'')
        Terzo giro: se H non è un numero allroa me lo stampi in risultato (I''H)
        così via fino al numero il quale no viene stampato. 
    Else If mi aggiunge la condizione di stampare anche lo spazio che incontra l'indice.
*/

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 6: Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email. Sarebbe da usare la regex di convalida email*/
console.log('*** ESERCIZIO 6 ***');

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm"); //trovata Regex per convalida email


function isThisAnEmail(stringa){
    if(emailRegex.test(stringa)){ //il metodo test() mi restituisce true se la stringa rispetta la mia Regex
        console.log('true');
    }else{
        console.log('false');
    };

};
isThisAnEmail('g.zavagno1@gmail.com');

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 7: Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.*/
console.log('*** ESERCIZIO 7 ***');

let giorniSettimana = ['DOMENICA', 'LUNEDì', 'MARTEDì', 'MERCOLEDì', 'GIOVEDì', 'VENERDì', 'SABATO'];

function whatDayIsIt(date){
    return giorniSettimana[date.getDay()]; //getDay() va a pescare dall'array l'indice da 0 a 6 del valore date
};
console.log(whatDayIsIt(new Date()));


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 8: Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('*** ESERCIZIO 8 ***');

function rollTheDices(numero){ //numero rappresenta le invocazioni di dice()

    var values = []; //proprietà value dell'oggetto che contiene un array con tutti i valori estratti da dice()
    var sum = 0;//propietà sum dell'oggetto che deve rappresentare la somma di tutti i valori estratti con dice() quindi sum += dice()

    for(let i=0; i<numero; i++){ 
        var dadi = dice();
        values.push(dadi);
        sum += dadi; //Primo giro: 0=0+dice()
                 //metto dentro l'array values i numeri che crea dice() a ogni giro per n volte (parametro rollthedices)
    };
    var object = {
        sum: sum,
        values: values
    };
    return object;
};
console.log(rollTheDices(3));


/* Per fare questo esercizio ho preso come valore di numero 3 e dice fa uscire rispettivamente: 
    1) dice = 4
    2) dice = 3
    3) dice = 2
    Quindi creo un for che parte da 0 e fa 3 giri: 
        Primo giro: sum = 0 --> 0+4 = 4
        Secondo giro: sumo = 4--> 4+3 = 7
        Terzo giro: sum = 7 --> 7 + 2 = 9
    Sum alla fine del for vale 9
    values invece avrà come array [4, 3, 2];
*/

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 9: Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data. */
console.log('*** ESERCIZIO 9 ***');

var millisecondiForDays = 1000*60*60*24; //in un minuto ci sono 1000 mls

function howManyDays(a, b){
    var oggi = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()); //il metodo UTC prende l'anno di a, il mese di a e la data di a
    var tuaData = Date.UTC(b.getFullYear(), b.getMonth(), b.getDay()); 

    console.log(Math.floor((oggi - tuaData) / millisecondiForDays));
};

howManyDays(new Date(), new Date('1999-12-22'));



//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 10: Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.*/
console.log('*** ESERCIZIO 10 ***');

function isTodayMyBirthday(compleanno){
    let today = new Date(); //creo una variabile per la giornata corrente new Date() senza argomento mi restituisce la data di oggi presa dal browser
    if(today.getMonth() === compleanno.getMonth() && today.getDate() === compleanno.getDate() && today.getDay() === compleanno.getDay()){
        console.log('true');
    }else{
        console.log('today is not my birthday');
    };
};

isTodayMyBirthday(new Date('1999-12-22'));

//----------------------------------------------------------------------------------------------------------
                                            // Arrays & Oggetti
                // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
//----------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 11: Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.*/
console.log('*** ESERCIZIO 11 ***');

var oggetto = {
    Nome: 'Greta',
    Cognome: 'Zavagno',
    Età: '23',
    skills: 'javascript, html, css',
};

var skills = 'javascript, html, css';





//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 12: Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.*/
console.log('*** ESERCIZIO 12 ***');

function newestMovie(movies) {
    let newest = movies[0];
    for (let i = 1; i < movies.length; i++) { //creo un for che mi parte dall'indice 1 perchè lo 0 è la variabile creata
      if (movies[i].Year > newest.Year) { //se l'anno di movies[i] è maggiore della costante, allora lui diventa la costante. Questo si ripente fino allo scorrimento di tutti dell'oggetto. Se mettessi il < mi ritornerebbe il più vecchio
        newest = movies[i];
      }
    }
    return newest;
};
console.log(newestMovie(movies));

  /*Progetto del codice: 
    devo impostare una variabile che mi indica il primo oggetto di movies = newest
    poi devo scorre ogni indice di movies e confrontarlo con la mia variabile e la data è maggiore allora diventa lui il newest    
  */

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 13: Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.*/
console.log('*** ESERCIZIO 13 ***');

function countMovies(array){
    return array.length;
};

console.log(countMovies(movies));

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 14: Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.*/
console.log('*** ESERCIZIO 14 ***');

//const onlyTheYears = (array) => {
//    array.map((elem) => elem.Year);
//};

function onlyTheYears(array){
    let onlyYears = [];
    for(let i=0; i<array.length; i++){
        onlyYears.push(array[i].Year);
    };
    return onlyYears;
};

console.log(onlyTheYears(movies));

//metodo usando map()
function onlyTheYearsMap(array){
    return array.map(item => item.Year); //map applica su ogni elmento di array una funzione che mi restituisce i valori in un nuovo array. 
    };
console.log(onlyTheYearsMap(movies));

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 15: Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.*/
console.log('*** ESERCIZIO 15 ***');

const onlyInLastMillennium = (array) => {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (parseInt(array[i].Year) < 2000) {
			result.push(array[i]);
		};
	};
	return result;
};

console.log(onlyInLastMillennium(movies));
//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 16: Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.*/
console.log('*** ESERCIZIO 16 ***');


function sumAllTheYears(array){
    let result = 0;
    for(let i=0; i<array.length; i++){
        result += parseInt(array[i].Year); //parseInt per trasformare stringa in numero
    };
    return result;
};

console.log(sumAllTheYears(movies));


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 17: Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.*/

console.log('*** ESERCIZIO 17 ***');

//NON HO CAPITO COSA VUOLE



//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 18: Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array:   "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.*/
console.log('*** ESERCIZIO 18 ***');



function searchAndDivide(array, stringa){
    var match = [];
    var unmatch = [];
    for (let i=0; i<array.length; i++){
        if(array[i].Title.includes(stringa)){
            match.push(array[i]);
        }else{
            unmatch.push(array[i]);
        }
    }
    return {
        match: match,
        unmatch: unmatch
    };
};

console.log(searchAndDivide(movies, 'Lord'));




//film1 contiene tutti gli oggetti interi.
//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 19: Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.*/
console.log('*** ESERCIZIO 19 ***');

function removeIndex(numero){
    for(let i=0; i<movies.length; i++){
        if(i === numero){
            delete movies[numero]; //mi lascia la posizione vuota
            return movies; 
        };
    };
};
console.log(removeIndex(3));

/*
var removeIndex = (numero) => {
    delete movies[numero];
    return movies;
};

console.log(removeIndex(3));
*/


//----------------------------------------------------------------------------------------------------------
                // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
//----------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 20: Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.*/
console.log('*** ESERCIZIO 20 ***');

let container = () => {
    const container = document.getElementById('container');
    return container;
};

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 21: Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.*/
console.log('*** ESERCIZIO 21 ***');

var td = document.getElementsByTagName('td');


function selectTd(){
    return td;
};
selectTd();

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 22: Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.*/
console.log('*** ESERCIZIO 22 ***');

function stampaTd(){
    for(let i=0; i<td.length; i++){
        console.log(td[i].innerText);
    };
};

stampaTd();

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 23: Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.*/
console.log('*** ESERCIZIO 23 ***');

var link = document.getElementsByTagName('a');
function backgroundColor(){
    for(let i=0; i<link.length; i++){
        link[i].style.backgroundColor = 'red';
    };
};
backgroundColor();

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 24: Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".*/
console.log('*** ESERCIZIO 24 ***');

var lista = document.getElementById('myList');
var newElem = document.createElement('li');
var elementText = document.createTextNode('This is the new list element');

function newElement(){
    newElem.appendChild(elementText);
    lista.appendChild(newElem);
};

newElement();


//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 25: Scrivi una funzione per svuotare la lista non ordinata con id "myList".*/
console.log('*** ESERCIZIO 25 ***');

function svuotaLista(){
    lista.innerHTML = '';
};

svuotaLista();

//----------------------------------------------------------------------------------------------------------
/* ESERCIZIO 26: Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"*/
console.log('*** ESERCIZIO 26 ***');

function addTest(){
    var tr = document.getElementsByTagName('tr');
    for(let i=0; i<tr.length; i++){
        tr[i].classList.add('test');
    };
};

addTest();

//RIVEDERE

//----------------------------------------------------------------------------------------------------------
                                    // [EXTRA] JS Avanzato
//----------------------------------------------------------------------------------------------------------

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
  Esempio: halfTree(3)
  *
  **
  ***
*/

console.log('*** ESERCIZIO 27 ***');

function halfTree(altezza){
    for(let i=1; i<=altezza; i++){
        let row = '';
        for(let j=1; j<=i; j++){
            row += '*';
        };
        console.log(row);
    };
};

halfTree(4);


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/
console.log('*** ESERCIZIO 28 ***');


 


/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
//Questo array viene usato per gli esercizi. Non modificarlo.
console.log('*** ESERCIZIO 29 ***');
