import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 3');

console.log('Quantos números você quer guardar:');
let n = Number(ler())

let array = [];

for(let cont = 0; cont < n; cont++){
    console.log('Insira o número:');
    array[cont]=ler()

}

console.log('Você digitou os número:');

    for(let item of array){
        console.log(item)
    }