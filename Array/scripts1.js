import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 1');

let array = [];

for(let cont = 0; cont < 5; cont++){
    console.log('Insira o número:');
    array[cont] = ler()

}

console.log('Você digitou os números:');

    for(let item of array){
        console.log(item)
    }

