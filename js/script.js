// # Fase di preparazione
//recupero gli elementi
const numbersList = document.getElementById('pc-numbers');
const listElement = document.querySelectorAll('li');

// # Funzioni
//genero dei numeri casuali da 1 a 100
function getNumbers() {
    const cpuNumbers = Math.floor(Math.random() * 100 + 1);
    return cpuNumbers;
}
console.log(getNumbers());

// # Genero 5 numeri casuali
//creo l'array di numeri vuoto
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    //genero un numero casuale per 5 volte
    getNumbers(i);
    //lo inserisco nell'array
    randomNumbers.push(i);
}
console.log(randomNumbers); 