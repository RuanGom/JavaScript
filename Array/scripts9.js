import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa 8');

let array = [];

for(let cont = 0; cont < 5; cont++){
    console.log('Insira o nome:');
    array[cont]=ler()

}

    console.log('Começam com L:');

    for(let item of array){
        if(item.charAt(0)=='L' || item.charAt(0)=='l'){
        console.log(item)
        }
    }