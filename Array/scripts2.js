import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 2');

let array = [];

for(let cont = 0; cont < 5; cont++){
    console.log('Insira o nome:');
    array[cont]=ler()

}

console.log('Você digitou os nomes:');

    for(let item of array){
        console.log(item)
    }