// # Fase di preparazione
//recupero gli elementi
let numbersList = document.getElementById('pc-numbers');

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
    randomNumbers.push(getNumbers(i));
    //creo un elemento lista con le classi di bootstraps
    let listElement = document.createElement('li');
    listElement.classList.add('list-group-item')
    //gli inserisco uno dei numeri casuali generati precedentemente
    listElement.innerText = randomNumbers[i];
    //inserisco il tutto nella lista html
    numbersList.appendChild(listElement);
}