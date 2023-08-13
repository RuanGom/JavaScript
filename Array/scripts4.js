import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 4');

console.log('Quantos números você quer guardar:');
let n = Number(ler())

let array = [];

for(let cont = 0; n>cont; n--){
    console.log('Insira o número:');
    array[n]=ler()

}

console.log('Você digitou os número:');

    for(let item of array){
        console.log(item)
    }