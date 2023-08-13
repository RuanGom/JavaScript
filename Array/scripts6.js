import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 6');

console.log('Quantos números você quer guardar:');
let n = Number(ler())

let array = [];

for(let cont = 0; cont < n; cont++){
    console.log('Insira o número:');
    array[cont] = Number(ler())
   

}

console.log('O dobro dos números é:');

    for(let item of array){
        let x = 2 * item
    
        console.log(x)
    }