//PER NON ANDARE SCRIVENDO IL LINK 
/*
window.addEventListener('load', function(){ 
    if (localStorage.getItem('cb') !== 'unchecked' && !localStorage.getItem('risultato')) {
      location.href = '../errore.html';
    }
});
*/

//Dobbiamo prima passare con un localstorage il valore di result e di count

// var count = localStorage.getItem('count');
// var results = sessionStorage.getItem('risultato');

// var percentualeCorr = ((results / count) * 100); //percentuale di risposte corrette
// var percentualeIncorr = 100 - percentualeCorr; //percentuale di risposte non corrette
// var frazCorr = `${results} / ${count}`; //frazione di risposte corrette 
// var frazIncorr = `${count - results} / ${count}`; //frazione di risposte corrette 

// var cakeT = document.getElementById('cake').getContext('2d'); // funzione predefinita per dire dove sta questo grafico e che sarà 2d.

// // Definisco i dati da mostrare nel grafico
// // Grafico
// const ctx = document.getElementById('cake');

// new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     datasets: [{
//       data: [percentualeCorr, percentualeIncorr],
//       backgroundColor: ['#00ffff' ,'#c2128d',],
//       label: '%',
//       borderWidth: 1,
      
//     }]
//     },
// });

//var corrette = document.getElementById('corrette').createElement('h2');

document.getElementById('corrette').innerHTML = `CORRECT: <br> ${percentualeCorr + '%'} domande corrette:<BR> ${frazCorr}`;
document.getElementById('sbagliate').innerHTML = `WRONG: <br> ${percentualeIncorr + '%'} domande sbagliate:<BR> ${frazIncorr}`;
  //var sbagliate = document.getElementById('sbagliate').createElement('h2', 'p');

  if(results < 6){
    let title = document.getElementById('score');
    title.innerHTML = 'Fail!</br><span class=\"green\">you failed the exam.</span>';
}

window.onload = () => {
    let result = sessionStorage.getItem('risultato');//controlla dati salvati nella navigazione e reindirizza alla prima pagina
    if(!result){
        window.location = './errore.html';
    }
    let bar = document.getElementById('resultBar');//viene impostata la progress bar
    bar.setAttribute('style', `--value:${100 - result * 10}`);
    let correctTitle = document.getElementById('correct');
    let wrongTitle = document.getElementById('wrong');
    //vengono impostati i testi dei titoli

    correctTitle.innerHTML = `Correct</br><span class="bolder">${result *10}%</span></br><span class="rq">${result}/10 questions</span>`;
    wrongTitle.innerHTML = `Wrong</br><span class="bolder">${(10 - result) *10}%</span></br><span class="rq">${10 - result}/10 questions</span>`;

    if(result < 6){
        let title = document.getElementById('score');
        title.innerHTML = 'Fail!</br><span class=\"green\">you failed the exam.</span>';
    }


    let button = document.getElementById('buttonRate');
    button.disabled = false;
    button.onclick = () => {
        window.location = './feedback.html';
    };
};