// # Fase di preparazione
//recupero gli elementi
const numbersList = document.getElementById('pc-numbers');
const playButton = document.getElementById('play-button');
const userNumber = document.getElementById('user-number');
const inputElement = document.querySelectorAll('input');
console.log(userNumber, inputElement);
//creo l'array di numeri vuoto
let randomNumbers = [];
let userNumbers = [];

// # Funzioni
//genero dei numeri casuali da 1 a 100
function getNumbers() {
    const cpuNumbers = Math.floor(Math.random() * 100 + 1);
    return cpuNumbers;
}


// Genero 5 numeri e creo lista
function pcNumbers() {
    for (let i = 0; i < 5; i++) {
        //genero un numero casuale per 5 volte
        getNumbers(i);
        //lo inserisco nell'array
        randomNumbers.push(getNumbers(i));
        //creo un elemento lista con le classi di bootstraps
        let listElement = document.createElement('li');
        listElement.classList.add('list-group-item')
        //gli inserisco uno dei numeri casuali generati precedentemente
        listElement.innerText = randomNumbers[i];
        //inserisco il tutto nella lista html
        numbersList.appendChild(listElement);
    }
}

pcNumbers();

//inserisco i numeri dell'utente nell'array al click del bottone
playButton.addEventListener('click', function (event) {
    // ! prevengo l'invio del form
    event.preventDefault();


})