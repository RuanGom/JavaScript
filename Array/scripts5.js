import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 5');

console.log('Qual tabuada você quer:');
let n = Number(ler())

let array = [];

for(let cont = 0; cont <= 10; cont++){


    let x = cont * n
    array[cont]=x

}

console.log('Resultado:');

    for(let item of array){
        console.log(item)
    }