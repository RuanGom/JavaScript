import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 9.2');

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

    console.log('A maior nota é:');


    let maior = array[0];
    for(let cont=1;cont < x; cont++){
        if(array [cont] > maior ){
            maior = array[cont] 
        }
    }

    console.log(maior)