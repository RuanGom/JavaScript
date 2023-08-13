import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 9');

let array = [];

console.log('Quantos notas você quer calcular:');
let x = Number(ler());

for(let cont = 0; cont < x; cont++){
    console.log('Insira o número:');
    array[cont]=Number(ler())

}

console.log('Notas digitadas:');

    for(let item of array){
        console.log(item)
    }

    console.log('A média é:');


    let soma = 0;
    for(let item of array){
        soma += item;
    }

    console.log( soma / x)